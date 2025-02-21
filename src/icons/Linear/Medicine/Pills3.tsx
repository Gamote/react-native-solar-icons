import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11 9.5C11 8.34835 10.5607 7.1967 9.68198 6.31802C7.92462 4.56066 5.07538 4.56066 3.31802 6.31802C2.43934 7.1967 2 8.34835 2 9.5M11 9.5C11 10.6517 10.5607 11.8033 9.68198 12.682C7.92462 14.4393 5.07538 14.4393 3.31802 12.682C2.43934 11.8033 2 10.6517 2 9.5M11 9.5H2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14.7574 7.12156C15.929 8.29314 17.8285 8.29314 19.0001 7.12156C19.5858 6.53578 19.8787 5.76801 19.8787 5.00024C19.8787 4.23248 19.5858 3.46471 19.0001 2.87892C17.8285 1.70735 15.929 1.70735 14.7574 2.87892C14.1716 3.46471 13.8787 4.23248 13.8787 5.00024C13.8787 5.76801 14.1716 6.53578 14.7574 7.12156Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M20.9052 17.381C22.3649 15.9213 22.3649 13.5546 20.9052 12.0948C19.4454 10.6351 17.0787 10.6351 15.619 12.0948L12.0948 15.619C10.6351 17.0787 10.6351 19.4454 12.0948 20.9052C13.5546 22.3649 15.9213 22.3649 17.381 20.9052L20.9052 17.381Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14 14C14 14 14.2813 15.4596 15.911 17.0892C17.5407 18.7189 19 19 19 19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgPills3;
