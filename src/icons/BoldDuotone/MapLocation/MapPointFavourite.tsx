import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapPointFavourite = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M10.5371 21.6744C11.4657 22.1085 12.5343 22.1085 13.4629 21.6744C17.4467 19.8124 20 14.6055 20 10.1433C20 5.64588 16.4183 2 12 2C7.58172 2 4 5.64588 4 10.1433C4 14.6055 6.55332 19.8124 10.5371 21.6744Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.7238 13.3301C9.55314 12.396 8 10.8877 8 9.46027C8 7.03407 10.2001 6.12824 12 8.00246C13.7999 6.12824 16 7.03407 16 9.46026C16 10.8877 14.4469 12.396 13.2762 13.3301C12.7165 13.7767 12.4367 14 12 14C11.5633 14 11.2835 13.7767 10.7238 13.3301Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMapPointFavourite;
