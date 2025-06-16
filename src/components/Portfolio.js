import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Text from './Text';
import Section from './Section';
import Link from './Link';
import Project from './portfolio/Project';
import ProjectText from './portfolio/ProjectText';
import ProjectPreview from './portfolio/ProjectPreview';
import battlePrev from '../assets/images/portfolio/BattleShip.png';
import casestdyPrev from '../assets/images/portfolio/cycliccasestudy.png';
import fastApiPrev from '../assets/images/portfolio/fastapi-authentication-service.png';
import chessPrev from '../assets/images/portfolio/chess-1.png';
import grandjoPrev from '../assets/images/portfolio/ugrandjo.png'

function Portfolio() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="Personal Projects" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
          Below is a selection of some recent and larger projects that I have worked on. For more detail on everything that I have done, as well as what I am currently working on, check out my GitHub at <Link targetBlank href="https://github.com/IngaMaholwana">https://github.com/IngaMaholwana</Link>
        </Text>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="Ugrandjojo"
            technologies="TypeScript, JavaScript, CSS, Azure, OpenAi API"
            description="In a the Microsoft south africa ai for good hackthon I develop a vscode extension that uses AI to help users deal with feeling like an imposter. The extension provides users with a safe space to share their feelings and receive support, while also offering resources and tools to help them overcome their imposter syndrome. The extension has 4 sprites that users can interact with with different perosnalities and responses. Has ability to read code and provide feedback and suggestions."
            githubLink="https://github.com/IngaMaholwana/ugrandjojo"
          />
          <ProjectPreview src={grandjoPrev} alt="screenshot of vscode extension u-grand jo?" />
        </Project>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="BattleShip"
            technologies="Ruby on Rails, React, JavaScript"
            description="Battleship game that is event driven listeners that translate user actions turn based gameplay, dynamic user interface and clear win condition."
            githubLink="https://github.com/IngaMaholwana/BattleShip"
            liveLink="https://ingamaholwana.github.io/BattleShip/"
          />
          <ProjectPreview src={battlePrev} alt="screenshot of Battleship homepage" />
        </Project>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="Cyclic Case Study"
            technologies="R, CSV"
            description="Developed a dashboard in Rstudio now know as Posit cloud, from bike shop rental data and help them be able to gain more customers from their casual users."
            githubLink="https://github.com/IngaMaholwana/Cyclic-data-case-study"
            liveLink="https://posit.cloud/content/10491857"
          />
          <ProjectPreview src={casestdyPrev} alt="screenshot of the cyclic case for a bike rental" />
        </Project>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="fastapi-authentication-service"
            technologies="Python, FastAPI, JWT, PostgreSQL"
            description="full-stack authentication and authorization service using FastAPI to enable secure user registration, login, and access control for modern web applications JWT (JSON Web Token)-based authentication for stateless, scalable session management, including token generation, validation, and refresh logic ans secure password hashing and storage."
            githubLink="https://fastapi-authentication-service"
          />
          <ProjectPreview src={fastApiPrev} alt="screenshot of Api for user authentification" />
        </Project>
      </Section>

      <Section>
        <Project>
          <ProjectText
            title="FullChessRuby"
            technologies="Ruby"
            description="Fully developed game of chess using Ruby, played through the command-line. Features implemented, include selecting and viewing all moves, and ability to save/load games."
            githubLink="https://github.com/IngaMaholwana/FullChessRuby"
          />
          <ProjectPreview src={chessPrev} alt="screenshot of game of chess being played in the  command line" />
        </Project>
      </Section>
    </div>
  )
}

export default Portfolio;
