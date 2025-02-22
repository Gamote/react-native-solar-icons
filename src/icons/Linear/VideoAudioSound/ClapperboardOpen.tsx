import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClapperboardOpen = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M4 11H16C17.8856 11 18.8284 11 19.4142 11.5858C20 12.1716 20 13.1144 20 15V16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V11Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M4.00147 10.9997C3.51767 9.19412 3.27578 8.29135 3.48383 7.51489C3.62012 7.00622 3.88792 6.5424 4.26028 6.17003C4.82869 5.60162 5.73146 5.35973 7.537 4.87593L14.54 2.99949C15.2132 2.8191 15.5498 2.72891 15.8447 2.70958C17.0554 2.63022 18.1948 3.28804 18.7315 4.37629C18.8622 4.64129 18.9524 4.97791 19.1328 5.65114C19.1929 5.87556 19.223 5.98776 19.2294 6.08604C19.2558 6.48964 19.0366 6.86943 18.6738 7.04832C18.5855 7.09188 18.4733 7.12195 18.2489 7.18208L4.00147 10.9997Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14.7005 2.94135L14.0627 8.28861"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.42196 4.62396L7.78421 9.97123"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgClapperboardOpen;
