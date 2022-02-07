import * as React from 'react'
import Svg, { G, Circle, Path, Defs } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = props => (
  <Svg width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G filter="url(#a)">
      <Circle cx={20} cy={17} r={10} fill="#FA5C01" />
    </G>
    <Path
      d="m24.125 14.375-5.25 5.25L16.25 17"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs></Defs>
  </Svg>
)

export default SvgComponent
