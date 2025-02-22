import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartHomeAngle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M21.6359 12.9581L21.3572 14.8954C20.8697 18.2828 20.626 19.9766 19.451 20.9884C18.3822 21.9086 16.8599 21.9919 14 21.9994M21.6646 7.87513C21.1242 6.74779 19.9738 6.06252 17.6731 4.69199L16.2882 3.86705C14.199 2.62247 13.1543 2.00018 12 2.00018C10.8457 2.00018 9.80104 2.62247 7.71175 3.86705L6.32691 4.69199C4.02619 6.06252 2.87583 6.74779 2.33537 7.87513C2.04852 8.47345 1.96736 9.12562 2.01108 10.0002"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 22C11 17.0294 6.97056 13 2 13"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M8 22C8 18.6863 5.31371 16 2 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M5 22C5 20.3431 3.65685 19 2 19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSmartHomeAngle;
