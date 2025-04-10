import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTreadmillRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={15}
      cy={4}
      r={2}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M11 16.0001V15.0263C11 14.9078 11 14.8486 10.9979 14.792C10.9672 13.9811 10.6095 13.2173 10.0062 12.6747C9.96408 12.6368 9.91852 12.5989 9.8275 12.523C9.69411 12.4118 9.62741 12.3563 9.5758 12.3066C8.80944 11.5689 8.75462 10.3604 9.45104 9.5563C9.49795 9.50214 9.55934 9.44075 9.68211 9.31798L10.0113 8.98874C10.9639 8.03622 10.6532 6.42287 9.41502 5.89224C8.84181 5.64658 8.18464 5.69719 7.65581 6.02771L4.5 8.00009"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M3 15.5H3.37868C4.73694 15.5 6.03957 14.9604 7 14"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12.5 10C13.4737 10.3246 14.5263 10.3246 15.5 10"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11.2878 22.0001H3.08684C2.48659 22.0001 2 21.5135 2 20.9133C2 20.3853 2.37943 19.9337 2.89949 19.8427L19.0559 17.0153C20.5926 16.7464 22 17.9289 22 19.4889C22 20.8758 20.8757 22.0001 19.4888 22.0001H15"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.3801 9.91005C18.3187 10.3197 18.6009 10.7016 19.0105 10.763C19.4202 10.8244 19.8021 10.5422 19.8635 10.1326L18.3801 9.91005ZM22.1471 7.73544C22.5533 7.6542 22.8167 7.25908 22.7354 6.85291C22.6542 6.44674 22.2591 6.18333 21.8529 6.26456L22.1471 7.73544ZM19.3026 13.8719C19.364 13.4623 19.0818 13.0804 18.6722 13.0189C18.2625 12.9575 17.8806 13.2398 17.8192 13.6494L19.3026 13.8719ZM19.8635 10.1326C20.0436 8.93217 20.9568 7.97349 22.1471 7.73544L21.8529 6.26456C20.0428 6.62658 18.6539 8.08452 18.3801 9.91005L19.8635 10.1326ZM18.7417 17.6113L19.3026 13.8719L17.8192 13.6494L17.2583 17.3887L18.7417 17.6113Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTreadmillRound;
