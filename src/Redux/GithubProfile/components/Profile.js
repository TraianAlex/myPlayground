import React, { Component } from 'react';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import './Profile.css';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: this.props.profile,
      editing: false,
      error: false,
      currentTab: 'slider'
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({ userInfo: nextProps.profile, editing: false, error: false })
  }

  updateValue(type, event) {
    var userInfoCopy = JSON.parse(JSON.stringify(this.state.userInfo));
    userInfoCopy[type] = event.target.value;
    this.setState({ userInfo: userInfoCopy });
  }

  saveProfile() {
    var error = false;
    var propertiesToCheck = ['name', 'bio', 'location', 'company'];
    propertiesToCheck.forEach(function (term) {
      if (this.state.userInfo[term] === '') {
        error = true;
      }
    }.bind(this));
    if (!error) {
      this.props.saveProfile(this.state.userInfo);
    }
    this.setState({ error });
  }

  render() {
    return (
      <div className="container">
        <br />
        <Button variant="primary" onClick={() => this.setState({ editing: !this.state.editing })}>
          {this.state.editing ? 'Cancel Edit' : 'Edit'}
        </Button>
        <hr />
        {this.state.editing ?
          <FormGroup>
            <FormLabel>Name</FormLabel>
            <FormControl
              type="text"
              className={this.state.error && this.state.userInfo.bio === '' ? 'red-border' : ''}
              value={this.state.userInfo.name}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'name')}
            />
            <FormLabel>Bio</FormLabel>
            <FormControl
              type="text"
              className={this.state.error && this.state.userInfo.bio === '' ? 'red-border' : ''}
              value={this.state.userInfo.bio}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'bio')}
            />
            <FormLabel>Location</FormLabel>
            <FormControl
              type="text"
              className={this.state.error && this.state.userInfo.location === '' ? 'red-border' : ''}
              value={this.state.userInfo.location}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'location')}
            />
            <FormLabel>Company</FormLabel>
            <FormControl
              type="text"
              className={this.state.error && this.state.userInfo.company === '' ? 'red-border' : ''}
              value={this.state.userInfo.company}
              placeholder="Enter text"
              onChange={this.updateValue.bind(this, 'company')}
            />
            <Button variant="info" onClick={this.saveProfile.bind(this)}>Save</Button>
          </FormGroup>
          :
          <div>
            <p><strong>Name:</strong> {this.state.userInfo.name}</p>
            <p><strong>Bio:</strong> {this.state.userInfo.bio}</p>
            <p><strong>Location:</strong> {this.state.userInfo.location}</p>
            <p><strong>Company:</strong> {this.state.userInfo.company}</p>
          </div>
        }
      </div>
    );
  }
}
