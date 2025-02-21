import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVinyl = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M11.6311 10.4879C12.67 10.4879 13.5122 11.3301 13.5122 12.3689C13.5122 13.4078 12.67 14.25 11.6311 14.25C10.5922 14.25 9.75 13.4078 9.75 12.3689C9.75 11.3301 10.5922 10.4879 11.6311 10.4879Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM14.487 3.28447C14.2592 3.21292 14.0109 3.25412 13.8184 3.39542C13.6259 3.53672 13.5122 3.76123 13.5122 4.00001V9.55906C12.9744 9.19832 12.3274 8.98789 11.6311 8.98789C9.76379 8.98789 8.25 10.5016 8.25 12.3689C8.25 14.2363 9.76379 15.75 11.6311 15.75C13.4984 15.75 15.0122 14.2363 15.0122 12.3689V5.0937C17.0389 6.03733 18.6064 7.80369 19.2845 9.96238C19.4086 10.3576 19.8296 10.5773 20.2247 10.4532C20.6199 10.3291 20.8397 9.90808 20.7155 9.5129C19.7853 6.55129 17.4486 4.21465 14.487 3.28447Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgVinyl;
