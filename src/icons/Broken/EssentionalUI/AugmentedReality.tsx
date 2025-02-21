import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAugmentedReality = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M14 8v-.75a.75.75 0 0 0-.75.75zm-.75 8a.75.75 0 0 0 1.5 0zM8.5 8l.716-.224a.75.75 0 0 0-1.432 0zm-1.625 5.2-.716-.224zm-1.59 2.576a.75.75 0 0 0 1.43.448zm5 .448a.75.75 0 0 0 1.43-.448zM14 12h-.75v.75H14zm3.364 4.398a.75.75 0 1 0 1.272-.796zm-9.58-8.622-1.625 5.2 1.432.448 1.625-5.2zm-1.625 5.2-.875 2.8 1.432.448.875-2.8zm1.625-4.752 1.625 5.2 1.432-.448-1.625-5.2zm1.625 5.2.875 2.8 1.432-.448-.875-2.8zm-2.534.526h3.25v-1.5h-3.25zM14 8.75h2v-1.5h-2zm.75 3.25V8h-1.5v4zm2.5-2c0 .69-.56 1.25-1.25 1.25v1.5A2.75 2.75 0 0 0 18.75 10zM16 8.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 16 7.25zM13.25 8v8h1.5V8zM16 11.25h-.5v1.5h.5zm-.5 0H14v1.5h1.5zm-.636 1.148 2.5 4 1.272-.796-2.5-4z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
    />
  </Svg>
);
export default SvgAugmentedReality;
