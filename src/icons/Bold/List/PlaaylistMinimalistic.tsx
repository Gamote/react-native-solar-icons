import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaaylistMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.25 6C2.25 5.58579 2.58579 5.25 3 5.25H20C20.4142 5.25 20.75 5.58579 20.75 6C20.75 6.41421 20.4142 6.75 20 6.75H3C2.58579 6.75 2.25 6.41421 2.25 6ZM2.25 11C2.25 10.5858 2.58579 10.25 3 10.25H10C10.4142 10.25 10.75 10.5858 10.75 11C10.75 11.4142 10.4142 11.75 10 11.75H3C2.58579 11.75 2.25 11.4142 2.25 11ZM2.25 16C2.25 15.5858 2.58579 15.25 3 15.25H10C10.4142 15.25 10.75 15.5858 10.75 16C10.75 16.4142 10.4142 16.75 10 16.75H3C2.58579 16.75 2.25 16.4142 2.25 16Z"
      fill="black"
    />
    <Path
      d="M19.125 10.6854C20.767 11.6334 21.588 12.1074 21.8478 12.7346C22.0507 13.2247 22.0507 13.7753 21.8478 14.2654C21.588 14.8926 20.767 15.3666 19.125 16.3146C17.483 17.2626 16.662 17.7366 15.9889 17.648C15.4631 17.5787 14.9862 17.3034 14.6633 16.8826C14.25 16.344 14.25 15.396 14.25 13.5C14.25 11.604 14.25 10.656 14.6633 10.1174C14.9862 9.69659 15.4631 9.42128 15.9889 9.35205C16.662 9.26343 17.483 9.73743 19.125 10.6854Z"
      fill="black"
    />
  </Svg>
);
export default SvgPlaaylistMinimalistic;
