import React, { Component } from 'react';

export default class SquareAd extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins className='adsbygoogle'
        style={{
          display: 'block',
          // width: '250px',
          // height: '250px',
        }}
        data-ad-client='ca-pub-6779320317509195'
        data-ad-slot='6232746278'
        data-ad-format='auto'
        data-full-width-responsive='true'
      />
    );
  }
}