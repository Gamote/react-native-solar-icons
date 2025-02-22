import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCosmetic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 11.5C2 11.2239 2.22386 11 2.5 11H7.5C7.77614 11 8 11.2239 8 11.5V18C8 19.6569 6.65685 21 5 21C3.34315 21 2 19.6569 2 18V11.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M3 11.0001H7V5.99995C7 5.25657 6.21769 4.77307 5.55279 5.10552L3.55279 6.10552C3.214 6.27491 3 6.62118 3 6.99995V11.0001Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11 10.5C11 7.46243 13.4624 5 16.5 5C19.5376 5 22 7.46243 22 10.5C22 13.5376 19.5376 16 16.5 16C13.4624 16 11 13.5376 11 10.5Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M15.75 15.9493V19.5002H13.5C13.0858 19.5002 12.75 19.836 12.75 20.2502C12.75 20.6644 13.0858 21.0002 13.5 21.0002H19.5C19.9142 21.0002 20.25 20.6644 20.25 20.2502C20.25 19.836 19.9142 19.5002 19.5 19.5002H17.25V15.9493C17.0048 15.9828 16.7544 16.0001 16.5 16.0001C16.2456 16.0001 15.9952 15.9828 15.75 15.9493Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgCosmetic;
