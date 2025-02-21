import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmPlay = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18m1.026-11.725a15 15 0 0 0-.784-.508c-1.073-.652-1.609-.978-2.09-.617-.48.36-.524 1.117-.612 2.628-.024.427-.04.846-.04 1.222s.016.795.04 1.222c.088 1.512.131 2.268.612 2.629.481.36 1.018.034 2.09-.618.278-.169.547-.341.784-.508.27-.19.565-.418.862-.66C14.963 14.188 15.5 13.75 15.5 13s-.537-1.188-1.612-2.065a15 15 0 0 0-.862-.66M8.136 1.603a.75.75 0 0 1-.238 1.033l-4 2.5a.75.75 0 0 1-.796-1.272l4-2.5a.75.75 0 0 1 1.034.239m7.728 0a.75.75 0 0 1 1.034-.239l4 2.5a.75.75 0 0 1-.796 1.272l-4-2.5a.75.75 0 0 1-.238-1.033"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgAlarmPlay;
