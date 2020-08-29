import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export class Toastify extends Component {
  notify = () => toast("Wow so easy notifications!");

  render() {
    return (
      <div>
        <button onClick={this.notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
}

/*--------------------------------------------------------------------------*/

// Call it once in your app. At the root of your app is the best place
toast.configure();

export const Toastify2 = () => {
  const notify = () => toast("Wow so easy !");

  return <button onClick={notify}>Notify !</button>;
};

// https://github.com/fkhadra/react-toastify
