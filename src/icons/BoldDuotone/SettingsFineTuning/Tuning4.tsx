import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuning4 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 4C12 2.89543 12.8954 2 14 2C15.1046 2 16 2.89543 16 4C16 5.10457 15.1046 6 14 6C12.8954 6 12 5.10457 12 4Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10 18C11.1046 18 12 18.8954 12 20C12 21.1046 11.1046 22 10 22C8.89543 22 8 21.1046 8 20C8 18.8954 8.89543 18 10 18Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M13.8546 12.75C13.9484 12.5184 14 12.2652 14 12C14 11.7348 13.9484 11.4816 13.8546 11.25L19 11.25C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75L13.8546 12.75Z"
        fill={props.primaryColor}
      />
      <Path
        d="M10.1454 11.25C10.0516 11.4816 10 11.7348 10 12C10 12.2652 10.0516 12.5184 10.1454 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H10.1454Z"
        fill={props.primaryColor}
      />
      <Path
        d="M11.8546 19.25C11.9484 19.4816 12 19.7348 12 20C12 20.2652 11.9484 20.5184 11.8546 20.75H19C19.4142 20.75 19.75 20.4142 19.75 20C19.75 19.5858 19.4142 19.25 19 19.25H11.8546Z"
        fill={props.primaryColor}
      />
      <Path
        d="M8.14538 19.25H5C4.58579 19.25 4.25 19.5858 4.25 20C4.25 20.4142 4.58579 20.75 5 20.75H8.14538C8.05163 20.5184 8 20.2652 8 20C8 19.7348 8.05163 19.4816 8.14538 19.25Z"
        fill={props.primaryColor}
      />
      <Path
        d="M15.8546 4.75C15.9484 4.51839 16 4.26523 16 4C16 3.73478 15.9484 3.48161 15.8546 3.25L19 3.25C19.4142 3.25 19.75 3.58579 19.75 4C19.75 4.41421 19.4142 4.75 19 4.75L15.8546 4.75Z"
        fill={props.primaryColor}
      />
      <Path
        d="M12.1454 4.75C12.0516 4.51839 12 4.26523 12 4C12 3.73478 12.0516 3.48161 12.1454 3.25L5 3.25C4.58579 3.25 4.25 3.58579 4.25 4C4.25 4.41421 4.58579 4.75 5 4.75L12.1454 4.75Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgTuning4;
