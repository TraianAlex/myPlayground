import React, { useState } from "react";
import Sidebar from "react-sidebar";
import "./Sidebar.css";

export const SidebarComp = () => {
  const [sidebarOpen, setSiderbarOpen] = useState(true);

  const onSetSidebarOpen = (open) => {
    setSiderbarOpen(open);
  };

  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={sidebarOpen}
      onSetOpen={onSetSidebarOpen}
      styles={{ sidebar: { background: "white" } }}
    >
      <button onClick={() => onSetSidebarOpen(true)}>Open sidebar</button>
    </Sidebar>
  );
};

const mql = window.matchMedia(`(min-width: 800px)`);

export class RespSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDocked: mql.matches,
      sidebarOpen: false,
    };

    this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  componentWillMount() {
    mql.addListener(this.mediaQueryChanged);
  }

  componentWillUnmount() {
    mql.removeListener(this.mediaQueryChanged);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  mediaQueryChanged() {
    this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
  }

  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        docked={this.state.sidebarDocked}
        onSetOpen={this.onSetSidebarOpen}
      >
        <b>Main content</b>
      </Sidebar>
    );
  }
}

// https://github.com/balloob/react-sidebar
