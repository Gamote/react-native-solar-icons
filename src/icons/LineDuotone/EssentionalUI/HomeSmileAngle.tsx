import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeSmileAngle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2.36407 12.958C1.98463 10.321 1.79491 9.00247 2.33537 7.87513C2.87583 6.74778 4.02619 6.06252 6.32691 4.69199L7.71175 3.86705C9.80104 2.62247 10.8457 2.00018 12 2.00018C13.1543 2.00018 14.199 2.62247 16.2882 3.86705L17.6731 4.69199C19.9738 6.06252 21.1242 6.74778 21.6646 7.87513C22.2051 9.00247 22.0154 10.321 21.6359 12.9581L21.3572 14.8954C20.8697 18.2828 20.626 19.9766 19.451 20.9884C18.2759 22.0002 16.5526 22.0002 13.1061 22.0002H10.8939C7.44737 22.0002 5.72409 22.0002 4.54903 20.9884C3.37396 19.9766 3.13025 18.2828 2.64284 14.8954L2.36407 12.958Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M9 16C9.85038 16.6303 10.8846 17 12 17C13.1154 17 14.1496 16.6303 15 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgHomeSmileAngle;
