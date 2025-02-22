import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMultipleForwardLeft = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.3356 5.47973L7.36332 9.01066C5.7947 10.405 5.01038 11.1022 5.01038 12.0003C5.01038 12.8984 5.79469 13.5956 7.36332 14.9899L11.3356 18.5209C12.0516 19.1573 12.4096 19.4755 12.7048 19.343C13 19.2104 13 18.7314 13 17.7735V15.4289C16.6 15.4289 20.5 17.1432 22 20.0003C22 10.8574 16.6666 8.57172 13 8.57172V6.22714C13 5.26915 13 4.79015 12.7048 4.6576C12.4096 4.52505 12.0516 4.84327 11.3356 5.47973Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M8.46129 4.5L3.24509 9.34362C2.45098 10.081 1.99976 11.1158 1.99976 12.1994C1.99976 13.3418 2.50097 14.4266 3.37087 15.1671L8.46129 19.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMultipleForwardLeft;
