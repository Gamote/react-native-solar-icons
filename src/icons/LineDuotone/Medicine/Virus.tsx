import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVirus = (props: SvgProps) => (
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
      d="M12.057 19A6.865 6.865 0 0 0 19 12.057C18.969 8.19 15.81 5.03 11.944 5A6.865 6.865 0 0 0 5 11.944c.031 3.865 3.19 7.025 7.057 7.056Z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m18 6-1.05 1.05M5 5l2 2"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m17.05 18.05-.55-.55"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 19.05 7.05 18"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M16.5 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M11 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      opacity={0.5}
    />
    <Circle cx={9} cy={13} r={1} fill="#000" opacity={0.5} />
    <Circle cx={19.5} cy={4.5} r={1.5} stroke="#000" strokeWidth={1.5} />
    <Circle
      r={1.5}
      stroke="#000"
      strokeWidth={1.5}
      transform="matrix(-1 0 0 1 3.5 3.5)"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M2 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
      opacity={0.5}
    />
    <Circle
      r={1.5}
      stroke="#000"
      strokeWidth={1.5}
      transform="matrix(1 0 0 -1 18.55 19.55)"
    />
    <Circle
      cx={4.5}
      cy={20.5}
      r={1.5}
      stroke="#000"
      strokeWidth={1.5}
      transform="rotate(-180 4.5 20.5)"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M13.5 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM19.5 13.5a1.5 1.5 0 1 0-.5-2.915v2.83q.236.084.5.085ZM10.585 19a1.5 1.5 0 0 0 2.83 0z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgVirus;
