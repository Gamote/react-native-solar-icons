import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapPointSchool = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C6.55332 19.8124 4 14.6055 4 10.1433Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M11.224 6.63627C11.7213 6.45458 12.2787 6.45458 12.776 6.63627L15.1179 7.49181C15.6274 7.67791 15.6274 8.3221 15.1179 8.5082L12.776 9.36373C12.2787 9.54542 11.7213 9.54542 11.224 9.36373L8.88206 8.50819C8.37265 8.32209 8.37265 7.6779 8.88206 7.4918L11.224 6.63627Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M14.5 9V11.7002C14.5 12.0891 14.2746 12.4439 13.9097 12.5785C13.3965 12.7679 12.6375 13 12 13C11.3625 13 10.6035 12.7679 10.0903 12.5785C9.72542 12.4439 9.5 12.0891 9.5 11.7002V9"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMapPointSchool;
