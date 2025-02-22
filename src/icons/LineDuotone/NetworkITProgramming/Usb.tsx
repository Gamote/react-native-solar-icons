import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsb = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={12}
      cy={20}
      r={2}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle cx={6} cy={6} r={1} stroke={props.primaryColor} strokeWidth={1.5} />
    <Path
      opacity={0.5}
      d="M12 2V15M12 15V18V17.4415C12 16.5807 12.5509 15.8164 13.3675 15.5442L16.6325 14.4558C17.4491 14.1836 18 13.4193 18 12.5585V10M12 15V14.4415C12 13.5807 11.4491 12.8164 10.6325 12.5442L7.36754 11.4558C6.55086 11.1836 6 10.4193 6 9.55848V7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M14 5L12 2L10 5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17 9C17 8.5286 17 8.29289 17.1464 8.14645C17.2929 8 17.5286 8 18 8C18.4714 8 18.7071 8 18.8536 8.14645C19 8.29289 19 8.5286 19 9C19 9.4714 19 9.70711 18.8536 9.85355C18.7071 10 18.4714 10 18 10C17.5286 10 17.2929 10 17.1464 9.85355C17 9.70711 17 9.4714 17 9Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgUsb;
