import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUfo3 = (props: SvgProps) => (
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
      d="M18.922 12.15c1.603 2.623 2.072 4.999.98 6.091-1.63 1.63-6.118-.215-10.023-4.12S4.129 5.73 5.759 4.1c1.092-1.092 3.468-.624 6.092.979"
    />
    <Path
      stroke="#8E93A6"
      strokeWidth={1.5}
      d="M11.485 5.444a4.73 4.73 0 0 1 6.687 0l.384.384a4.73 4.73 0 0 1 0 6.687c-.126.125-.286.21-.46.178-.497-.089-1.72-.559-3.975-2.814S11.396 6.4 11.307 5.905c-.032-.175.052-.336.178-.46Z"
    />
    <Circle cx={12} cy={12} r={1} fill="#8E93A6" transform="rotate(45 12 12)" />
    <Circle
      cx={9.172}
      cy={7.757}
      r={1}
      fill="#000"
      transform="rotate(45 9.172 7.757)"
    />
    <Circle
      cx={16.243}
      cy={14.828}
      r={1}
      fill="#000"
      transform="rotate(45 16.243 14.828)"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m3.636 20.364 4.121-4.121"
    />
    <Path
      stroke="#8E93A6"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m10 22 2.707-2.222M2 14l2.222-2.707"
    />
  </Svg>
);
export default SvgUfo3;
