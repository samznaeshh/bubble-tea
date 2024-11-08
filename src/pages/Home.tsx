import React from 'react';
import Header from '../foot-head/header';
import Content from '../home-content/content';
import Reviews from '../home-content/reviews';
import '../css/main.css';
import Top from '../home-content/top';

function home() {
  return (
    <div className='all'>
        <Top />
        <Content />
        <Reviews />
    </div>
  )
}

export default home;