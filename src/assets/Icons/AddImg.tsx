import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

const SvgComponent = props => (
  <Svg width={44} height={44} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M42 22.392C42 33.222 33.046 42 22 42S2 33.22 2 22.392"
      stroke="#FA5C01"
      strokeWidth={4}
      strokeLinecap="round"
    />
    <Path
      d="M23.1 27.098a1.5 1.5 0 1 1-3 0h3ZM20.539.94a1.5 1.5 0 0 1 2.121 0l9.546 9.546a1.5 1.5 0 1 1-2.121 2.122L21.6 4.12l-8.486 8.486a1.5 1.5 0 1 1-2.121-2.122L20.539.94Zm-.44 26.16V2h3v25.098h-3Z"
      fill="#FA5C01"
    />
  </Svg>
)

export default SvgComponent
