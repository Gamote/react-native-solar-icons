import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBag4 = (props: SvgProps) => (
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
      d="M3.794 12.03C4.331 9.342 4.6 8 5.487 7.134a4 4 0 0 1 .53-.434C7.04 6 8.41 6 11.15 6h1.702c2.74 0 4.109 0 5.131.7q.285.196.53.435C19.4 8 19.67 9.343 20.207 12.03c.771 3.856 1.157 5.784.269 7.15q-.241.373-.56.683C18.75 21 16.785 21 12.852 21h-1.703c-3.932 0-5.898 0-7.064-1.138a4 4 0 0 1-.559-.683c-.888-1.366-.502-3.294.27-7.15Z"
    />
    <Circle cx={15} cy={9} r={1} fill="#000" opacity={0.5} />
    <Circle cx={9} cy={9} r={1} fill="#000" opacity={0.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 6V5a3 3 0 1 1 6 0v1"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBag4;
