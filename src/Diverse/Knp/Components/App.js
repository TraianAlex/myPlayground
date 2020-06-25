import React from "react";
import PropTypes from "prop-types";
import uuid from "uuid/v4";
import RepLogs from "./RepLogs";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      highlightedRowId: null,
      repLogs: [
        { id: uuid(), reps: 25, label: "Laptop", totalLifted: 55 },
        { id: uuid(), reps: 20, label: "Camera", totalLifted: 76 },
        { id: uuid(), reps: 15, label: "Phone", totalLifted: 99 },
      ],
      numberOfHearts: 1,
    };
    //this.handleRowClick = this.handleRowClick.bind(this);
    this.handleAddRepLog = this.handleAddRepLog.bind(this);
    this.handleHeartChange = this.handleHeartChange.bind(this);
    this.handleDeleteRepLog = this.handleDeleteRepLog.bind(this);
  }

  handleRowClick = (repLogId) => {
    this.setState({ highlightedRowId: repLogId });
  };

  handleAddRepLog(itemLabel, reps) {
    //const repLogs = this.state.repLogs;
    const newRep = {
      id: uuid(),
      reps: reps,
      label: itemLabel,
      totalLifted: Math.floor(Math.random() * 50),
    };
    //repLogs.push(newRep);
    //const newRepLogs = [...this.state.repLogs, newRep];
    //this.setState({repLogs: newRepLogs});
    this.setState((prevState) => {
      const newRepLogs = [...prevState.repLogs, newRep];
      return { repLogs: newRepLogs };
    });
  }

  handleHeartChange(heartCount) {
    this.setState({
      numberOfHearts: heartCount,
    });
  }

  handleDeleteRepLog(id) {
    this.setState((prevState) => {
      return {
        repLogs: prevState.repLogs.filter((repLog) => repLog.id !== id),
      };
    });
  }

  render() {
    // const {highlightedRowId, repLogs} = this.state;
    // const {withHearth} = this.props;
    return (
      <RepLogs
        {...this.props} //withHearth={withHearth} highlightedRowId={highlightedRowId}
        {...this.state} //repLogs={repLogs}
        onRowClick={this.handleRowClick}
        onAddRepLog={this.handleAddRepLog}
        onHeartChange={this.handleHeartChange}
        onDeleteRepLog={this.handleDeleteRepLog}
      />
    );
  }
}

App.propTypes = {
  withHeart: PropTypes.bool,
  // itemOptions: PropTypes.array,
};
