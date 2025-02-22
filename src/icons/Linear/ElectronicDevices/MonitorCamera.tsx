import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMonitorCamera = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M12 5C12 3.58579 12 2.87868 12.4393 2.43934C12.8787 2 13.5858 2 15 2H16C17.4142 2 18.1213 2 18.5607 2.43934C19 2.87868 19 3.58579 19 5C19 6.41421 19 7.12132 18.5607 7.56066C18.1213 8 17.4142 8 16 8H15C13.5858 8 12.8787 8 12.4393 7.56066C12 7.12132 12 6.41421 12 5Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M19 3.7499L20.6154 3.07683C21.2416 2.81591 21.5547 2.68545 21.7774 2.83388C22 2.98231 22 3.32151 22 3.9999V5.9999C22 6.6783 22 7.0175 21.7774 7.16593C21.5547 7.31436 21.2416 7.1839 20.6154 6.92298L19 6.2499V3.7499Z"
      stroke={props.primaryColor}
      strokeWidth={1.5}
    />
    <Path
      d="M16 22H8"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M12 17L12 22"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 13H2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M22 10V11C22 13.8284 22 15.2426 21.1213 16.1213C20.2426 17 18.8284 17 16 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11V9.5C2 6.21252 2 4.56878 2.90796 3.46243C3.07418 3.25989 3.25989 3.07418 3.46243 2.90796C4.56878 2 6.21252 2 9.5 2"
      stroke={props.primaryColor}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgMonitorCamera;
