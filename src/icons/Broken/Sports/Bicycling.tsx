import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBicycling = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Circle
      cx={15}
      cy={4}
      r={2}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      cx={6}
      cy={18}
      r={3}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Circle
      cx={18}
      cy={18}
      r={3}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M18.5 10H16.4744C15.2534 10 14.6429 10 14.0934 9.77341C13.544 9.54682 13.111 9.11646 12.2449 8.25573L11.6676 7.68194C10.8828 6.90201 10.4904 6.51204 10.0257 6.55439C9.56102 6.59673 9.24559 7.0512 8.61471 7.96013M12 18L12.0572 17.6416C12.2918 16.172 12.4091 15.4373 12.081 14.8374C11.7529 14.2375 11.0709 13.9399 9.70695 13.3448L8.23125 12.7009C7.1987 12.2503 6.68242 12.025 6.55348 11.5703C6.50262 11.3909 6.5218 11.2103 6.60313 11.0005"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgBicycling;
