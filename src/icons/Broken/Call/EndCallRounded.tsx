import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEndCallRounded = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.9171 10.5032C19.5598 9.03889 16.8068 7 12 7C10.8404 7 9.80025 7.11867 8.87043 7.31931M22 13.8504C22 15.9102 20.2184 17.4151 18.3928 16.8973L17.0531 16.5173C15.8441 16.1744 15 14.9826 15 13.6185C15 13.6183 14.9998 11.9639 12 11.9639C9.00114 11.9639 9 13.6173 9 13.6185C8.99998 14.9826 8.1559 16.1744 6.9469 16.5173L5.6072 16.8973C3.78158 17.4151 2 15.9102 2 13.8504C2 12.6127 2.27659 11.373 3.08289 10.5032C3.66195 9.8785 4.49502 9.14923 5.63319 8.51831"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgEndCallRounded;
