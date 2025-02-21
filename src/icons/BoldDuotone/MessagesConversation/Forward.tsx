import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgForward = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m13.955 5.183 4.978 4.425c.93.827 1.395 1.24 1.567 1.73a2 2 0 0 1 0 1.324c-.172.489-.637.902-1.567 1.73l-4.978 4.424c-.422.376-.634.563-.813.57a.5.5 0 0 1-.404-.182c-.115-.138-.115-.42-.115-.986v-2.79c-2.428 0-4.992.78-6.865 2.165-.975.72-1.462 1.08-1.648 1.067a.45.45 0 0 1-.39-.24c-.096-.16-.01-.658.16-1.653C4.983 10.3 9.433 8.57 12.622 8.57v-2.79c0-.565 0-.847.115-.986a.5.5 0 0 1 .404-.181c.18.006.39.194.813.57"
    />
  </Svg>
);
export default SvgForward;
