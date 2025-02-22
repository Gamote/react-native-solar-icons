import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMedalRibbon = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle opacity={0.5} cx={12} cy={9} r={7} fill={props.primaryColor} />
    <Path
      d="M7.54572 14.4004L7.35111 15.0002L6.71424 17.3232C6.0859 19.615 5.77173 20.7609 6.19097 21.3883C6.3379 21.6081 6.535 21.7846 6.76372 21.901C7.41634 22.2333 8.424 21.7083 10.4393 20.6582C11.1099 20.3088 11.4452 20.1341 11.8014 20.0961C11.9335 20.082 12.0665 20.082 12.1986 20.0961C12.5548 20.1341 12.8901 20.3088 13.5607 20.6582C15.576 21.7083 16.5837 22.2333 17.2363 21.901C17.465 21.7846 17.6621 21.6081 17.809 21.3883C18.2283 20.7609 17.9141 19.615 17.2858 17.3232L16.6489 15.0002L16.4543 14.4004C15.244 15.3998 13.6921 16.0002 12 16.0002C10.3079 16.0002 8.75597 15.3998 7.54572 14.4004Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgMedalRibbon;
