import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1.25C6.41239 1.25 4.97386 1.89441 3.93414 2.93414C2.89441 3.97386 2.25 5.41239 2.25 7C2.25 10.1756 4.82436 12.75 8 12.75C9.58761 12.75 11.0261 12.1056 12.0659 11.0659C13.1056 10.0261 13.75 8.58761 13.75 7C13.75 3.82436 11.1756 1.25 8 1.25ZM11.4887 9.42805L5.57195 3.51129C6.26041 3.03106 7.09696 2.75 8 2.75C10.3472 2.75 12.25 4.65279 12.25 7C12.25 7.90304 11.9689 8.73959 11.4887 9.42805ZM4.51129 4.57195L10.428 10.4887C9.73959 10.9689 8.90304 11.25 8 11.25C5.65279 11.25 3.75 9.34721 3.75 7C3.75 6.09696 4.03106 5.26041 4.51129 4.57195Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.0659 12.9341C18.8203 10.6886 15.1797 10.6886 12.9341 12.9341C11.8115 14.0567 11.25 15.5296 11.25 17C11.25 18.4704 11.8115 19.9433 12.9341 21.0659C15.1797 23.3114 18.8203 23.3114 21.0659 21.0659C22.1885 19.9433 22.75 18.4704 22.75 17C22.75 15.5296 22.1885 14.0567 21.0659 12.9341ZM13.9948 13.9948C15.6545 12.3351 18.3455 12.3351 20.0052 13.9948C20.6437 14.6333 21.0365 15.4236 21.1838 16.25H12.8162C12.9635 15.4236 13.3563 14.6333 13.9948 13.9948ZM12.8162 17.75H21.1838C21.0365 18.5764 20.6437 19.3667 20.0052 20.0052C18.3455 21.6649 15.6545 21.6649 13.9948 20.0052C13.3563 19.3667 12.9635 18.5764 12.8162 17.75Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPills2;
