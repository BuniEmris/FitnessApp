import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={11} height={19} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M9.5 2 2.707 8.793a1 1 0 0 0 0 1.414L9.5 17"
      stroke="#565FFF"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
)

export default SvgComponent
