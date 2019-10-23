import React from 'react';
import './App.css';
import SpaceXList from './Components/SpaceXList'
import ToggleBox from './Components/ToggleBox'
// const axios = require('axios');



function App() {
  return (
    <div className="App">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script src="https://kit.fontawesome.com/2555c1188f.js"></script>

    <div class="jumbotron" style={{backgroundColor:'#53B1E1', paddingBottom: '10px'}}>
    <h1 class="fancy display-4 text-center">
    SpaceX React Example
    </h1>
    <p class="lead text-center"> Below I access the SpaceX API and display relevant data!
                            <br/> This project shows my ability to play around with API's and display their data!
                            <br/> Using React and AJAX</p>

    <hr class="my-1"/>
    <h4 class="lead text-center"> Call This Endpoint: </h4>
    "https://api.spacexdata.com/v3/launches"
    </div> <i class="fas fa-rocket"></i>
    <ToggleBox title="Show Launches">
      <SpaceXList/>
    </ToggleBox>

    </div>
  );
}

export default App;
