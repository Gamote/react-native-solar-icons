import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11 9.47243C11 8.32078 10.5607 7.16912 9.68198 6.29045C8.93067 5.53914 7.9798 5.10903 7 5.00012M11 9.47243C11 10.6241 10.5607 11.7757 9.68198 12.6544C7.92462 14.4118 5.07538 14.4118 3.31802 12.6544C2.43934 11.7757 2 10.6241 2 9.47243M11 9.47243H2M2 9.47243C2 8.32078 2.43934 7.16912 3.31802 6.29045"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14.7574 7.12156C15.9289 8.29314 17.8284 8.29314 19 7.12156C19.5858 6.53578 19.8787 5.76801 19.8787 5.00024C19.8787 4.23248 19.5858 3.46471 19 2.87892C17.8284 1.70735 15.9289 1.70735 14.7574 2.87892C14.1716 3.46471 13.8787 4.23248 13.8787 5.00024C13.8787 5.76801 14.1716 6.53578 14.7574 7.12156Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M17.381 20.9052L20.9052 17.381C22.3649 15.9213 22.3649 13.5546 20.9052 12.0948C19.4454 10.6351 17.0787 10.6351 15.619 12.0948L12.0948 15.619C10.6351 17.0787 10.6351 19.4454 12.0948 20.9052C12.636 21.4464 13.3019 21.7869 14 21.9268"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 14C14 14 14.2813 15.4596 15.911 17.0892C17.5407 18.7189 19 19 19 19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgPills3;
