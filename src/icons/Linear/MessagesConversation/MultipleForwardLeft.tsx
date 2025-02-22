import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMultipleForwardLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.3356 5.47973L7.36335 9.01066C5.79473 10.405 5.01041 11.1022 5.01041 12.0003C5.01041 12.8984 5.79472 13.5956 7.36335 14.9899L11.3356 18.5209C12.0517 19.1573 12.4097 19.4755 12.7048 19.343C13 19.2104 13 18.7314 13 17.7735V15.4289C16.6 15.4289 20.5 17.1432 22 20.0003C22 10.8574 16.6667 8.57172 13 8.57172V6.22714C13 5.26915 13 4.79015 12.7048 4.6576C12.4097 4.52505 12.0517 4.84327 11.3356 5.47973Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.46132 4.5L3.24512 9.34362C2.45101 10.081 1.99979 11.1158 1.99979 12.1994C1.99979 13.3418 2.50101 14.4266 3.3709 15.1671L8.46132 19.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMultipleForwardLeft;
