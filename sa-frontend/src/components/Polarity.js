import React, { Component } from 'react';
import PropTypes from 'prop-types';

function Polarity({ polarity, sentence }) {
  const green = Math.round((polarity + 1) * 128);
  const red = 255 - green;
  const textColor = {
    backgroundColor: 'rgb(' + red + ', ' + green + ', 0)',
    padding: '15px',
  };

  return (
    <div style={textColor}>
      "{sentence}" has polarity of {polarity}{' '}
    </div>
  );
}
Polarity.propTypes = {
  sentence: PropTypes.string.isRequired,
  polarity: PropTypes.number.isRequired,
};

export default Polarity;
