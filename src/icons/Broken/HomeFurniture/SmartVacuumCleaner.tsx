import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartVacuumCleaner = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.5 20.7361C17.0308 21.2111 17.7316 21.5 18.5 21.5C20.1569 21.5 21.5 20.1569 21.5 18.5C21.5 17.7316 21.2111 17.0308 20.7361 16.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M7.49951 20.7361C6.96876 21.2111 6.26787 21.5 5.49951 21.5C3.84266 21.5 2.49951 20.1569 2.49951 18.5C2.49951 17.7316 2.78837 17.0308 3.26341 16.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 18V16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSmartVacuumCleaner;
