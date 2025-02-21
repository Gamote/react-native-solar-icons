import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlugCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10.0128 21.9673L9.86335 22.7023L9.86335 22.7023L10.0128 21.9673ZM16.0342 20.4846C15.6622 20.6668 15.5084 21.116 15.6906 21.488C15.8728 21.86 16.3221 22.0138 16.6941 21.8316L16.0342 20.4846ZM10.1622 21.2324C5.93808 20.3736 2.75 16.6065 2.75 12.0832H1.25C1.25 17.3253 4.94577 21.7025 9.86335 22.7023L10.1622 21.2324ZM2.75 12.0832C2.75 6.92275 6.89721 2.75 12 2.75V1.25C6.05709 1.25 1.25 6.10606 1.25 12.0832H2.75ZM12 2.75C17.1028 2.75 21.25 6.92275 21.25 12.0832H22.75C22.75 6.10606 17.9429 1.25 12 1.25V2.75ZM12.75 20.1498V15.1082H11.25V20.1498H12.75ZM21.25 12.0832C21.25 15.7797 19.1208 18.9726 16.0342 20.4846L16.6941 21.8316C20.2798 20.0752 22.75 16.369 22.75 12.0832H21.25ZM9.86335 22.7023C11.5214 23.0394 12.75 21.618 12.75 20.1498H11.25C11.25 20.909 10.6697 21.3355 10.1622 21.2324L9.86335 22.7023Z"
      fill={props.primaryColor}
    />
    <Path
      d="M9 11.8C9 11.3582 9.35817 11 9.8 11H14.2C14.6418 11 15 11.3582 15 11.8V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V11.8Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M13.5 11V9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M10.5 11V9"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgPlugCircle;
