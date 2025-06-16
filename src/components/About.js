import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import MarkdownButton from './MarkdownButton';
import Comment from './Comment';
import { portfolio, contact } from '../utils/directory'
import TabLink from './TabLink';
import Link from './Link';
import ResumePDF from '../assets/documents/Inga_Maholwana_Resume_2025.pdf';

function About() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="About" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>Hi! My name is Inga Maholwana. I am a full stack software engineer who graduated from Wethink</Text>
        <Text>While originally going to school for Law, I started coding as a hobby through 2019 and from that point on, I was hooked. Since then I have been learning and building every opportunity I get. For some examples of recent work, see <TabLink className="font-bold text-yellow" tab={portfolio}>Portfolio.js</TabLink>.</Text>
        <Text>For information on how to reach out, see <TabLink className="font-bold text-yellow" tab={contact}>Contact.md</TabLink>.</Text>
      </Section>

      <Section>
        <MarkdownButton as="a" href={ResumePDF} target="_blank" rel="noreferrer">
          [Download Resume]
        </MarkdownButton>
      </Section>

      <Section>
        <MarkdownHeader headingLevel="2" text="Technologies" className="text-xl md:text-3xl" />
        <LineBreak />
        <Comment>
          While these are some of the languages I am the most comfortable with, I am constantly looking to expand my toolkit and am open to working with and learning new skills!
        </Comment>
        <Text>
          <span className="font-bold text-pink">Languages and Frameworks:</span> Ruby, Ruby on Rails, Python, Java, GraphQL, R, SQL, React, C#, C++, JavaScript, HTML, CSS, TypeScript, Node.js, Express.js, Next.js, Tailwind CSS, Bootstrap
        </Text>
        <Text>
          <span className="font-bold text-pink">Databases:</span> PostgreSQL, MySQL, MongoDB, SQLite
        </Text>
        <Text>
          <span className="font-bold text-pink">Miscellaneous:</span> Git, Webpack, Object-Oriented Programming and Design, Test-Driven Development, Data Structures and Algorithms, Full Stack Web Development, REST APIs, Amazon S3, Azure, Docker, Firebase
        </Text>
      </Section>
    </div>
  )
}

export default About;
