import React, { Component } from 'react';
import Button from "../Calculator/Button";
import Buttons from "../Calculator/Buttons";
import Display from "../Calculator/Display";
import * as math from 'mathjs';
import update from 'react-addons-update';


class avatarCalculator extends Component {

  constructor() {
    super()
    this.state = { operations: [] }
  }
  handleClick = data => {
    const value = data.target.getAttribute('data-value')
    switch (value) {
      case 'clear':
        this.setState({
          operations: [],
        })
        break
      case 'equal':
        this.calculateOperations()
        break
      default:
        const newOperations = update(this.state.operations, {
          $push: [value],
        })
        this.setState({
          operations: newOperations,
        })
        break
    }


  }

  calculateOperations = () => {
    let result = this.state.operations.join('')
    if (result) {
      result = math.eval(result)
      result = math.format(result, { precision: 14 })
      result = String(result)
      this.setState({
        operations: [result],
      })
    }
  }

  render() {
    return (
      <div >
        <div className ="container ml-5">
        <div className="row">
        
          <div className=" card-header bg-success text-white col-4 mb-1 text-center">

            <Display data={this.state.operations} />
          </div>
        </div>
        <Buttons>
          <div className="row">
            <div className="col-2 text-center btn btn-danger mb-1 ">
              <Button onClick={this.handleClick} label="C" value="clear" />
            </div>
            <div className="col-1 text-center btn btn-dark mb-1 ">
              <Button onClick={this.handleClick} label="/" value="/" />
            </div>
            <div className="col-1 text-center btn btn-dark mb-1 ">
              <Button onClick={this.handleClick} label="x" value="*" />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-center btn btn-primary mb-1 ">
              <Button onClick={this.handleClick} label="7" value="7" />
            </div>
            <div className="col-1 text-center btn btn-primary mb-1 ">
              <Button onClick={this.handleClick} label="8" value="8" />
            </div>
            <div className="col-1 text-center btn btn-primary mb-1 ">
              <Button onClick={this.handleClick} label="9" value="9" />
            </div>
            <div className="col-1 text-center btn btn-dark mb-1 ">
              <Button onClick={this.handleClick} label="-" value="-" />
            </div>
          </div>
          <div className="row">
            <div className="col-1 text-center btn btn-primary mb-1 ">
              <Button onClick={this.handleClick} label="4" value="4" />
            </div>
            <div className="col-1 text-center btn btn-primary mb-1 ">
              <Button onClick={this.handleClick} label="5" value="5" />
            </div>
            <div className="col-1 text-center btn btn-primary mb-1 ">
              <Button onClick={this.handleClick} label="6" value="6" />
            </div>
            <div className="col-1 text-center btn btn-dark mb-1 ">
              <Button onClick={this.handleClick} label="+" size="2" value="+" />
            </div>
          </div>
          <div className="row">
            <div className="col-3 text-center">
              <div className="row">
                <div className="col-4 text-center btn btn-primary mb-1 ">
                  <Button onClick={this.handleClick} label="1" value="1" />
                </div>
                <div className="col-4 text-center btn btn-primary mb-1 ">
                  <Button onClick={this.handleClick} label="2" value="2" />
                </div>
                <div className="col-4 text-center btn btn-primary mb-1 ">
                  <Button onClick={this.handleClick} label="3" value="3" />
                </div>
              </div>
              <div className="row">
                <div className="col-8 text-center btn btn-primary mb-1 ">
                  <Button onClick={this.handleClick} label="0" value="0" />
                </div>
                <div className="col-4 text-center btn btn-primary align-items-center mb-1 ">
                  <Button onClick={this.handleClick} label="." value="." />
                </div>
              </div>
            </div>
            <div className="col-1 text-center btn btn-warning d-flex align-items-center justify-content-center mb-1  ">
              <Button onClick={this.handleClick} label="="  value="equal" />
              <Button label="" value="null" />
            </div>
          </div>
          

        </Buttons>
      </div>
      </div>
    )
  }
};

export default avatarCalculator;