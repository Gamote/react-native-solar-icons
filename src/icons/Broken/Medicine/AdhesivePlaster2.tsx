import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAdhesivePlaster2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12.765 20.4155C14.8777 22.5282 18.3029 22.5282 20.4155 20.4155C22.5282 18.3029 22.5282 14.8777 20.4155 12.765M12.765 20.4155L20.4155 12.765M12.765 20.4155L8.17476 15.8252M3.58447 11.235C1.47184 9.12233 1.47184 5.69709 3.58447 3.58447C5.69709 1.47184 9.12233 1.47184 11.235 3.58447M3.58447 11.235L11.235 3.58447M3.58447 11.235L5 12.6505M20.4155 12.765L19 11.3495M11.235 3.58447L15.8252 8.17476"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle
      cx={9.17154}
      cy={12}
      r={1}
      transform="rotate(-45 9.17154 12)"
      fill={props.primaryColor}
    />
    <Circle
      cx={11.9999}
      cy={14.8284}
      r={1}
      transform="rotate(-45 11.9999 14.8284)"
      fill={props.primaryColor}
    />
    <Circle
      cx={11.9999}
      cy={9.17163}
      r={1}
      transform="rotate(-45 11.9999 9.17163)"
      fill={props.primaryColor}
    />
    <Circle
      cx={14.8285}
      cy={12}
      r={1}
      transform="rotate(-45 14.8285 12)"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgAdhesivePlaster2;
