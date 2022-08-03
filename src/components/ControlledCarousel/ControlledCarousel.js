import Carousel from 'react-bootstrap/Carousel';

import { useState } from 'react';

const ControlledCarousel = (props) => {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" interval={null} indicators={true} controls={false}>
      <Carousel.Item>
        <h5>Analytics Developer <span>//</span> Evolytics</h5>
        <p>
          I started at Evolytics in August 2021 as an Analytics Developer. This position has accelerated my knowledge in front-end development,
          the development cycle, analytics implementations, and working with clients.
        </p>
        <p>
          I'm part of teams responsible for the analytics implementation of three clients (Move Inc., Hagerty Insurance, The Kroger Company) that collect behavioral data for over 10M users per
          day altogether. We accomplish this by writing software for data collection and performing analysis. Tag Management Systems like Adobe Launch and Tealium iQ play a significant part in our development cycle,
          as well as analytics services such as Adobe Analytics and Google Analytics. This role also requires exceptional skill in technical writing in order to handoff documentation to our clients.
        </p>
        <p>
          Here are some of the technologies we frequently use.
        </p>
        <ul>
          <li>JavaScript, HTML, CSS</li>
          <li>Node.js, ReactJS</li>
          <li>Unit Testing Libraries (Mocha, Chai)</li>
          <li>Adobe Launch, Tealium iQ</li>
          <li>Adobe Analytics, Google Analytics</li>
        </ul>
      </Carousel.Item>
      <Carousel.Item>
        <h5>Graduate Student <span>//</span> Graceland University</h5>
        <p>
          I started my MSc in Data Science & Analytics degree at Graceland University in January 2022. Working in analytics developments and studying data science
          at the same time allow me to widen my view of the entire data lifecycle. I have a better understanding of how analytics strategies are developed, implemented,
          sent downstream, and used for analysis to produce actionable insights.
        </p>
        <p>
          Here are some topics I've studied.
        </p>
        <ul>
          <li>Data science basics</li>
          <li>Extracting and cleaning data sets</li>
          <li>Machine learning techniques</li>
          <li>Regression analysis</li>
          <li>Working with big data</li>
          <li>R, Python</li>
        </ul>
      </Carousel.Item>
      <Carousel.Item>
        <h5>Undergraduate Student <span>//</span> Graceland University</h5>
        <p>
          I spent my college years at Graceland University from 2017-2021. Throughout my time there, Graceland allowed me to explore and learn about
          my passions and garner many skills that came from unique opportunities that are only available at small schools.
        </p>
        <p>
          I received Bachelors of Science degrees in Computer Science & Information Technology, Data Science, and Mathematics. I was involved with many extracurriculars:
          the Honors Program, the Ackerley Scholars Program, Academic Student Council, Student Government, Residence Life, Enactus, Association for Computing Machinery,
          and played varsity soccer.
        </p>
        <p>
          Here are some of my favorites.
        </p>
        <ul>
          <li>Serving as captain for the Men's Soccer team</li>
          <li>Successfully campaigning to serve as the Academic Student Council President</li>
          <li>Being elected by my peers to serve as a House President (RA+)</li>
        </ul>
        <p>
          These opportunities significantly shaped and enhanced my college experience. They allowed me to develop my own leadership style, learn how to work
          with diverse individuals, and how to build a success-driven culture.
        </p>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;