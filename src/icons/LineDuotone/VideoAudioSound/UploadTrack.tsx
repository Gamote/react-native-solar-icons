import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUploadTrack = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 15C12 16.1046 11.1046 17 10 17C8.89543 17 8 16.1046 8 15C8 13.8954 8.89543 13 10 13C11.1046 13 12 13.8954 12 15Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path d="M12 15V9" stroke={props.primaryColor} strokeWidth={1.5} />
    <Path
      d="M14.0584 11.0294L12.7416 10.371C12.5592 10.2798 12.468 10.2342 12.3926 10.1765C12.1974 10.0273 12.064 9.81145 12.0178 9.57014C12 9.47699 12 9.37499 12 9.171C12 8.68545 12 8.44268 12.0598 8.27764C12.2178 7.84144 12.6551 7.57119 13.1159 7.62495C13.2902 7.64528 13.5074 7.75385 13.9416 7.971L15.2584 8.62936C15.4408 8.72058 15.532 8.7662 15.6074 8.82381C15.8026 8.97304 15.936 9.1889 15.9822 9.43021C16 9.52337 16 9.62536 16 9.82936C16 10.3149 16 10.5577 15.9402 10.7227C15.7822 11.1589 15.3449 11.4292 14.8841 11.3754C14.7098 11.3551 14.4926 11.2465 14.0584 11.0294Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M18 22V15M18 15L20.5 17.5M18 15L15.5 17.5"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle
      opacity={0.5}
      cx={12}
      cy={12}
      r={10}
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgUploadTrack;
