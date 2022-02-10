import * as React from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={45}
    height={52}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C4.477 0 0 4.477 0 10v25c0 5.523 4.477 10 10 10h6.893l6.214 6.213L29.32 45H35c5.523 0 10-4.477 10-10V10c0-5.523-4.477-10-10-10H10Z"
      fill="#FA5C01"
    />
  </Svg>
)

export default SvgComponent
