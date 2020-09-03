import React from 'react'
import {withLeaflet} from 'react-leaflet'
import MeasureControlDefault from 'react-leaflet-measure';

const MeasureControl = withLeaflet(MeasureControlDefault);
const MeasureTool = function(){
  return <MeasureControl />
}
export default MeasureTool
