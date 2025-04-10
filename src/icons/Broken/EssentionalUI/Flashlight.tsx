import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlashlight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 2H18C18.9428 2 19.4142 2 19.7071 2.29289C20 2.58579 20 3.05719 20 4V4.17157C20 4.58032 20 4.7847 19.9239 4.96847C19.8478 5.15224 19.7032 5.29676 19.4142 5.58579L16.1716 8.82843C15.5935 9.40649 15.3045 9.69552 15.1522 10.0631C15 10.4306 15 10.8394 15 11.6569V19C15 19.9319 15 20.3978 14.8478 20.7654C14.6448 21.2554 14.2554 21.6448 13.7654 21.8478C13.3978 22 12.9319 22 12 22V22C11.0681 22 10.6022 22 10.2346 21.8478C9.74458 21.6448 9.35523 21.2554 9.15224 20.7654C9 20.3978 9 19.9319 9 19V11.6569C9 10.8394 9 10.4306 8.84776 10.0631C8.69552 9.69552 8.40649 9.40649 7.82843 8.82843L4.58579 5.58579C4.29676 5.29676 4.15224 5.15224 4.07612 4.96847C4 4.7847 4 4.58032 4 4.17157V4C4 3.05719 4 2.58579 4.29289 2.29289C4.58579 2 5.05719 2 6 2H13"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M15 10H9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 13V15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4.5 5H19.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFlashlight;
