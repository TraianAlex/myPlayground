import React, { Component } from 'react';
import { Star } from './Star';
import './StarRating.css';

// const createArray = length => [...Array(length)];

export default class StarRating extends Component {
  constructor(props) {
    super(props)
    this.state = {
      starSelected: props.starSelected || 0
    }
    this.change = this.change.bind(this);
  }

  change(starSelected) {
    // console.log(starSelected);
    this.setState({
      starSelected
    });
    this.props.onChange(starSelected);
  }

  render() {
    const { totalStars } = this.props;
    const { starSelected } = this.state;

    return (
      <div className="star-rating">
        {Array.from(Array(totalStars).keys()).map((n, i) =>
          <Star key={i}
            selected={i < starSelected }
            onClick={() => this.change(i + 1)}
          />
        )}
        <p>{starSelected} of {totalStars}</p>
      </div>
    )
  }
}

StarRating.defaultProps = {
  totalStars: 5,
  onChange: f => f
}
