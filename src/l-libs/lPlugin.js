import React from 'react'
import {withLeaflet} from 'react-leaflet'
import MeasureControlDefault from 'react-leaflet-measure';
import PubSub from 'pubsub-js'

const MeasureControl = withLeaflet(MeasureControlDefault);
const MeasureTool = function(){
  const storeControl = control => {
    PubSub.subscribe("start-measure", function (msg, data) {
      console.log('recieving data', control.leafletElement._startMeasure())
    });
  }
  return <MeasureControl ref={control=> storeControl(control)} />
}
export default MeasureTool
