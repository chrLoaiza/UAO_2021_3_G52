// Each component should import react and neccesaries dependencies
import React from 'react';
import utils from '../math_utils';

const StarsDisplay = (props) => (
  <div>
    {utils.range(1, props.count).map((startId) => (
      <div key={startId} className="star" />
    ))}
  </div>
);

//As a component/methos required in other files it should be export.
export default StarsDisplay;
