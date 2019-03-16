import React, { Component } from 'react';

export default class SmallBanner extends Component {
  componentDidMount() {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }

  render() {
    return (
      <ins className='adsbygoogle'
        style={{
          display: 'inline-block',
          width: '468px',
          height: '60px',
          maxWidth: 'calc(100% - 30px)',
        }}
        data-ad-client='ca-pub-6779320317509195'
        data-ad-slot='9052117475'
        data-ad-format='auto'
      />
    );
  }
}