import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlipVertical = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M5.88638 2L18.1136 2C19.8158 2 20.6668 2 20.946 2.54242C21.2251 3.08484 20.7304 3.77738 19.7411 5.16247L18.6116 6.74372C18.1717 7.35957 17.9518 7.6675 17.6287 7.83375C17.3057 8 16.9273 8 16.1704 8L7.82956 8C7.07273 8 6.69432 8 6.37127 7.83375C6.04821 7.6675 5.82826 7.35957 5.38836 6.74372L4.25891 5.16248C3.26956 3.77738 2.77488 3.08484 3.05402 2.54242C3.33316 2 4.18423 2 5.88638 2Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M5.88638 22L18.1136 22C19.8158 22 20.6668 22 20.946 21.4576C21.2251 20.9152 20.7304 20.2226 19.7411 18.8375L18.6116 17.2563C18.1717 16.6404 17.9518 16.3325 17.6287 16.1662C17.3057 16 16.9273 16 16.1704 16L7.82957 16C7.07273 16 6.69432 16 6.37127 16.1662C6.04821 16.3325 5.82826 16.6404 5.38837 17.2563L4.25891 18.8375C3.26956 20.2226 2.77488 20.9152 3.05402 21.4576C3.33316 22 4.18423 22 5.88638 22Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M10 12L14 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 12L22 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2 12L6 12"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgFlipVertical;
