import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHighDefinition = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m4.25-4a.75.75 0 0 0-1.5 0v8a.75.75 0 0 0 1.5 0v-3.25h3.315V16a.75.75 0 0 0 1.5 0V8a.75.75 0 0 0-1.5 0v3.25H6.25zm5.722.8c0-.98.903-1.55 1.713-1.55 2.937 0 5.565 2.002 5.565 4.75s-2.628 4.75-5.565 4.75c-.81 0-1.713-.57-1.713-1.55zm1.5.022.011-.01a.32.32 0 0 1 .202-.062c2.381 0 4.065 1.58 4.065 3.25s-1.684 3.25-4.065 3.25a.32.32 0 0 1-.213-.072z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHighDefinition;
