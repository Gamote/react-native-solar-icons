import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSortByTime = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25 7C1.25 6.58579 1.58579 6.25 2 6.25H10C10.4142 6.25 10.75 6.58579 10.75 7C10.75 7.41421 10.4142 7.75 10 7.75H2C1.58579 7.75 1.25 7.41421 1.25 7ZM17 7.75C14.6528 7.75 12.75 9.65279 12.75 12C12.75 14.3472 14.6528 16.25 17 16.25C19.3472 16.25 21.25 14.3472 21.25 12C21.25 9.65279 19.3472 7.75 17 7.75ZM11.25 12C11.25 8.82436 13.8244 6.25 17 6.25C20.1756 6.25 22.75 8.82436 22.75 12C22.75 15.1756 20.1756 17.75 17 17.75C13.8244 17.75 11.25 15.1756 11.25 12ZM17 9.25C17.4142 9.25 17.75 9.58579 17.75 10V11.5664L18.5668 12.5088C18.838 12.8218 18.8042 13.2955 18.4912 13.5668C18.1782 13.838 17.7045 13.8042 17.4332 13.4912L16.4332 12.3374C16.3151 12.201 16.25 12.0266 16.25 11.8462V10C16.25 9.58579 16.5858 9.25 17 9.25ZM1.25 12C1.25 11.5858 1.58579 11.25 2 11.25H8C8.41421 11.25 8.75 11.5858 8.75 12C8.75 12.4142 8.41421 12.75 8 12.75H2C1.58579 12.75 1.25 12.4142 1.25 12ZM1.25 17C1.25 16.5858 1.58579 16.25 2 16.25H10C10.4142 16.25 10.75 16.5858 10.75 17C10.75 17.4142 10.4142 17.75 10 17.75H2C1.58579 17.75 1.25 17.4142 1.25 17Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSortByTime;
