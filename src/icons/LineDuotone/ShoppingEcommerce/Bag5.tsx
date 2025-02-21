import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBag5 = (props: SvgProps) => (
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
      d="M3.794 14.97c.537 2.687.806 4.03 1.693 4.895q.247.24.53.434C7.04 21 8.41 21 11.15 21h1.702c2.74 0 4.109 0 5.131-.7q.285-.196.53-.435c.888-.865 1.157-2.208 1.694-4.894.771-3.856 1.157-5.784.269-7.15a4 4 0 0 0-.56-.683C18.75 6 16.785 6 12.852 6h-1.703C7.217 6 5.25 6 4.085 7.138a4 4 0 0 0-.559.683c-.888 1.366-.502 3.294.27 7.15Z"
    />
    <Circle cx={15} cy={10} r={1} fill="#000" opacity={0.5} />
    <Circle cx={9} cy={10} r={1} fill="#000" opacity={0.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 6V5a3 3 0 1 1 6 0v1"
      opacity={0.5}
    />
  </Svg>
);
export default SvgBag5;
