import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCart3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.86381 16.4552C3.00586 13.0234 2.57688 11.3075 3.47772 10.1538C4.37855 9 6.14725 9 9.68466 9H14.3153C17.8528 9 19.6215 9 20.5223 10.1538C21.4231 11.3075 20.9941 13.0234 20.1362 16.4552C19.5905 18.6379 19.3177 19.7292 18.5039 20.3646C17.6901 21 16.5652 21 14.3153 21H9.68466C7.43481 21 6.30988 21 5.4961 20.3646C4.68231 19.7292 4.40948 18.6379 3.86381 16.4552Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M8 13V17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16 13V17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 13V17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SvgCart3;
