import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { SvgProps } from '@components/Svg'

const SvgComponent = (props: SvgProps) => (
  <Svg width={11} height={19} fill="none" {...props}>
    <Path
      d="m2 17 6.793-6.793a1 1 0 0 0 0-1.414L2 2"
      stroke="#FA5C01"
      strokeWidth={3}
      strokeLinecap="round"
    />
  </Svg>
)

export default SvgComponent
