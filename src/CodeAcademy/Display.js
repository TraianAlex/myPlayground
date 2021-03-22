// @ts-nocheck
import React from 'react';

const style = {
  fontSize: 110,
  color: 'lightgrey',
  position: 'absolute',
  top: '50%',
};

export const Display = props => <div style={style}>{props.number}</div>;

// Display.propTypes = {
// number: React.PropTypes.number.isRequired
// };

Display.defaultProps = {
  number: 0
}
