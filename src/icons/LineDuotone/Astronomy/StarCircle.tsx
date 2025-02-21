import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      opacity={0.5}
      cx={12}
      cy={12}
      r={10}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M10.8613 9.36335C11.3679 8.45445 11.6213 8 12 8C12.3787 8 12.6321 8.45445 13.1387 9.36335L13.2698 9.59849C13.4138 9.85677 13.4858 9.98591 13.598 10.0711C13.7103 10.1563 13.8501 10.188 14.1296 10.2512L14.3842 10.3088C15.3681 10.5314 15.86 10.6427 15.977 11.0191C16.0941 11.3955 15.7587 11.7876 15.088 12.572L14.9144 12.7749C14.7238 12.9978 14.6285 13.1092 14.5857 13.2471C14.5428 13.385 14.5572 13.5336 14.586 13.831L14.6122 14.1018C14.7136 15.1482 14.7644 15.6715 14.4579 15.9041C14.1515 16.1367 13.6909 15.9246 12.7697 15.5005L12.5314 15.3907C12.2696 15.2702 12.1387 15.2099 12 15.2099C11.8613 15.2099 11.7304 15.2702 11.4686 15.3907L11.2303 15.5005C10.3091 15.9246 9.84847 16.1367 9.54206 15.9041C9.23565 15.6715 9.28635 15.1482 9.38776 14.1018L9.41399 13.831C9.44281 13.5336 9.45722 13.385 9.41435 13.2471C9.37147 13.1092 9.27617 12.9978 9.08557 12.7749L8.91204 12.572C8.2413 11.7876 7.90593 11.3955 8.02297 11.0191C8.14001 10.6427 8.63194 10.5314 9.61581 10.3088L9.87035 10.2512C10.1499 10.188 10.2897 10.1563 10.402 10.0711C10.5142 9.98591 10.5862 9.85677 10.7302 9.59849L10.8613 9.36335Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgStarCircle;
