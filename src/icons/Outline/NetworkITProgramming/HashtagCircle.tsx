import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHashtagCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.2155 6.28163C11.6123 6.40065 11.8374 6.81877 11.7184 7.21551L11.108 9.25H14.542L15.2816 6.78449C15.4007 6.38774 15.8188 6.16261 16.2155 6.28163C16.6123 6.40065 16.8374 6.81877 16.7184 7.21551L16.108 9.25H18C18.4142 9.25 18.75 9.58579 18.75 10C18.75 10.4142 18.4142 10.75 18 10.75H15.658L14.908 13.25H17C17.4142 13.25 17.75 13.5858 17.75 14C17.75 14.4142 17.4142 14.75 17 14.75H14.458L13.7184 17.2155C13.5993 17.6123 13.1812 17.8374 12.7845 17.7184C12.3877 17.5993 12.1626 17.1812 12.2816 16.7845L12.892 14.75H9.45802L8.71837 17.2155C8.59935 17.6123 8.18123 17.8374 7.78449 17.7184C7.38774 17.5993 7.16261 17.1812 7.28163 16.7845L7.89198 14.75H6C5.58579 14.75 5.25 14.4142 5.25 14C5.25 13.5858 5.58579 13.25 6 13.25H8.34198L9.09198 10.75H7C6.58579 10.75 6.25 10.4142 6.25 10C6.25 9.58579 6.58579 9.25 7 9.25H9.54198L10.2816 6.78449C10.4007 6.38774 10.8188 6.16261 11.2155 6.28163ZM10.658 10.75H14.092L13.342 13.25H9.90802L10.658 10.75Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHashtagCircle;
