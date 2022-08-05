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
          I've been with Evolytics since August 2021 where I work as an Analytics Developer. This position has accelerated my knowledge in front-end development,
          the software development cycle, analytics implementations, and working with clients.
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
          I started my MSc in Data Science & Analytics degree in January 2022. Working in analytics developments and studying data science
          at the same time allow me to widen my view of the entire data lifecycle. I have a thorough understanding of how analytics strategies are developed, implemented,
          ingested, and used for analysis to produce actionable insights.
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
          I spent my college years at Graceland University from 2017-2021. I received degrees in Computer Science & Information Technology, Data Science, and Mathematics. 
          I was fortunate to partake in many extracurricular activties that significantly shaped my college experience.
        </p>
        <p>
          Here were some of my favorites.
        </p>
        <ul>
          <li>Serving as captain for the Men's Soccer team</li>
          <li>Successfully campaigning to serve as the Academic Student Council President</li>
          <li>Being elected by my peers to serve as a House President (RA+)</li>
        </ul>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;