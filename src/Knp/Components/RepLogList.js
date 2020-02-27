import React from 'react';
import PropTypes from 'prop-types';

export default function RepLogList(props) {
  const { highlightedRowId, onRowClick, repLogs, onDeleteRepLog } = props;

  const handleDeleteClick = function (event, repLogId) {
    event.preventDefault();
    onDeleteRepLog(repLogId);
  };

  return (
    <ul>
      {repLogs.map((repLog) => (
        <li key={repLog.id}
          className={highlightedRowId === repLog.id ? 'alert-info' : ''}
          onClick={() => onRowClick(repLog.id)}
        >
          {repLog.label} | {repLog.reps} | {repLog.totalLifted} |
                <button onClick={e => handleDeleteClick(e, repLog.id)}>
            <span className="fa fa-trash"></span></button>
        </li>
      ))}
    </ul>
  );
}

RepLogList.propTypes = {
  highlightedRowId: PropTypes.any,
  onRowClick: PropTypes.func.isRequired,
  repLogs: PropTypes.array.isRequired,
  onDeleteRepLog: PropTypes.func.isRequired,
  // isLoaded: PropTypes.bool.isRequired,
  // isSavingNewRepLog: PropTypes.bool.isRequired,
};
