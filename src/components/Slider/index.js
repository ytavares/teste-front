import React from 'react';
import { PrettoSlider, useStyles } from './styles';

export default function Slider(props) {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.root}>
      <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" value={props.getValueSlider} defaultValue={10000} max={40000} min={3500} onChange={props.setHandleChange}/>
      <div className={classes.margin} />
    </div>
  );
}
