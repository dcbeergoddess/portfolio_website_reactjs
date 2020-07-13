import React, { Component } from 'react';
import Projectcard from "../components/Projectcard";
import { Flex } from "../components/Flex"
import covidpic from '../img/covid_screenshot.png';

class Portfolio extends Component {

  render () {

    return (

      <div className="condiv">
        <h1 className="subtopic">Portfolio</h1>
        <Flex container display="flex" width="90%" margin="50px auto" flexDirection="row" justifyContent="space-between">

          <Projectcard 
            title="Covid Tracking DMV"
            image={covidpic}
            description="Get detailed, up to date information regarding the Covid-19 pandemic on each state in the DMV area and provide an outlet to take a break and “Escape from Reality”."
            techstack="HTML | CSS | JavaScript | JQuery | API | Flexbox | moment.js | chart.js"
            github="https://github.com/dcbeergoddess/dmv_covid"
            deploy="https://dcbeergoddess.github.io/dmv_covid/index.html"
          /> 


        </Flex>
      </div>
    )
  }
}

export default Portfolio