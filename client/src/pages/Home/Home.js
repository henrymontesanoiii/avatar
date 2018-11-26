import React, { Component } from "react";
import "./Home.css";


const Home = () => (

  <div class='container'>

    <div class="row m-4">
      <div class="col-4">
        <div class='card card-home'>
          <div class='card-title text-center'><h3>Calculator</h3>
          </div>
          <div class='card-body'>
            <a  href= "/calculator" class='center'><img class='img-circle m-3 ' src='https://media.giphy.com/media/xT5LMQRPHbTymgc5Bm/giphy.gif' title="Weather">
            </img></a>
          </div>
        </div>

      </div>
      <div class="col-4">
        <div class='card card-home'>
          <div class='card-title text-center'><h3>Weather</h3>
            <div class='card-body'>
              <a href="/weather" class='deg0'><img class='img-circle m-3' src='https://www.ibm.com/blogs/business-analytics/wp-content/uploads/2017/08/weather-data.gif'></img></a>
            </div>
          </div>
        </div>

      </div>
      <div class="col-4">
        <div class='card card-home'>
          <div class='card-title text-center'><h3>Clock</h3>
            <div class='card-body'>
              <a href="/clock"  class='deg45'><img class='img-circle m-3' src='https://www.artsyabode.com/pub/media/catalog/product/cache/image/700x700/e9c3970ab036de70892d86c6d221abfe/a/i/airplane-jumper.gif'></img></a>
            </div>
          </div></div>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-4">
        <div class='card card-home'>
          <div class='card-title text-center'><h3>Trivia</h3>
            <div class='card-body'>
              <a href='/jeopardy' class='deg135'><img class='img-circle m-3' src='https://www.ignitesocialmedia.com/wp-content/uploads/2018/02/YpJilaXXT8qJR6HQVKFM_ISM_Trivia.gif'></img></a>
            </div>
          </div></div>
      </div>
      <div class="col-4">
        <div class='card card-home'>
          <div class='card-title text-center'><h3>Create your Avatar</h3>

            <div class='card-body'>
              <a href='/avatar' class='deg180'><img class='img-circle m-3' src='https://cdn-images-1.medium.com/max/1600/1*lpEtdIMNuwHzgAWxypcGqw.gif'></img></a>
            </div>
          </div></div>
      </div>
      <div class="col-4"> <div class='card card-home'>
        <div class='card-title text-center'><h3>Calculator</h3>
          <div class='card-body'>
            <a href='#' class='deg180'><img class='img-circle m-3' src='https://cdn-images-1.medium.com/max/1600/1*lpEtdIMNuwHzgAWxypcGqw.gif'></img></a>
          </div>
        </div>
      </div>

      </div>
    </div>

  </div>

);

export default Home;
