import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMusicNote3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 18C12 20.2091 10.2091 22 8 22C5.79086 22 4 20.2091 4 18C4 15.7909 5.79086 14 8 14C10.2091 14 12 15.7909 12 18Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path d="M12 18V6" stroke="black" strokeWidth={1.5} />
    <Path
      d="M16.1167 10.0587L13.4833 8.74199C13.1184 8.55954 12.9359 8.46831 12.7852 8.35309C12.3949 8.05463 12.128 7.62291 12.0357 7.14028C12 6.95397 12 6.74998 12 6.34199C12 5.3709 12 4.88536 12.1196 4.55528C12.4356 3.68288 13.3101 3.14239 14.2317 3.24989C14.5804 3.29057 15.0147 3.50771 15.8833 3.94199L18.5167 5.25871C18.8816 5.44117 19.0641 5.5324 19.2148 5.64761C19.6051 5.94608 19.872 6.3778 19.9643 6.86043C20 7.04673 20 7.25073 20 7.65871C20 8.6298 20 9.11535 19.8804 9.44543C19.5644 10.3178 18.6899 10.8583 17.7683 10.7508C17.4196 10.7101 16.9853 10.493 16.1167 10.0587Z"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMusicNote3;
