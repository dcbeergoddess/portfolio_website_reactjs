import React, { Component } from 'react';
import Projectcard from '../components/Projectcard';
import { Flex } from '../components/Flex';
// import covidpic from '../img/covid_screenshot.png';
import ofcpic from '../img/OFC.png';
import teampic from '../img/TeamProfile.png';
import dchcpic from '../img/project.png';

class Portfolio extends Component {
  render() {
    return (
      <div className='condiv'>
        <h1 className='subtopic'>Portfolio</h1>
        <Flex
          container
          display='flex'
          width='90%'
          margin='5px auto'
          flexDirection='row'
          justifyContent='space-between'
        >
          <Projectcard
            title='DC Hook && Coder Designs'
            image={dchcpic}
            description='Beginning of a CRUD Application to display my crochet and knit projects. Users can log in and comment on my projects'
            techstack='HTML | CSS | JavaScript | Node.js | EJS | Bootstrap | passport.js | Express | Heroku'
            github='https://github.com/dcbeergoddess/dcHooknCoderDesigns'
            deploy='https://dc-hook-n-coder-designs.herokuapp.com/projects'
          />
          <Projectcard
            title='Organizing for Change'
            image={ofcpic}
            description='(Collaborative Project) A MERN Stack application that creates a safe space in the technological world to promote local non-violent rallies and protests in DC inspired by the Black Lives Matter Movement.'
            techstack='React.js | React Bootstrap | Flexbox | Node | MongoDB | HTML | CSS | JavaScript | Heroku'
            github='https://github.com/dcbeergoddess/OFC'
            deploy='https://organizing-for-change.herokuapp.com/'
          />

          <Projectcard
            title='Team Profile Generator'
            image={teampic}
            description="Using JavaScript and Node Package Managers, this CLI application will serve as a tool that a manager of a software engineering team can use to generate a webpage to display their team's basic info. The info will allow the manger to have quick access to emails and GitHub profiles."
            techstack='CLI | Javascript | NODE | inquirer.js | chalk.js | HTML | CSS'
            github='https://github.com/dcbeergoddess/team_profile_generator'
            deploy='https://dcbeergoddess.github.io/team_profile_generator/'
          />
          <Projectcard
            title='Covid Tracking DMV'
            // image={covidpic}
            description='(Collaborative Project) Get detailed information regarding the Covid-19 pandemic on each state in the DMV area and provide an outlet to take a break and “Escape from Reality”.'
            techstack='HTML | CSS | JavaScript | JQuery | API | Flexbox | moment.js | chart.js'
            github='https://github.com/dcbeergoddess/dmv_covid'
            deploy='https://dcbeergoddess.github.io/dmv_covid/index.html'
          />
        </Flex>
      </div>
    );
  }
}

export default Portfolio;
