import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUserHeartRounded = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={12} cy={6} r={4} fill="#000" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M13.513 21.487C14.025 22 14.85 22 16.5 22s2.475 0 2.987-.513C20 20.975 20 20.15 20 18.5s0-2.475-.513-2.987C18.975 15 18.15 15 16.5 15s-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987m2.014-1.51C14.825 19.474 14 18.883 14 17.86c0-1.13 1.375-1.931 2.5-.845 1.125-1.087 2.5-.285 2.5.845 0 1.023-.825 1.614-1.527 2.117l-.213.154c-.26.19-.51.369-.76.369s-.5-.18-.76-.37z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.415 13.507A11.3 11.3 0 0 0 12 13c-3.866 0-7 1.79-7 4 0 2.14 2.942 3.888 6.642 3.995a5 5 0 0 1-.064-.375c-.078-.578-.078-1.283-.078-2.034v-.172c0-.75 0-1.456.078-2.034.086-.643.293-1.347.874-1.928.581-.582 1.285-.788 1.928-.875a10 10 0 0 1 1.035-.07"
    />
  </Svg>
);
export default SvgUserHeartRounded;
