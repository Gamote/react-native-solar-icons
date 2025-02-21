import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAdhesivePlaster = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M3.213 9.071a4.142 4.142 0 0 1 5.858-5.858L20.787 14.93a4.142 4.142 0 0 1-5.858 5.858z"
    />
    <G stroke="#000" strokeWidth={1.5} opacity={0.5}>
      <Path d="m12 17.858-2.929 2.929a4.142 4.142 0 0 1-5.858-5.858L6.143 12zM12 6.142l2.929-2.929a4.142 4.142 0 0 1 5.858 5.858L17.857 12z" />
    </G>
    <Path
      fill="#000"
      d="M15.841 12.872a.787.787 0 1 1-1.113 1.113.787.787 0 0 1 1.113-1.114M12.129 9.159a.788.788 0 1 0-1.114 1.114.788.788 0 0 0 1.114-1.114M13.985 14.728a.787.787 0 1 1-1.113 1.113.787.787 0 0 1 1.113-1.113M10.273 11.015a.788.788 0 1 0-1.114 1.114.788.788 0 0 0 1.114-1.114M16.77 15.656a.788.788 0 1 1-1.115 1.114.788.788 0 0 1 1.115-1.114M9.345 8.23A.788.788 0 1 0 8.23 9.346.788.788 0 0 0 9.345 8.23"
    />
    <Path
      fill="#000"
      d="M13.057 11.943a.787.787 0 1 1-1.113 1.114.787.787 0 0 1 1.113-1.114"
      opacity={0.5}
    />
  </Svg>
);
export default SvgAdhesivePlaster;
