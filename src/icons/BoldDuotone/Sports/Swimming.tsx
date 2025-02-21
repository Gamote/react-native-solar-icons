import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSwimming = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.57004 17.8659C5.25688 16.7921 6.72749 16.8273 7.4577 17.762C8.4477 19.0293 9.82965 20.2502 12.0002 20.2502C14.2088 20.2502 15.5699 19.2714 16.5051 18.0211C17.2251 17.0587 18.7909 16.9015 19.5458 18.0437C20.1708 18.9893 20.8488 19.7308 22.1722 20.0426C22.5754 20.1376 22.8252 20.5414 22.7302 20.9446C22.6352 21.3478 22.2313 21.5976 21.8282 21.5026C19.9762 21.0662 19.0206 19.9694 18.2944 18.8707C18.2374 18.7846 18.1519 18.7408 18.0408 18.7429C17.9223 18.7451 17.7936 18.8029 17.7063 18.9197C16.5386 20.4806 14.7604 21.7502 12.0002 21.7502C9.15759 21.7502 7.38876 20.1103 6.27565 18.6855C6.20392 18.5936 6.11032 18.5587 6.02981 18.5604C5.95388 18.5621 5.88442 18.5948 5.83365 18.6742C5.09416 19.8303 4.13929 21.0391 2.17218 21.5026C1.76901 21.5976 1.36516 21.3478 1.27016 20.9446C1.17516 20.5414 1.42498 20.1376 1.82816 20.0426C3.2291 19.7125 3.90775 18.9013 4.57004 17.8659Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.57004 12.8054C5.25688 11.7316 6.72749 11.7668 7.4577 12.7015C8.4477 13.9687 9.82965 15.1897 12.0002 15.1897C14.2088 15.1897 15.5699 14.2108 16.5051 12.9606C17.2251 11.9981 18.7909 11.8409 19.5458 12.9831C20.1708 13.9288 20.8488 14.6702 22.1722 14.982C22.5754 15.077 22.8252 15.4809 22.7302 15.8841C22.6352 16.2872 22.2313 16.5371 21.8282 16.4421C19.9762 16.0057 19.0206 14.9089 18.2944 13.8102C18.2374 13.724 18.1519 13.6802 18.0408 13.6823C17.9223 13.6846 17.7936 13.7423 17.7063 13.8591C16.5386 15.42 14.7604 16.6897 12.0002 16.6897C9.15759 16.6897 7.38876 15.0498 6.27565 13.6249C6.20392 13.5331 6.11032 13.4981 6.02981 13.4999C5.95388 13.5015 5.88442 13.5343 5.83365 13.6136C5.09416 14.7697 4.13929 15.9785 2.17218 16.4421C1.76901 16.5371 1.36516 16.2872 1.27016 15.8841C1.17516 15.4809 1.42498 15.077 1.82816 14.982C3.2291 14.6519 3.90775 13.8408 4.57004 12.8054Z"
      fill={props.primaryColor}
    />
    <Path
      d="M19.5 5.5C19.5 6.88071 18.3808 8 17 8C15.6193 8 14.5 6.88071 14.5 5.5C14.5 4.11929 15.6193 3 17 3C18.3808 3 19.5 4.11929 19.5 5.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M16.6456 12.7938L15.5 11.5L9.00079 4.13417C8.45849 3.51957 7.51009 3.48996 6.93051 4.06954C6.40547 4.59458 6.37318 5.43532 6.8564 5.99908L7.84412 7.15142C8.44855 7.85659 7.47698 9.41384 7.47698 9.41384L5.11523 12.2589C5.86292 11.7897 6.8866 11.9706 7.45758 12.7015C8.44758 13.9687 9.82953 15.1897 12 15.1897C14.2087 15.1897 15.5698 14.2108 16.505 12.9606C16.5489 12.902 16.5959 12.8464 16.6456 12.7938Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSwimming;
