import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapPointHospital = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C7.58172 2 4 5.64588 4 10.1433C4 14.6055 6.55332 19.8124 10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.6055 20 10.1433C20 5.64588 16.4183 2 12 2ZM12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14ZM12.75 8.5C12.75 8.08579 12.4142 7.75 12 7.75C11.5858 7.75 11.25 8.08579 11.25 8.5V9.25H10.5C10.0858 9.25 9.75 9.58579 9.75 10C9.75 10.4142 10.0858 10.75 10.5 10.75H11.25V11.5C11.25 11.9142 11.5858 12.25 12 12.25C12.4142 12.25 12.75 11.9142 12.75 11.5V10.75H13.5C13.9142 10.75 14.25 10.4142 14.25 10C14.25 9.58579 13.9142 9.25 13.5 9.25H12.75V8.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMapPointHospital;
