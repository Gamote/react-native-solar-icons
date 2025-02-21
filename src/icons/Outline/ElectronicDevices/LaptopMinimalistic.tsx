import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLaptopMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.94513 2.25H15.0549C16.4225 2.24998 17.5248 2.24996 18.3918 2.36652C19.2919 2.48754 20.0497 2.74643 20.6517 3.34835C21.2536 3.95027 21.5125 4.70814 21.6335 5.60825C21.75 6.47522 21.75 7.57754 21.75 8.94513V14.052C21.75 14.9505 21.7501 15.6997 21.6701 16.2945C21.5857 16.9223 21.4 17.4891 20.9445 17.9445C20.4891 18.4 19.9223 18.5857 19.2945 18.6701C18.6997 18.7501 17.9505 18.75 17.052 18.75H6.94801C6.04952 18.75 5.3003 18.7501 4.70552 18.6701C4.07773 18.5857 3.51093 18.4 3.05546 17.9445C2.59999 17.4891 2.41432 16.9223 2.32991 16.2945C2.24994 15.6997 2.24997 14.9505 2.25 14.052L2.25 8.94513C2.24998 7.57754 2.24996 6.47522 2.36652 5.60825C2.48754 4.70814 2.74643 3.95027 3.34835 3.34835C3.95027 2.74643 4.70814 2.48754 5.60825 2.36652C6.47522 2.24996 7.57754 2.24998 8.94513 2.25ZM5.80812 3.85315C5.07434 3.9518 4.68577 4.13225 4.40901 4.40901C4.13225 4.68577 3.9518 5.07435 3.85315 5.80812C3.75159 6.56347 3.75 7.56458 3.75 9V14C3.75 14.964 3.75159 15.6116 3.81654 16.0946C3.87858 16.5561 3.9858 16.7536 4.11612 16.8839C4.24643 17.0142 4.44393 17.1214 4.90539 17.1835C5.38843 17.2484 6.03599 17.25 7 17.25H17C17.964 17.25 18.6116 17.2484 19.0946 17.1835C19.5561 17.1214 19.7536 17.0142 19.8839 16.8839C20.0142 16.7536 20.1214 16.5561 20.1835 16.0946C20.2484 15.6116 20.25 14.964 20.25 14V9C20.25 7.56459 20.2484 6.56347 20.1469 5.80812C20.0482 5.07435 19.8678 4.68577 19.591 4.40901C19.3142 4.13225 18.9257 3.9518 18.1919 3.85315C17.4365 3.75159 16.4354 3.75 15 3.75H9C7.56458 3.75 6.56347 3.75159 5.80812 3.85315ZM8.25 15C8.25 14.5858 8.58579 14.25 9 14.25H15C15.4142 14.25 15.75 14.5858 15.75 15C15.75 15.4142 15.4142 15.75 15 15.75H9C8.58579 15.75 8.25 15.4142 8.25 15ZM1.25 21C1.25 20.5858 1.58579 20.25 2 20.25H22C22.4142 20.25 22.75 20.5858 22.75 21C22.75 21.4142 22.4142 21.75 22 21.75H2C1.58579 21.75 1.25 21.4142 1.25 21Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgLaptopMinimalistic;
