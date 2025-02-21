import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTeaCup = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.2509 11.8809C2.2404 12.057 2.26536 12.2706 2.3153 12.6978L2.71598 16.1258C2.89681 17.6729 3.72352 19.0714 4.99182 19.9757C5.9263 20.6419 7.04537 21 8.19303 21H11.8069C12.9546 21 14.0736 20.6419 15.0081 19.9757C15.8116 19.4028 16.4378 18.6317 16.8349 17.75H19C21.0711 17.75 22.75 16.0711 22.75 14C22.75 11.9289 21.0711 10.25 19 10.25H16.7212C16.5325 10.1455 16.3244 10.0703 16.1027 10.0309C15.929 10 15.7139 10 15.2838 10H4.71612C4.286 10 4.07094 10 3.89725 10.0309C2.98677 10.1928 2.30599 10.9577 2.2509 11.8809ZM17.7369 11.75C17.7424 11.7932 17.7464 11.8369 17.749 11.8809C17.7595 12.057 17.7346 12.2706 17.6847 12.6977L17.284 16.1258C17.2791 16.1673 17.2738 16.2087 17.268 16.25H19C20.2426 16.25 21.25 15.2426 21.25 14C21.25 12.7574 20.2426 11.75 19 11.75H17.7369Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5305 1.46967C10.8234 1.76256 10.8234 2.23744 10.5305 2.53033C10.2711 2.78972 10.2711 3.21028 10.5305 3.46967C11.3757 4.31485 11.3757 5.68515 10.5305 6.53033C10.2376 6.82322 9.76271 6.82322 9.46982 6.53033C9.17693 6.23744 9.17693 5.76256 9.46982 5.46967C9.72921 5.21028 9.72921 4.78972 9.46982 4.53033C8.62464 3.68515 8.62464 2.31485 9.46982 1.46967C9.76271 1.17678 10.2376 1.17678 10.5305 1.46967Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.03033 2.96967C6.32322 3.26256 6.32322 3.73744 6.03033 4.03033L5.91421 4.14645C5.67096 4.3897 5.6436 4.77479 5.85 5.05C6.50429 5.92239 6.41753 7.14313 5.64645 7.91421L5.53033 8.03033C5.23744 8.32322 4.76256 8.32322 4.46967 8.03033C4.17678 7.73744 4.17678 7.26256 4.46967 6.96967L4.58579 6.85355C4.82904 6.6103 4.8564 6.22521 4.65 5.95C3.99571 5.07761 4.08247 3.85687 4.85355 3.08579L4.96967 2.96967C5.26256 2.67678 5.73744 2.67678 6.03033 2.96967Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5303 2.96967C15.8232 3.26256 15.8232 3.73744 15.5303 4.03033L15.4142 4.14645C15.171 4.3897 15.1436 4.77479 15.35 5.05C16.0043 5.92239 15.9175 7.14313 15.1464 7.91421L15.0303 8.03033C14.7374 8.32322 14.2626 8.32322 13.9697 8.03033C13.6768 7.73744 13.6768 7.26256 13.9697 6.96967L14.0858 6.85355C14.329 6.6103 14.3564 6.22521 14.15 5.95C13.4957 5.07761 13.5825 3.85687 14.3536 3.08579L14.4697 2.96967C14.7626 2.67678 15.2374 2.67678 15.5303 2.96967Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTeaCup;
