import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShield = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.25 2.07342C10.6437 2.18652 9.93159 2.43028 8.83772 2.80472L8.26491 3.00079C5.25832 4.02996 3.75503 4.54454 3.37752 5.08241C3.00825 5.60853 3.00018 7.14974 3 10.2094L11.25 7.45943V2.07342Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11.25 9.04057L3 11.7906V11.9914C3 17.6294 7.23896 20.3655 9.89856 21.5273C10.4093 21.7504 10.7392 21.8945 11.25 21.9597V9.04057Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 21.9597V9.04057L21 11.7906V11.9914C21 17.6294 16.761 20.3655 14.1014 21.5273C13.5907 21.7504 13.2608 21.8945 12.75 21.9597Z"
      fill={props.primaryColor}
    />
    <Path
      d="M12.75 7.45943V2.07342C13.3563 2.18652 14.0684 2.43028 15.1623 2.80472L15.7351 3.00079C18.7417 4.02996 20.245 4.54454 20.6225 5.08241C20.9918 5.60853 20.9998 7.14974 21 10.2094L12.75 7.45943Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgShield;
