import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGolf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Ellipse
      cx={12}
      cy={18.5}
      rx={10}
      ry={3.5}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M12 18V2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11.9999 3.5L17.4222 6.21114C18.9834 6.99169 19.7639 7.38196 19.7639 8C19.7639 8.61804 18.9834 9.00831 17.4222 9.78886L11.9999 12.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgGolf;
