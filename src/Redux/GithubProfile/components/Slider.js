import React, { Component } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class SliderComponent extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings} style={{textAlign: 'center', margin: '50px 0 0 0'}}>
        <div><h3>{this.props.profile.name}</h3></div>
        <div><h3><img src={this.props.profile.avatar_url} alt="" /></h3></div>
        <div><h3>{this.props.profile.bio}</h3></div>
        <div><h3>{this.props.profile.location}</h3></div>
      </Slider>
    );
  }
}
