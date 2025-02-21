import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSafeSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447Z"
      fill="black"
    />
    <Path
      d="M6.75 7C6.75 6.58579 6.41421 6.25 6 6.25C5.58579 6.25 5.25 6.58579 5.25 7L5.25 17C5.25 17.4142 5.58579 17.75 6 17.75C6.41421 17.75 6.75 17.4142 6.75 17L6.75 7Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.46967 7.46967C9.76256 7.17678 10.2374 7.17678 10.5303 7.46967L11.932 8.8713C12.5248 8.47866 13.2357 8.25 14 8.25C14.7643 8.25 15.4752 8.47866 16.068 8.8713L17.4697 7.46967C17.7626 7.17678 18.2374 7.17678 18.5303 7.46967C18.8232 7.76256 18.8232 8.23744 18.5303 8.53033L17.1287 9.93196C17.5213 10.5248 17.75 11.2357 17.75 12C17.75 12.7643 17.5213 13.4752 17.1287 14.068L18.5303 15.4697C18.8232 15.7626 18.8232 16.2374 18.5303 16.5303C18.2374 16.8232 17.7626 16.8232 17.4697 16.5303L16.068 15.1287C15.4752 15.5213 14.7643 15.75 14 15.75C13.2357 15.75 12.5248 15.5213 11.932 15.1287L10.5303 16.5303C10.2374 16.8232 9.76256 16.8232 9.46967 16.5303C9.17678 16.2374 9.17678 15.7626 9.46967 15.4697L10.8713 14.068C10.4787 13.4752 10.25 12.7643 10.25 12C10.25 11.2357 10.4787 10.5248 10.8713 9.93196L9.46967 8.53033C9.17678 8.23744 9.17678 7.76256 9.46967 7.46967ZM11.75 12C11.75 10.7574 12.7574 9.75 14 9.75C15.2426 9.75 16.25 10.7574 16.25 12C16.25 13.2426 15.2426 14.25 14 14.25C12.7574 14.25 11.75 13.2426 11.75 12Z"
      fill="black"
    />
  </Svg>
);
export default SvgSafeSquare;
