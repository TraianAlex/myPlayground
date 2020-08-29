import React from "react";

const DataComponent = (ComposedComponent, url) =>
  class DataComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false,
      };
    }
    componentDidMount() {
      this.setState({ loading: true });
      fetch(url)
        .then((response) => response.json())
        .then((data) =>
          this.setState({
            loaded: true,
            loading: false,
            data,
          })
        );
    }
    render() {
      return (
        <div>
          {this.state.loaded ? (
            <ComposedComponent {...this.state} {...this.props} />
          ) : (
            <div>Loading</div>
          )}
        </div>
      );
    }
  };

const PeopleList = ({ data }) => (
  <ol>
    {data.results.map((person, i) => {
      const { first, last } = person.name;
      return (
        <li key={i}>
          {first} {last}
        </li>
      );
    })}
  </ol>
);

export const RandomMeUsers = DataComponent(
  PeopleList,
  "https://randomuser.me/api?results=10"
);
