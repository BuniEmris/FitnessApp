import * as React from 'react'
import Svg, { G, Circle, Path, Defs, SvgProps } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props: SvgProps) => (
  <Svg width={44} height={43} fill="none" {...props}>
    <G filter="url(#a)">
      <Circle
        cx={22}
        cy={21.213}
        r={15}
        transform="rotate(45 22 21.213)"
        fill="#fff"
        fillOpacity={0.5}
      />
    </G>
    <Path
      d="m17.05 16.264 4.95 4.95M22 21.213l4.95 4.95M26.95 16.264 22 21.214M22 21.213l-4.95 4.95"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
    />
    <Defs></Defs>
  </Svg>
)

export default SvgComponent
