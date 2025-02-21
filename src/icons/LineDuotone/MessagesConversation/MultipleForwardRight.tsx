import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMultipleForwardRight = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.6644 5.47973L16.6367 9.01066C18.2053 10.405 18.9896 11.1022 18.9896 12.0003C18.9896 12.8984 18.2053 13.5956 16.6367 14.9899L12.6644 18.5209C11.9484 19.1573 11.5903 19.4755 11.2952 19.343C11 19.2104 11 18.7314 11 17.7735V15.4289C7.4 15.4289 3.5 17.1432 2 20.0003C2 10.8574 7.33333 8.57172 11 8.57172V6.22714C11 5.26915 11 4.79015 11.2952 4.6576C11.5903 4.52505 11.9484 4.84327 12.6644 5.47973Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      opacity={0.5}
      d="M15.5385 4.5L20.7547 9.34362C21.5488 10.081 22 11.1158 22 12.1994C22 13.3418 21.4988 14.4266 20.6289 15.1671L15.5385 19.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMultipleForwardRight;
