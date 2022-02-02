import * as React from 'react';
import Svg, {G, Circle, Path, Defs, SvgProps} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props: SvgProps) => (
  <Svg
    width={62}
    height={62}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#a)">
      <Circle cx={31} cy={23} r={20} fill="#F65623" />
    </G>
    <Path
      d="m37.875 18.626-8.75 8.75L24.75 23"
      stroke="#fff"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Defs></Defs>
  </Svg>
);

export default SvgComponent;
