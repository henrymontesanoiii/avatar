import React, { Component } from "react";
import "./Home.css";


const Home = () => (

  <div class='container'>

    <div class="row m-4">
      <div class="col-3">
        <div class='card card-home'>
        <div class='card-title text-center'><h3>Calculator</h3>
          <div class='card-body pt-0'>
            <a  href= "/calculator" class='center'><img alt="" class='img-circle img-fluid mb-3 ml-3 mr-3' src='https://media.giphy.com/media/xT5LMQRPHbTymgc5Bm/giphy.gif' title="Weather">
            </img></a>
          </div>
        </div>
      </div>
      </div>
      <div class="col-3">
        <div class='card card-home'>
          <div class='card-title text-center'><h3>Weather</h3>
            <div class='card-body pt-0'>
              <a href="/weather" class='deg0'><img alt="" class='img-circle img-fluid mb-3 ml-3 mr-3' src='https://www.ibm.com/blogs/business-analytics/wp-content/uploads/2017/08/weather-data.gif'></img></a>
            </div>
          </div>
        </div>

      </div>
      <div class="col-3">
        <div class='card card-home'>
          <div class='card-title text-center'><h3>Clock</h3>
            <div class='card-body pt-0'>
              <a href="/clock"  class='deg45'><img alt = "" class='img-circle img-fluid mb-3 ml-3 mr-3' src='https://www.artsyabode.com/pub/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/i/airplane-jumper.gif'></img></a>
            </div>
          </div></div>
      </div>
      <div class="col-3">
        <div class='card card-home'>
          <div class='card-title text-center'><h3>Trivia</h3>
            <div class='card-body pt-0'>
              <a href='/jeopardy' class='deg135'><img alt = "" class='img-circle img-fluid mb-3 ml-3 mr-3' src='https://www.ignitesocialmedia.com/wp-content/uploads/2018/02/YpJilaXXT8qJR6HQVKFM_ISM_Trivia.gif'></img></a>
            </div>
          </div></div>
      </div>
    </div>
    <div class="row m-4">
 
      <div class="col-4">
        <div class='card card-home'>
          <div class='card-title text-center'><h3>Create your Avatar</h3>

            <div class='card-body pt-0'>
              <a href='/avatar' class='deg180'><img alt="" class='img-circle img-fluid mb-3 ml-3 mr-3' src='https://cdn-images-1.medium.com/max/1600/1*lpEtdIMNuwHzgAWxypcGqw.gif'></img></a>
            </div>
          </div></div>
      </div>
      <div class="col-4"> <div class='card card-home'>
        <div class='card-title text-center'><h3>Shopping</h3>
          <div class='card-body pt-0'>
            <a href='/shopping' class='deg180'><img alt="" class='img-circle img-fluid mb-3 ml-3 mr-3' src='https://media1.tenor.com/images/197e8fae2c1dc45c3611080e71cc3408/tenor.gif'></img></a>
          </div>
        </div>
      </div>

      </div>
      <div class="col-4"> <div class='card card-home'>
        <div class='card-title text-center'><h3>Jokes</h3>
          <div class='card-body pt-0'>
            <a href='/jokes' class='deg180'><img alt="" class='img-circle img-fluidmb-3 ml-3 mr-3' src='https://i.giphy.com/media/3o7btXv9i4Pnjb1m0w/giphy.webp'></img></a>
          </div>
        </div>
      </div>

      </div>
    </div>

  </div>

);

export default Home;
