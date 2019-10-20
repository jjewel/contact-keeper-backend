import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>This is a full stack MERN application</p>
      <a
        className='btn btn-dark'
        href='https://github.com/jjewel/contact-keeper'
      >
        <i class='fab fa-github'></i>&nbsp; Github Source
      </a>
    </div>
  );
};

export default About;
