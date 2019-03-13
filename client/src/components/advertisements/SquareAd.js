import React, { Component } from 'react';

export default class SquareAd extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins className='adsbygoogle'
        style={{
          display: 'inline-block',
          width: '250px',
          height: '250px',
        }}
        data-ad-client='ca-pub-6779320317509195'
        data-ad-slot='2944783474'
        data-ad-format='auto'
      />
    );
  }
}