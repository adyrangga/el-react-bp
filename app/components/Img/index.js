import React from 'react';
import PropTypes from 'prop-types';

function Img(props) {
  return <image src={props.src} alt={props.alt} style={props.styledImg} />;
}

Img.propTypes = {
  src: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  styledImg: PropTypes.object.isRequired,
};

export default Img;
