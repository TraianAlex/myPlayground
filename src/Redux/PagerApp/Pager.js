import React from "react"; // , { PropTypes }
import { connect } from "react-redux";
import * as actions from "./actions";

function Pager({ page, prev, next }) {
  // const prev = () => {
  //   if (page > 1) {
  //     dispatch({ type: actionTypes.PREV })
  //   }
  // }

  // const next = () => {
  //   dispatch({ type: actionTypes.NEXT })
  // }

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={prev} type="button">
        &lt;
      </button>
      <span className="page">{page}</span>
      <button onClick={next} type="button">
        &gt;
      </button>
    </div>
  );
}

export default connect((state) => state, actions)(Pager);
