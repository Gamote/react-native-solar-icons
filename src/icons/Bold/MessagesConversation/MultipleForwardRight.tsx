import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMultipleForwardRight = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m12.332 5.184 4.977 4.424c.93.827 1.396 1.241 1.568 1.73a2 2 0 0 1 0 1.325c-.172.488-.637.902-1.568 1.729l-4.978 4.425c-.422.375-.633.563-.812.57a.5.5 0 0 1-.405-.182C11 19.066 11 18.784 11 18.219v-2.79c-2.428 0-4.993.78-6.865 2.164-.975.72-1.463 1.08-1.648 1.067a.45.45 0 0 1-.39-.24c-.096-.16-.011-.658.159-1.653C3.361 10.3 7.811 8.57 11 8.57v-2.79c0-.565 0-.847.114-.986a.5.5 0 0 1 .405-.181c.18.006.39.194.813.57"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M14.989 3.99a.75.75 0 0 1 1.06-.04l5.216 4.844a4.647 4.647 0 0 1-.15 6.944l-5.09 4.333a.75.75 0 1 1-.973-1.142l5.09-4.333a3.147 3.147 0 0 0 .102-4.703L15.028 5.05a.75.75 0 0 1-.04-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMultipleForwardRight;
