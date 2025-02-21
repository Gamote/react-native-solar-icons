import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMirror = (props: SvgProps) => (
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
      d="M18.966 8.75C18.615 4.96 15.63 2 12 2S5.385 4.96 5.034 8.75H5a.75.75 0 0 0-.75.75V19c0 .487-.158.96-.45 1.35l-.9 1.2a.75.75 0 0 0 1.2.9l.9-1.2q.18-.239.317-.5h13.366q.138.261.317.5l.9 1.2a.75.75 0 0 0 1.2-.9l-.9-1.2a2.25 2.25 0 0 1-.45-1.35V9.5a.75.75 0 0 0-.785-.75m-.716 4.131C17.096 15.325 14.73 17 12 17s-5.096-1.675-6.25-4.119V19q0 .126-.008.25h12.516a4 4 0 0 1-.008-.25zm-5.856-7.976c.226-.366.756-.506 1.183-.312 1.45.66 2.41 2.143 2.702 3.795.072.41-.257.792-.735.854s-.923-.22-.996-.63c-.242-1.371-1-2.334-1.791-2.693-.427-.194-.59-.648-.363-1.014"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMirror;
