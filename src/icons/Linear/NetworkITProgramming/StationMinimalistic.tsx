import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStationMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M13.25 8.75C13.25 9.44036 12.6904 10 12 10C11.3096 10 10.75 9.44036 10.75 8.75C10.75 8.05964 11.3096 7.5 12 7.5C12.6904 7.5 13.25 8.05964 13.25 8.75Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M7.00778 14C5.76601 12.7269 5 10.981 5 9.05473C5 5.15851 8.13401 2 12 2C15.866 2 19 5.15851 19 9.05473C19 10.9647 18.2468 12.6975 17.0235 13.9677M8.9878 12.0045C8.25268 11.2422 7.8 10.2017 7.8 9.05473C7.8 6.717 9.6804 4.82189 12 4.82189C14.3196 4.82189 16.2 6.717 16.2 9.05473C16.2 10.1855 15.76 11.2127 15.0432 11.972"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16 22L12 10L8 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.5 17.5H9.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgStationMinimalistic;
