import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
  return(
    <div>
      <Sparklines data={props.data} svgHeight={props.svgHeight} svgWidth={props.svgWidth}>
        <SparklinesLine color={props.color}/>
        <SparklinesReferenceLine type="mean"/>
      </Sparklines>
      <div>
        Average: {average(props.data)} {props.units}
      </div>
    </div>
  );
};

function average(data) {
  return _.round(_.sum(data)/data.length);
};
