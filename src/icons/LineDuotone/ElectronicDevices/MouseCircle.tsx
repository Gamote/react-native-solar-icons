import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMouseCircle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 10C8 7.79086 9.79086 6 12 6C14.2091 6 16 7.79086 16 10V14C16 16.2091 14.2091 18 12 18C9.79086 18 8 16.2091 8 14V10Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M8.5 10H15.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 10V6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M10.0128 2.03267L9.86335 1.29771L9.86335 1.29771L10.0128 2.03267ZM16.6941 2.16836C16.3221 1.98615 15.8728 2.13999 15.6906 2.51197C15.5084 2.88395 15.6622 3.33322 16.0342 3.51543L16.6941 2.16836ZM9.86335 1.29771C4.94577 2.29747 1.25 6.67467 1.25 11.9168H2.75C2.75 7.39347 5.93808 3.62641 10.1622 2.76764L9.86335 1.29771ZM1.25 11.9168C1.25 17.8939 6.05709 22.75 12 22.75V21.25C6.89721 21.25 2.75 17.0772 2.75 11.9168H1.25ZM12 22.75C17.9429 22.75 22.75 17.8939 22.75 11.9168H21.25C21.25 17.0772 17.1028 21.25 12 21.25V22.75ZM11.25 3.85022V8.89182H12.75V3.85022H11.25ZM22.75 11.9168C22.75 7.63103 20.2798 3.9248 16.6941 2.16836L16.0342 3.51543C19.1208 5.02741 21.25 8.22027 21.25 11.9168H22.75ZM10.1622 2.76764C10.6697 2.66445 11.25 3.09097 11.25 3.85022H12.75C12.75 2.38195 11.5214 0.960629 9.86335 1.29771L10.1622 2.76764Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMouseCircle;
