import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTennis2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3.33977 17.0002C6.10119 21.7831 12.2171 23.4219 17 20.6605C18.9496 19.5349 20.3768 17.8519 21.1965 15.929C22.3878 13.1346 22.2961 9.83352 20.6603 7.00021C19.0245 4.16689 16.2115 2.43691 13.1958 2.07137C11.1207 1.81984 8.94963 2.21434 7.00002 3.33995C2.2171 6.10137 0.578344 12.2173 3.33977 17.0002Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M13.1958 2.07129C13.1958 2.07129 12.0981 6.17 14.5981 10.5001C17.0981 14.8303 21.1965 15.929 21.1965 15.929M2.80347 8.07129C2.80347 8.07129 6.90191 9.17 9.40191 13.5001C11.9019 17.8303 10.8042 21.929 10.8042 21.929"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeDasharray="1.5 2"
    />
  </Svg>
);
export default SvgTennis2;
