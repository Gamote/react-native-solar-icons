import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.94513 1.25H14.0549C15.4225 1.24998 16.5248 1.24996 17.3918 1.36652C18.2919 1.48754 19.0497 1.74643 19.6517 2.34835C20.2536 2.95027 20.5125 3.70814 20.6335 4.60825C20.75 5.47522 20.75 6.57754 20.75 7.94513V16.0549C20.75 17.4225 20.75 18.5248 20.6335 19.3918C20.5125 20.2919 20.2536 21.0497 19.6517 21.6517C19.0497 22.2536 18.2919 22.5125 17.3918 22.6335C16.5248 22.75 15.4225 22.75 14.0549 22.75H9.94513C8.57754 22.75 7.47522 22.75 6.60825 22.6335C5.70814 22.5125 4.95027 22.2536 4.34835 21.6517C3.74644 21.0497 3.48754 20.2919 3.36653 19.3918C3.32783 19.1039 3.30198 18.7902 3.28472 18.4494C3.24564 18.326 3.23803 18.1912 3.26876 18.0568C3.24998 17.4649 3.24999 16.7991 3.25 16.0549V7.94513C3.24998 6.57754 3.24997 5.47522 3.36653 4.60825C3.48754 3.70814 3.74644 2.95027 4.34835 2.34835C4.95027 1.74643 5.70814 1.48754 6.60825 1.36652C7.47522 1.24996 8.57754 1.24998 9.94513 1.25ZM4.77676 18.2491C4.79196 18.6029 4.81579 18.914 4.85315 19.1919C4.9518 19.9257 5.13225 20.3142 5.40901 20.591C5.68578 20.8678 6.07435 21.0482 6.80812 21.1469C7.56347 21.2484 8.56459 21.25 10 21.25H14C15.4354 21.25 16.4365 21.2484 17.1919 21.1469C17.9257 21.0482 18.3142 20.8678 18.591 20.591C18.8678 20.3142 19.0482 19.9257 19.1469 19.1919C19.2297 18.5756 19.246 17.7958 19.2492 16.75H7.89778C6.91952 16.75 6.57752 16.7564 6.31544 16.8267C5.59612 17.0194 5.02268 17.5541 4.77676 18.2491ZM19.25 15.25V8C19.25 6.56458 19.2484 5.56347 19.1469 4.80812C19.0482 4.07435 18.8678 3.68577 18.591 3.40901C18.3142 3.13225 17.9257 2.9518 17.1919 2.85315C16.4365 2.75159 15.4354 2.75 14 2.75H10C9.09219 2.75 8.35809 2.75064 7.75 2.7768V15.25C7.76062 15.25 7.77128 15.25 7.78198 15.25C7.82001 15.25 7.85861 15.25 7.89778 15.25H19.25ZM6.25 15.3114C6.1375 15.3284 6.0305 15.3501 5.92721 15.3778C5.49923 15.4925 5.10224 15.6798 4.75 15.9259V8C4.75 6.56458 4.7516 5.56347 4.85315 4.80812C4.9518 4.07435 5.13225 3.68577 5.40901 3.40901C5.60532 3.2127 5.85789 3.06485 6.25 2.96027V15.3114Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBookMinimalistic;
