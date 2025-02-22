import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeAngle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.36395 12.958C1.98451 10.321 1.79478 9.00247 2.33524 7.87513C2.87571 6.74778 4.02607 6.06252 6.32679 4.69199L7.71163 3.86705C9.80092 2.62247 10.8456 2.00018 11.9999 2.00018C13.1542 2.00018 14.1988 2.62247 16.2881 3.86705L17.673 4.69199C19.9737 6.06252 21.1241 6.74778 21.6645 7.87513C22.205 9.00247 22.0153 10.321 21.6358 12.9581L21.357 14.8954C20.8696 18.2828 20.6259 19.9766 19.4509 20.9884C18.2758 22.0002 16.5525 22.0002 13.106 22.0002H10.8938C7.44725 22.0002 5.72397 22.0002 4.54891 20.9884C3.37384 19.9766 3.13013 18.2828 2.64272 14.8954L2.36395 12.958Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 18H9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgHomeAngle;
