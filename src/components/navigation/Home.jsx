import React from 'react';
import '../../style/Home.css';

const Home = () => (
  <div className="homeCont">
    <h2 className="homeTitle">Welcome To Our Page</h2>
    <p className="homeText">
      Math Magicians is a React application with multiple components that
      facilitate various parts of the user interface. The application offers
      users the ability to perform mathematical computations and explore a range
      of motivational quotes linked to mathematics.
    </p>

    <p className="homeText">
      The React Router DOM library provides a powerful routing system that
      allows users to navigate between different parts of the application
      without having to reload the page. The routing system is defined using the
      BrowserRouter, Route, and Switch components, which provide exclusive
      routing and ensure a smooth user experience.
    </p>
    <p className="homeText">
      Overall, the Math Magicians application is a powerful example of the
      capabilities of React and the React Router DOM library. By providing an
      intuitive user interface and a powerful routing system, the application
      demonstrates how React can be used to build complex and engaging
      applications.
    </p>
  </div>
);

export default Home;
