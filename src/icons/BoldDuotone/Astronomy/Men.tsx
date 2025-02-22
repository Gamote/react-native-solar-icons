import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMen = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle opacity={0.5} cx={10} cy={14} r={8} fill={props.primaryColor} />
    <Path
      d="M17 1.25C16.5858 1.25 16.25 1.58579 16.25 2C16.25 2.41421 16.5858 2.75 17 2.75H20.1894L15.1018 7.83758C15.4875 8.15728 15.8428 8.5125 16.1625 8.89824L21.25 3.81066V7C21.25 7.41421 21.5858 7.75 22 7.75C22.4143 7.75 22.75 7.41421 22.75 7V2.25C22.75 1.69772 22.3023 1.25 21.75 1.25H17Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMen;
