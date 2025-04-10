import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClipboardText = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M21 15.9983V9.99826C21 7.16983 21 5.75562 20.1213 4.87694C19.3529 4.10856 18.175 4.01211 16 4H8C5.82497 4.01211 4.64706 4.10856 3.87868 4.87694C3 5.75562 3 7.16983 3 9.99826V15.9983C3 18.8267 3 20.2409 3.87868 21.1196C4.75736 21.9983 6.17157 21.9983 9 21.9983H15C17.8284 21.9983 19.2426 21.9983 20.1213 21.1196C21 20.2409 21 18.8267 21 15.9983Z"
      fill={props.primaryColor}
    />
    <Path
      d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 14.5C6.25 14.0858 6.58579 13.75 7 13.75H15C15.4142 13.75 15.75 14.0858 15.75 14.5C15.75 14.9142 15.4142 15.25 15 15.25H7C6.58579 15.25 6.25 14.9142 6.25 14.5ZM6.25 18C6.25 17.5858 6.58579 17.25 7 17.25H12.5C12.9142 17.25 13.25 17.5858 13.25 18C13.25 18.4142 12.9142 18.75 12.5 18.75H7C6.58579 18.75 6.25 18.4142 6.25 18Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgClipboardText;
