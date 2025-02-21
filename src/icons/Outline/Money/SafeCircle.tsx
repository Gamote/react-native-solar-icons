import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSafeCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM7 7.25C7.41421 7.25 7.75 7.58579 7.75 8L7.75 16C7.75 16.4142 7.41421 16.75 7 16.75C6.58579 16.75 6.25 16.4142 6.25 16L6.25 8C6.25 7.58579 6.58579 7.25 7 7.25ZM10.4697 8.46967C10.7626 8.17678 11.2374 8.17678 11.5303 8.46967L12.5303 9.46967C12.5733 9.51262 12.6099 9.55949 12.6403 9.60912C13.0413 9.38057 13.5054 9.25 14 9.25C14.4946 9.25 14.9587 9.38057 15.3597 9.60912C15.3901 9.55949 15.4267 9.51262 15.4697 9.46967L16.4697 8.46967C16.7626 8.17678 17.2374 8.17678 17.5303 8.46967C17.8232 8.76256 17.8232 9.23744 17.5303 9.53033L16.5303 10.5303C16.4874 10.5733 16.4405 10.6099 16.3909 10.6403C16.6194 11.0413 16.75 11.5054 16.75 12C16.75 12.4946 16.6194 12.9587 16.3909 13.3597C16.4405 13.3901 16.4874 13.4267 16.5303 13.4697L17.5303 14.4697C17.8232 14.7626 17.8232 15.2374 17.5303 15.5303C17.2374 15.8232 16.7626 15.8232 16.4697 15.5303L15.4697 14.5303C15.4267 14.4874 15.3901 14.4405 15.3597 14.3909C14.9587 14.6194 14.4946 14.75 14 14.75C13.5054 14.75 13.0413 14.6194 12.6403 14.3909C12.6099 14.4405 12.5733 14.4874 12.5303 14.5303L11.5303 15.5303C11.2374 15.8232 10.7626 15.8232 10.4697 15.5303C10.1768 15.2374 10.1768 14.7626 10.4697 14.4697L11.4697 13.4697C11.5126 13.4267 11.5595 13.3901 11.6091 13.3597C11.3806 12.9587 11.25 12.4946 11.25 12C11.25 11.5054 11.3806 11.0413 11.6091 10.6403C11.5595 10.6099 11.5126 10.5733 11.4697 10.5303L10.4697 9.53033C10.1768 9.23744 10.1768 8.76256 10.4697 8.46967ZM14 10.75C13.3096 10.75 12.75 11.3096 12.75 12C12.75 12.6904 13.3096 13.25 14 13.25C14.6904 13.25 15.25 12.6904 15.25 12C15.25 11.3096 14.6904 10.75 14 10.75Z"
      fill="black"
    />
  </Svg>
);
export default SvgSafeCircle;
