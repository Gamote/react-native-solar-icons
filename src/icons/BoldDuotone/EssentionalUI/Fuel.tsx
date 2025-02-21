import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFuel = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2.553 9.147C2 9.942 2 10.991 2 13.087v2.796c0 2.884 0 4.326.879 5.221C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.896.879-.895.879-2.337.879-5.22v-5.651c0-3.928 0-5.891-1.264-6.805-1.264-.915-3.082-.266-6.718 1.031l-8 2.855c-1.941.692-2.911 1.038-3.465 1.833"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="m11.016 5.53-.072-.293a1.65 1.65 0 0 0-1.157-1.18C9.58 4 9.325 4 8.818 4H8c-1.28 0-1.92 0-2.36.345a1.7 1.7 0 0 0-.302.308C5 5.103 5 5.755 5 7.06v.621q.458-.168 1.018-.367zM7.47 9.47a.75.75 0 0 0 0 1.06l1.5 1.5q.058.058.123.1C9 12.564 9 13.156 9 14c0 .831 0 1.418.09 1.85l-1.62 1.62a.75.75 0 1 0 1.06 1.06l1.62-1.62c.432.09 1.019.09 1.85.09s1.418 0 1.85-.09l1.62 1.62a.75.75 0 1 0 1.06-1.06l-1.62-1.62c.09-.432.09-1.019.09-1.85s0-1.418-.09-1.85l1.62-1.62a.75.75 0 1 0-1.06-1.06l-1.62 1.62C13.418 11 12.831 11 12 11c-.844 0-1.436 0-1.87.093a.8.8 0 0 0-.1-.123l-1.5-1.5a.75.75 0 0 0-1.06 0"
    />
  </Svg>
);
export default SvgFuel;
