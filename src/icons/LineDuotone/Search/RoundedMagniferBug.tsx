import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRoundedMagniferBug = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle cx={11} cy={11} r={9} stroke="#8E93A6" strokeWidth={1.5} />
    <Path
      d="M11 15C9.34315 15 8 13.6569 8 12V10M11 15C12.6569 15 14 13.6569 14 12V10M11 15V10M14 10C14 8.34315 12.6569 7 11 7C9.34315 7 8 8.34315 8 10M14 10H8M14.0715 11H15.5M6.5 11H8M14 13.5L15 14M8 13.5L7 14M14 8.5L15 8M8 8.5L7 8"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21.812 20.9748C21.7493 21.0695 21.636 21.1828 21.4094 21.4094C21.1828 21.636 21.0695 21.7493 20.9748 21.812C20.4202 22.1793 19.6699 21.99 19.3559 21.4036C19.3023 21.3035 19.2563 21.15 19.1643 20.843C19.0638 20.5076 19.0136 20.3398 19.0038 20.2218C18.9466 19.5268 19.5268 18.9466 20.2218 19.0038C20.3398 19.0136 20.5075 19.0638 20.843 19.1643C21.15 19.2563 21.3035 19.3023 21.4036 19.3559C21.99 19.6699 22.1793 20.4202 21.812 20.9748Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgRoundedMagniferBug;
