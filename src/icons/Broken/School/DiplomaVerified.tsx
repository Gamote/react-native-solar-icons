import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiplomaVerified = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M7 17.9983C4.82497 17.9862 3.64706 17.8897 2.87868 17.1213C2 16.2426 2 14.8284 2 12L2 8C2 5.17157 2 3.75736 2.87868 2.87868C3.75736 2 5.17157 2 8 2L16 2C18.8284 2 20.2426 2 21.1213 2.87868C21.6112 3.36857 21.828 4.02491 21.9239 5M16.5 17.9983L17.3197 17.9957C19.2921 17.9748 20.3915 17.8512 21.1213 17.1213C22 16.2426 22 14.8284 22 12V9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M9 6L15 6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7 9.5H9M17 9.5H12.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.8907 13.9452C11.53 13.4004 12.4702 13.4004 13.1094 13.9452C13.3833 14.1786 13.7239 14.3197 14.0827 14.3483C14.9199 14.4152 15.5847 15.08 15.6515 15.9172C15.6802 16.276 15.8212 16.6165 16.0547 16.8905C16.5994 17.5297 16.5994 18.4699 16.0547 19.1092C15.8212 19.3831 15.6802 19.7237 15.6515 20.0824C15.5847 20.9197 14.9199 21.5845 14.0827 21.6513C13.7239 21.6799 13.3833 21.821 13.1094 22.0544C12.4702 22.5992 11.53 22.5992 10.8907 22.0544C10.6168 21.821 10.2762 21.6799 9.91743 21.6513C9.08021 21.5845 8.41539 20.9197 8.34858 20.0824C8.31995 19.7237 8.17888 19.3831 7.94543 19.1092C7.40068 18.4699 7.40068 17.5297 7.94543 16.8905C8.17888 16.6165 8.31995 16.276 8.34858 15.9172C8.4154 15.08 9.08021 14.4152 9.91743 14.3483C10.2762 14.3197 10.6168 14.1786 10.8907 13.9452Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M10.5 18.2L11.3571 19L13.5 17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgDiplomaVerified;
