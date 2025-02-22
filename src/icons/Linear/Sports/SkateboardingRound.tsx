import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkateboardingRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M3 17L3.60827 17.6759C4.36684 18.5187 5.4475 19 6.58145 19H17.4186C18.5525 19 19.6332 18.5187 20.3917 17.6759L21 17"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Circle cx={7} cy={21} r={1} fill={props.primaryColor} />
    <Circle cx={17} cy={21} r={1} fill={props.primaryColor} />
    <Circle
      cx={19}
      cy={4}
      r={2}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M15 16.5V14.3664C15 13.8174 14.7561 13.2967 14.3344 12.9453L13.3379 12.1149C12.6195 11.5162 12.5702 10.4298 13.2315 9.76847L14.8855 8.11449C15.4193 7.58066 15.2452 6.67647 14.5513 6.37908C13.2663 5.82836 11.793 5.94181 10.6075 6.68276L8.5 7.99996"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M11 14L10.3787 14.6213C9.94513 15.0549 9.72836 15.2716 9.4527 15.3858C9.17705 15.5 8.87049 15.5 8.25736 15.5H7"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.5 10H19.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSkateboardingRound;
