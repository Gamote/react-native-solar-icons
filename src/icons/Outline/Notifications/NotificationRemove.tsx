import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNotificationRemove = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17.5303 1.46967C17.2374 1.17678 16.7626 1.17678 16.4697 1.46967C16.1768 1.76256 16.1768 2.23744 16.4697 2.53033L18.4394 4.50001L16.4697 6.46967C16.1768 6.76256 16.1768 7.23744 16.4697 7.53033C16.7626 7.82322 17.2375 7.82322 17.5304 7.53033L19.5 5.56067L21.4696 7.53031C21.7625 7.8232 22.2374 7.8232 22.5303 7.53031C22.8232 7.23742 22.8232 6.76254 22.5303 6.46965L20.5607 4.50001L22.5303 2.53035C22.8232 2.23746 22.8232 1.76258 22.5303 1.46969C22.2374 1.1768 21.7626 1.1768 21.4697 1.46969L19.5 3.43935L17.5303 1.46967Z"
      fill={props.primaryColor}
    />
    <Path
      d="M11.9426 1.25002C9.63423 1.25001 7.82519 1.25 6.41371 1.43977C4.96897 1.63401 3.82895 2.03935 2.93414 2.93416C2.03933 3.82897 1.63399 4.96899 1.43975 6.41373C1.24998 7.82521 1.24999 9.63425 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.0311 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.0311 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V10.5C22.75 10.0858 22.4142 9.75002 22 9.75002C21.5858 9.75002 21.25 10.0858 21.25 10.5V12C21.25 14.3782 21.2484 16.0865 21.0736 17.3864C20.9018 18.6648 20.5749 19.4356 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0737C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0737C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4356 3.09825 18.6648 2.92637 17.3864C2.75159 16.0865 2.75 14.3782 2.75 12C2.75 9.6218 2.75159 7.91358 2.92637 6.6136C3.09825 5.33519 3.42514 4.56447 3.9948 3.99482C4.56445 3.42516 5.33517 3.09827 6.61358 2.92639C7.91356 2.75161 9.62178 2.75002 12 2.75002H13.5C13.9142 2.75002 14.25 2.41423 14.25 2.00002C14.25 1.58581 13.9142 1.25002 13.5 1.25002L11.9426 1.25002Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgNotificationRemove;
