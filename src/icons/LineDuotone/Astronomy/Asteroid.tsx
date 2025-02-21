import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAsteroid = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 2C6.47715 2 2 6.47715 2 12C2 12.4447 2.02903 12.8826 2.0853 13.312C2.61321 17.3405 5.53889 20.6144 9.38261 21.654C10.2169 21.8796 11.0944 22 12 22C16.8786 22 20.9413 18.5064 21.8227 13.8845C21.9391 13.2742 22 12.6442 22 12C22 8.87326 20.565 6.08169 18.3176 4.24796C16.5954 2.84273 14.3961 2 12 2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M2.08545 13.312C2.68675 13.1097 3.33065 13 4.00015 13C7.31386 13 10.0002 15.6863 10.0002 19C10.0002 19.9529 9.77804 20.8538 9.38276 21.654"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.5}
      d="M21.8227 13.8846C19.0727 13.3375 17 10.9108 17 8.00008C17 6.58023 17.4932 5.27556 18.3176 4.24805"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M16 16C16 16.5523 15.5523 17 15 17C14.4477 17 14 16.5523 14 16C14 15.4477 14.4477 15 15 15C15.5523 15 16 15.4477 16 16Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M13 8.5C13 9.88071 11.8807 11 10.5 11C9.11929 11 8 9.88071 8 8.5C8 7.11929 9.11929 6 10.5 6C11.8807 6 13 7.11929 13 8.5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgAsteroid;
