import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClapperboardOpen = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20 16C20 18.8284 20 20.2426 19.1213 21.1213C18.2426 22 16.8284 22 14 22H10C7.17157 22 5.75736 22 4.87868 21.1213C4 20.2426 4 18.8284 4 16V11H16C17.8856 11 18.8284 11 19.4142 11.5858C19.7501 11.9217 19.8934 12.3749 19.9545 13.0559"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M4.00153 10.9997C3.51773 9.19412 3.27584 8.29135 3.48389 7.51489C3.62019 7.00622 3.88798 6.5424 4.26035 6.17003C4.82875 5.60162 5.73152 5.35973 7.53706 4.87593L14.54 2.99949C15.2133 2.8191 15.5499 2.72891 15.8447 2.70958C17.0555 2.63022 18.1949 3.28804 18.7315 4.37629C18.8622 4.64129 18.9524 4.97791 19.1328 5.65114C19.1929 5.87556 19.223 5.98776 19.2295 6.08604C19.2559 6.48964 19.0366 6.86943 18.6739 7.04832C18.5855 7.09188 18.4733 7.12195 18.2489 7.18208L4.00153 10.9997Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M14.7004 2.94135L14.0627 8.28861"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8.42184 4.62396L7.78409 9.97123"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgClapperboardOpen;
