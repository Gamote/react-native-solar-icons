import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDropper2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 10H19"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 12.9167C18 14.0673 17.1046 15 16 15C14.8954 15 14 14.0673 14 12.9167C14 12.1968 14.783 11.2359 15.3691 10.6175C15.7161 10.2514 16.2839 10.2514 16.6309 10.6175C17.217 11.2359 18 12.1968 18 12.9167Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M22 13H20"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M16 21V22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      opacity={0.5}
      d="M2 22V8C2 5.17157 2 3.75736 2.87868 2.87868C3.75736 2 5.17157 2 8 2H11.8913L11.9355 2.00008C12.6224 2.00503 13.2869 2.24559 13.8178 2.68156L13.8517 2.70975C13.8926 2.74382 13.913 2.76086 13.9309 2.77532C14.5341 3.26249 15.2747 3.48035 16 3.43581M18.5 2L17.9774 2.52261C17.9398 2.56024 17.9209 2.57906 17.9044 2.59508C17.3724 3.11098 16.6932 3.39324 16 3.43581M16 2V3.43581M16 3.43581V6"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 16.5069V10C22 8.11438 22 7.17157 21.4142 6.58579C20.8284 6 19.8856 6 18 6H14C12.1144 6 11.1716 6 10.5858 6.58579C10 7.17157 10 8.11438 10 10V16.5069C10 17.1639 10.277 17.7906 10.7629 18.2329C13.7315 20.935 18.2685 20.935 21.2371 18.2329C21.723 17.7906 22 17.1639 22 16.5069Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgDropper2;
