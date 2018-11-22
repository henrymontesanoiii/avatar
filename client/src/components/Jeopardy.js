import React, { Component } from 'react';
import API from '../utils/API';
import Modal from './Modal';
import "../components/Jeopardy.css"


// on load, page will call jeopary questions api for a list of categories

class Jeopardy extends Component {

  state = {
    score: 0,
    message: "Choose a category to start",
    categoryId: 0,
    categoryNames: [],
    difficultyArray: ["medium", "easy", "hard"],
    difficulty: "medium",
    categoryList: [],
    question: "",
    answer: "",
    incorrectAnswers: [],
    answerChoice: "",
    categoryArray: [],
    category1: 0,
    category2: 0,
    category3: 0,
    quit: false,
    show: false
  }


  // on load, call below method for categories in NYC
  componentDidMount() {
    // call api
    this.getCategoryList();
    //  await   
    setTimeout(function () {
      this.generateRandomCategories();
      this.displayCategoryButtons();
    }.bind(this), 3000)
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };


  generateRandomCategories = () => {
      
    for (let i = 0; this.state.categoryArray.length < 4; i++) {
      let randNum =
        Math.floor(Math.random() * (32 - 9 + 1) + 9);
      console.log(randNum)
    //  this.state.categoryArray.find(randNum) ? i++ : this.state.categoryArray.push(randNum);
    if (i > 0 && (!this.state.categoryArray.includes(randNum))) {
      this.state.categoryArray.push(randNum)
    } else {
      if (i === 0) {

        this.state.categoryArray.push(randNum)
      }
    }
  }
  console.log(this.state.categoryArray)
  }
  // method to get all categories on load
  getCategoryList = () => {
    // this.setState({ incorrectAnswers: [], categoryId: 0 })
    API.getCategoryList()
      .then((res) => {
        console.log(res.data.trivia_categories[0]);
        let categoryList = this.state.categoryList;
        console.log(res.data.trivia_categories.length)
        // add the categories and their ids to array categoryList in order to map and show in dropbox
        for (let i = 0; i < res.data.trivia_categories.length; i++) {
          categoryList.push(res.data.trivia_categories[i])

        }
        // this.setState({ categoryId: 0 })
        console.log(this.state.categoryList)
      })
      .catch((err) => {
        console.log(err);
      });

  }

  displayCategoryButtons = () => {
    const categoryNames = [...this.state.categoryNames];
    this.state.categoryArray.forEach(id => {
      const { name } = this.state.categoryList.find(datalist => datalist.id === id)
      let newdata = { id: id, name: name }
      categoryNames.push(newdata);
    });
    // console.log(categoryNames);
    this.setState({ categoryNames });
    console.log(this.state.categoryNames);
  }



  // write method to hold onto API call for questions
  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }


  // based on category chosen from dropdown menu, get random question with api call. Save questions; incorrect answers and correct answer to state variables
  handleGetQuestion = (categoryId) => {
    console.log("Category button being clicked");
    console.log("category id: ", categoryId);
    // event.preventDefault();
    this.setState({ incorrectAnswers: [], categoryId: categoryId }, () => {
      // console.log("id in state: ", this.state.categoryId, "difficulty:", this.state.difficulty);

      API.getJeopardyQuestion(this.state.categoryId, this.state.difficulty)
        .then((res) => {
          console.log(res.data);
          this.setState({
            question: res.data.results[0].question,
            incorrectAnswers: res.data.results[0].incorrect_answers,
            answer: res.data.results[0].correct_answer

          })
          // add answer to incorrectAnswers array so as to display as a possible choice.
          let incorrectAnswers = this.state.incorrectAnswers;
          // console.log(this.state.question);
          // console.log(this.state.incorrectAnswers);
          console.log(this.state.answer);
          incorrectAnswers.push(res.data.results[0].correct_answer);
          console.log(this.state.incorrectAnswers);
          this.reArrangeAnswers(this.state.incorrectAnswers);
          console.log(this.state.incorrectAnswers);
          // console.log("difficulty:", this.state.difficulty);

          // console.log(this.state.incorrectAnswers[0], this.state.incorrectAnswers[1])
        })
        .catch((err) => {
          console.log(err);
        });
    })
  }
  // shuffle the answers array so the correct answer is mixed in and is displayed in random order.
  reArrangeAnswers = (array) => {
    // console.log(array)
    let currentIndex = array.length;
    // console.log(array.length)

    while (0 !== currentIndex) {
      // Pick an element
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      let temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    this.setState({ incorrectAnswers: array });
    // this.setState({difficultyArray: array})
    // this.setState({difficulty: this.state.difficultyArray[0]})
    // console.log(this.state.difficultyArray);
  }

  // handleQuitCuttonClick = () => {

  //   setState{}

  // }

  handlecheckAnswerChoice = (answerChoice) => {

    this.setState({ answerChoice: answerChoice }, () => {
      console.log("in state: ", this.state.answerChoice);
      console.log(this.state.answer);

      if (this.state.answerChoice === this.state.answer) {

        this.setState({ score: this.state.score + 100, message: "Correct! Choose another category to play again." })
        // this.setState({ incorrectAnswers: [], categoryId: 0 })
        return;
      } else {

        this.setState({ score: this.state.score - 100, message: `Incorrect! The correct answer is: ${this.state.answer}. 
        Choose another category to play again.` })
        // this.setState({ incorrectAnswers: [], categoryId: 0 })
        return;
      }

    })
  }


  render() {
    return (
      <div className="col">
      <div className="container">
        <div className="card mt-5">
          <div className="card-header">
              <h3 style={{display: "inline-block"}} className="card-title">{this.state.message}</h3>
              <h4 style={{display: "inline-block"}} className="Score ml-5"> Score: {this.state.score}</h4>
            {/* <div className="score mr-auto"><h4>Score: {this.state.score}</h4></div><br></br> */}
            {/* <h4>Select a category</h4> */}

            <div className="card-body text-center">
              {/* <thead> */}
              {/* <tr> */}

              {this.state.categoryNames.map((category, index) => {
                return (
                  <button type="button" className="btn btn-info mr-2" onClick={() => { this.showModal(); this.handleGetQuestion(category.id) }} value={category.id} key={index}>{category.name} </button>
                )
              })}
            </div>

            <main>
              {/* <h1>React Modal</h1> */}
              <Modal show={this.state.show} handleClose={this.hideModal}>
                <h4>Question:</h4><br></br>
                <h4> {this.state.question}</h4>
                {this.state.incorrectAnswers.map((answer, index) => {
                  return (
                    <button type="button" className="btn btn-info mr-2"
                      onClick={() => { this.hideModal(); this.handlecheckAnswerChoice(answer) }} key={index} value={answer}>{answer}</button>
                  )
                })}
              </Modal>
            </main>
          </div>
        </div><br></br>
      </div>
    </div>
  


    )
  }



}
export default Jeopardy;