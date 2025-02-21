import * as React from "react";
import Svg, { Path } from "react-native-svg";
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
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M13.5 7.642 9.071 3.213a4.142 4.142 0 0 0-5.858 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858l-4.358-4.358"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m12 17.858-2.929 2.929A4.142 4.142 0 0 1 2.596 20m3.546-8-2.929 2.929c-.322.322-.58.685-.774 1.071M12 6.142l2.929-2.929a4.142 4.142 0 1 1 5.858 5.858L17.857 12"
    />
    <Path
      fill="#000"
      d="M15.841 12.871a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.114M12.129 9.159a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114M16.77 15.656a.787.787 0 1 1-1.114 1.114.787.787 0 0 1 1.114-1.114M9.345 8.23A.788.788 0 1 0 8.23 9.346.788.788 0 0 0 9.345 8.23M13.057 11.943a.787.787 0 1 1-1.113 1.114.787.787 0 0 1 1.113-1.114M13.985 14.728a.788.788 0 1 1-1.114 1.113.788.788 0 0 1 1.114-1.113M10.273 11.015a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114"
    />
  </Svg>
);
export default SvgAdhesivePlaster;
