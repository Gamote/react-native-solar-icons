import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkateboarding = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21 4C21 5.10457 20.1046 6 19 6C17.8954 6 17 5.10457 17 4C17 2.89543 17.8954 2 19 2C20.1046 2 21 2.89543 21 4Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11.3322 5.34542C12.0231 4.91365 12.8815 4.84754 13.6303 5.16845C15.3575 5.90866 15.6717 8.22314 14.2044 9.39698L13.7588 9.7534C13.6749 9.82053 13.6503 9.84042 13.6353 9.8534C13.0133 10.3907 13.0703 11.3718 13.7504 11.8335C13.7666 11.8445 13.7989 11.8649 13.9032 11.9301L13.9126 11.936C13.9819 11.9793 14.0291 12.0087 14.0704 12.0361C15.0902 12.7114 15.7166 13.8415 15.7487 15.0642C15.75 15.1136 15.75 15.1649 15.75 15.2393V16.5C15.75 16.9142 15.4142 17.25 15 17.25C14.5858 17.25 14.25 16.9142 14.25 16.5V15.2491C14.25 15.1612 14.2499 15.1308 14.2492 15.1036C14.2299 14.37 13.8541 13.6919 13.2423 13.2868L13.1486 13.2273C13.1368 13.2199 13.1234 13.2116 13.1082 13.2021L13.0915 13.1916C13.0109 13.1412 12.9512 13.1039 12.9079 13.0745C11.4118 12.0589 11.2863 9.9005 12.6547 8.71833C12.6943 8.68408 12.7437 8.64454 12.8091 8.59225L13.2673 8.22568C13.8498 7.75972 13.7251 6.84099 13.0395 6.54717C12.7422 6.41979 12.4015 6.44603 12.1272 6.61742L8.89751 8.636C8.54625 8.85553 8.08354 8.74875 7.86401 8.3975C7.64447 8.04625 7.75126 7.58353 8.10251 7.364L11.3322 5.34542Z"
      fill={props.primaryColor}
    />
    <Path
      d="M2.49828 16.4425C2.80617 16.1654 3.28038 16.1904 3.55748 16.4983L4.76161 17.8362C4.99867 18.0996 5.33637 18.25 5.69073 18.25H18.3093C18.6636 18.25 19.0013 18.0996 19.2384 17.8362L20.4425 16.4983C20.7196 16.1904 21.1938 16.1654 21.5017 16.4425C21.8096 16.7196 21.8346 17.1938 21.5575 17.5017L20.3533 18.8397C19.8318 19.4191 19.0889 19.75 18.3093 19.75H5.69073C4.91114 19.75 4.16819 19.4191 3.64667 18.8397L2.44254 17.5017C2.16544 17.1938 2.1904 16.7196 2.49828 16.4425Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M8 21.0002C8 21.5525 7.55228 22.0002 7 22.0002C6.44772 22.0002 6 21.5525 6 21.0002C6 20.4479 6.44772 20.0002 7 20.0002C7.55228 20.0002 8 20.4479 8 21.0002Z"
        fill={props.primaryColor}
      />
      <Path
        d="M18 21.0002C18 21.5525 17.5523 22.0002 17 22.0002C16.4477 22.0002 16 21.5525 16 21.0002C16 20.4479 16.4477 20.0002 17 20.0002C17.5523 20.0002 18 20.4479 18 21.0002Z"
        fill={props.primaryColor}
      />
      <Path
        d="M15.7724 9.81828C15.8729 9.41643 16.2801 9.17211 16.6819 9.27257C17.8756 9.57099 19.1244 9.57099 20.3181 9.27257C20.7199 9.17211 21.1271 9.41643 21.2276 9.81828C21.3281 10.2201 21.0837 10.6273 20.6819 10.7278C19.2493 11.0859 17.7507 11.0859 16.3181 10.7278C15.9163 10.6273 15.6719 10.2201 15.7724 9.81828Z"
        fill={props.primaryColor}
      />
      <Path
        d="M11.5303 13.4698C11.8232 13.7627 11.8232 14.2376 11.5303 14.5305C10.4292 15.6316 8.93585 16.2502 7.37868 16.2502H7C6.58579 16.2502 6.25 15.9144 6.25 15.5002C6.25 15.086 6.58579 14.7502 7 14.7502H7.37868C8.53803 14.7502 9.64989 14.2896 10.4697 13.4698C10.7626 13.177 11.2374 13.177 11.5303 13.4698Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgSkateboarding;
