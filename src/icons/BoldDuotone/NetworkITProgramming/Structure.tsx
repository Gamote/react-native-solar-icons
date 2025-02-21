import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStructure = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M8 5C8 6.65685 6.65685 8 5 8C3.34315 8 2 6.65685 2 5C2 3.34315 3.34315 2 5 2C6.65685 2 8 3.34315 8 5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M8 19C8 20.6569 6.65685 22 5 22C3.34315 22 2 20.6569 2 19C2 17.3431 3.34315 16 5 16C6.65685 16 8 17.3431 8 19Z"
      fill={props.primaryColor}
    />
    <Path
      d="M22 19C22 20.6569 20.6569 22 19 22C17.3431 22 16 20.6569 16 19C16 17.3431 17.3431 16 19 16C20.6569 16 22 17.3431 22 19Z"
      fill={props.primaryColor}
    />
    <G opacity={0.5}>
      <Path
        d="M16.093 4.25572C16.0626 4.25194 16.0315 4.25 16 4.25H8C7.96849 4.25 7.93744 4.25194 7.90695 4.25572C7.9677 4.49371 8 4.74308 8 5C8 5.25692 7.9677 5.50629 7.90695 5.74428C7.93744 5.74806 7.96849 5.75 8 5.75H16C16.0315 5.75 16.0626 5.74805 16.093 5.74428C16.0323 5.50629 16 5.25692 16 5C16 4.74308 16.0323 4.49371 16.093 4.25572Z"
        fill={props.primaryColor}
      />
      <Path
        d="M19 8C19.2569 8 19.5063 7.96771 19.7443 7.90695C19.7481 7.93744 19.75 7.96849 19.75 8V16C19.75 16.0315 19.7481 16.0626 19.7443 16.0931C19.5063 16.0323 19.2569 16 19 16C18.7431 16 18.4937 16.0323 18.2557 16.0931C18.2519 16.0626 18.25 16.0315 18.25 16V8C18.25 7.96849 18.2519 7.93744 18.2557 7.90695C18.4937 7.96771 18.7431 8 19 8Z"
        fill={props.primaryColor}
      />
      <Path
        d="M16.0931 18.2557C16.0626 18.2519 16.0315 18.25 16 18.25H8C7.96849 18.25 7.93744 18.2519 7.90695 18.2557C7.9677 18.4937 8 18.7431 8 19C8 19.2569 7.9677 19.5063 7.90695 19.7443C7.93744 19.7481 7.96849 19.75 8 19.75H16C16.0315 19.75 16.0626 19.7481 16.0931 19.7443C16.0323 19.5063 16 19.2569 16 19C16 18.7431 16.0323 18.4937 16.0931 18.2557Z"
        fill={props.primaryColor}
      />
      <Path
        d="M5 8C4.74308 8 4.49371 7.9677 4.25572 7.90695C4.25194 7.93744 4.25 7.96849 4.25 8V16C4.25 16.0315 4.25194 16.0626 4.25572 16.093C4.49371 16.0323 4.74308 16 5 16C5.25692 16 5.50629 16.0323 5.74428 16.0931C5.74806 16.0626 5.75 16.0315 5.75 16L5.75 8C5.75 7.96849 5.74806 7.93744 5.74428 7.90695C5.50629 7.9677 5.25692 8 5 8Z"
        fill={props.primaryColor}
      />
    </G>
  </Svg>
);
export default SvgStructure;
