import React from 'react';
import PropTypes from 'prop-types';
import RepLogList from './RepLogList';
import RepLogCreator from './RepLogCreator';

const calculateTotalWeightFancier = repLogs => repLogs.reduce((total, log) => total + log.totalLifted, 0);

export default function RepLogs(props) {
  const {withHearth, highlightedRowId, onRowClick, repLogs, onAddRepLog, numberOfHearts, onHeartChange, onDeleteRepLog} = props;
    
    let hearth = '';
    if (withHearth) {
      hearth = <span>{'x'.repeat(numberOfHearts)}</span>;
    }
    
    return (
      <div>
        <div className="total1">What | HMT? | Weight | {hearth}</div>
          <input type="range"
            value={numberOfHearts}
            onChange={e => onHeartChange(+e.target.value)}
           />
        <RepLogList 
          highlightedRowId={highlightedRowId}
          onRowClick={onRowClick}
          repLogs={repLogs}
          onDeleteRepLog={onDeleteRepLog}
          />
        <div className="total2">Total | {calculateTotalWeightFancier(repLogs)}</div>
        <div className="row">
          <div className="col-md-6">
            <RepLogCreator
            onAddRepLog={onAddRepLog}
            />
          </div>
        </div>
        </div>
    );
}

RepLogs.propTypes = {
    withHeart: PropTypes.bool,
    highlightedRowId: PropTypes.any,
    onRowClick: PropTypes.func.isRequired,
    onAddRepLog: PropTypes.func.isRequired,
    onHeartChange: PropTypes.func.isRequired,
    onDeleteRepLog: PropTypes.func.isRequired,
    repLogs: PropTypes.array.isRequired,
    numberOfHearts: PropTypes.number.isRequired,
    // isLoaded: PropTypes.bool.isRequired,
    // isSavingNewRepLog: PropTypes.bool.isRequired,
    // successMessage: PropTypes.string.isRequired,
    // newRepLogValidationErrorMessage: PropTypes.string.isRequired,
    // itemOptions: PropTypes.array.isRequired,
};
