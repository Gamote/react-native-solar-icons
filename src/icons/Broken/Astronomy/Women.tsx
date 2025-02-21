import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWomen = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M9.5 17.75C9.08579 17.75 8.75 18.0858 8.75 18.5C8.75 18.9142 9.08579 19.25 9.5 19.25V17.75ZM14.5 19.25C14.9142 19.25 15.25 18.9142 15.25 18.5C15.25 18.0858 14.9142 17.75 14.5 17.75V19.25ZM11.25 22.0001C11.25 22.4143 11.5858 22.75 12.0001 22.75C12.4143 22.75 12.75 22.4142 12.75 21.9999L11.25 22.0001ZM11.2497 16V18.5H12.7497V16H11.2497ZM11.9997 17.75H9.5V19.25H11.9997V17.75ZM14.5 17.75H11.9997V19.25H14.5V17.75ZM11.2497 18.5001L11.25 22.0001L12.75 21.9999L12.7497 18.4999L11.2497 18.5001Z"
      fill="black"
    />
    <Path
      d="M8.5 2.93648C9.52961 2.34088 10.725 2 12 2C15.866 2 19 5.13401 19 9C19 12.866 15.866 16 12 16C8.13401 16 5 12.866 5 9C5 7.72499 5.34088 6.52961 5.93648 5.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgWomen;
