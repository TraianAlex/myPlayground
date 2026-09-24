import React from "react";

export function DemoButton({ onClick, children }) {
  return (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );
}

export function Welcome({ showApp }) {
  return (
    <div style={{ padding: 16, fontFamily: "sans-serif" }}>
      <h1>Welcome to Storybook</h1>
      <p>Browse the playground stories from the sidebar.</p>
      <DemoButton onClick={showApp}>Go to Button</DemoButton>
    </div>
  );
}
