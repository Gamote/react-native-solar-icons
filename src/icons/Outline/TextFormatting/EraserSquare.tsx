import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEraserSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.8883 16.8959C12.3621 17.4222 11.9147 17.8697 11.5096 18.1788C11.078 18.508 10.6076 18.75 10.0318 18.75C9.45604 18.75 8.98563 18.508 8.55411 18.1788C8.149 17.8697 7.70155 17.4222 7.17534 16.8959L7.10407 16.8246C6.57782 16.2984 6.13033 15.851 5.82124 15.4459C5.492 15.0144 5.25 14.544 5.25 13.9682C5.25 13.3924 5.492 12.922 5.82124 12.4904C6.13032 12.0853 6.5778 11.6379 7.10405 11.1117L11.1117 7.10406C11.6379 6.57781 12.0853 6.13032 12.4904 5.82124C12.922 5.492 13.3924 5.25 13.9682 5.25C14.544 5.25 15.0144 5.492 15.4459 5.82124C15.851 6.13032 16.2984 6.57781 16.8246 7.10405L16.8959 7.17534C17.4222 7.70155 17.8697 8.149 18.1788 8.55411C18.508 8.98563 18.75 9.45604 18.75 10.0318C18.75 10.6076 18.508 11.078 18.1788 11.5096C17.8697 11.9147 17.4222 12.3621 16.8959 12.8883L12.8883 16.8959ZM12.1367 8.20037C12.7084 7.6287 13.0849 7.25442 13.4003 7.01378C13.6984 6.78634 13.8522 6.75 13.9682 6.75C14.0841 6.75 14.2379 6.78634 14.536 7.01378C14.8514 7.25442 15.228 7.6287 15.7996 8.20037C16.3713 8.77204 16.7456 9.14858 16.9862 9.46398C17.2137 9.76207 17.25 9.91588 17.25 10.0318C17.25 10.1478 17.2137 10.3016 16.9862 10.5997C16.7456 10.9151 16.3713 11.2916 15.7996 11.8633L13.1809 14.482L9.51797 10.8191L12.1367 8.20037ZM8.45731 11.8798L12.1202 15.5427L11.8633 15.7996C11.2916 16.3713 10.9151 16.7456 10.5997 16.9862C10.3016 17.2137 10.1478 17.25 10.0318 17.25C9.91588 17.25 9.76207 17.2137 9.46398 16.9862C9.14858 16.7456 8.77204 16.3713 8.20037 15.7996C7.6287 15.228 7.25442 14.8514 7.01378 14.536C6.78634 14.2379 6.75 14.0841 6.75 13.9682C6.75 13.8522 6.78634 13.6984 7.01378 13.4003C7.25442 13.0849 7.6287 12.7084 8.20037 12.1367L8.45731 11.8798Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgEraserSquare;
