import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import 'normalize.css';
import Carousel from 'react-bootstrap/lib/Carousel';
import CarouselItem from 'react-bootstrap/lib/Carousel';

// Using CSS Modules so we assign the styles to a variable
import s from './App.styl';
import logo from './react-logo.png';

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

export const Home = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <img src = {logo} />
          <h1>My name is Rocky Chau and I am a full stack web developer in San Francisco</h1>
        </div>
      </div>
    );
  },
});

export const NotFound = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <h4>Not found</h4>
      </div>
    );
  },
});

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export const App = React.createClass({
  propTypes: {
  },
  render() {
    return (
      <div className={s.App}>
        <nav className={s.nav}>
          <IndexLink to='/' activeClassName={s.active}>Home</IndexLink>
          <Link to='/about' activeClassName={s.active}>About</Link>
          <Link to='/contact' activeClassName={s.active}>Contact</Link>          
        </nav>
        {this.props.children}
      </div>
    );
  },
});


export const CarouselSlide = React.createClass ({
  getInitialState() {
    return {
      index: 0,
      direction: null,
      controls: true
    };
  },

  handleSelect(selectedIndex, selectedDirection) {
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
  },

  render: function () {
    var settings = {
      index: 0,
      direction: null
    };
    return (
      <Carousel data-slide-to="0" className="active" activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        <CarouselItem>
          <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
          <div className="carousel-caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
          <div className="carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img width={900} height={500} alt="900x500" src="/assets/carousel.png"/>
          <div className="carousel-caption">
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </div>
        </CarouselItem>
      </Carousel>
    );
  }
});

// ReactDOM.render(<CarouselSlide />, mountNode);

