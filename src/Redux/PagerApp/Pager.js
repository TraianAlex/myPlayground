import React from 'react'; // , { PropTypes }
import { connect } from 'react-redux';
import * as actions from './actions';

export function Pager({ page, prev, next }) {
  // const prev = () => {
  //   if (page > 1) {
  //     dispatch({ type: actionTypes.PREV })
  //   }
  // }

  // const next = () => {
  //   dispatch({ type: actionTypes.NEXT })
  // }
  console.log(page);
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={prev} type="button">&lt;</button>
      <span className="page">{page}</span>
      <button onClick={next} type="button">&gt;</button>
    </div>
  )
}

// Pager.propTypes = {
//   page: PropTypes.number.isRequired,
//   prev: PropTypes.func.isRequired,
//   next: PropTypes.func.isRequired
// }

export default connect(state => state, actions)(Pager);
