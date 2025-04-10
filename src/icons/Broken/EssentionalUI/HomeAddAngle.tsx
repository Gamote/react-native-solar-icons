import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeAddAngle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M15 13L12 13M12 13L9 13M12 13L12 10M12 13L12 16"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21.6359 12.9581L21.3572 14.8955C20.8697 18.2829 20.626 19.9766 19.451 20.9884C18.2759 22.0002 16.5526 22.0002 13.1061 22.0002H10.8939C7.44737 22.0002 5.72409 22.0002 4.54903 20.9884C3.37396 19.9766 3.13025 18.2829 2.64284 14.8955L2.36407 12.9581C1.98463 10.3211 1.79491 9.00253 2.33537 7.87519C2.87583 6.74785 4.02619 6.06258 6.32691 4.69205L7.71175 3.86711C9.80104 2.62253 10.8457 2.00024 12 2.00024C13.1543 2.00024 14.199 2.62253 16.2882 3.86711L17.6731 4.69205C19.9738 6.06258 21.1242 6.74785 21.6646 7.87519"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgHomeAddAngle;
