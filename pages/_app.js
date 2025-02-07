import React from 'react';
import App from 'next/app';

// ...existing code...

class MyApp extends App {
  // ...existing code...
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
