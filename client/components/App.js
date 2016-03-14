import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import 'normalize.css';

// Using CSS Modules so we assign the styles to a variable
import s from './App.styl';
import logo from './react-logo.png';
import './portrait.jpg'

// Favicon link is in the template, this just makes webpack package it up for us
import './favicon.ico';

export const Home = React.createClass({
  render() {
    return (
      <div className={s.page}>
        <div className={s.siteTitle}>
          <h1>My name is Rocky Chau and I am a full stack web developer in San Francisco</h1>
        </div>
        <div className={s.siteContentLeft}>
          <img src = {logo} />
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
          <Link to='/portfolio' activeClassName={s.active}>Portfolio</Link>
          <Link to='/contact' activeClassName={s.active}>Contact</Link>          
        </nav>
        {this.props.children}
      </div>
    );
  },
});
