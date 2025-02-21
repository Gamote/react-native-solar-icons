import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPills = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0103 13.1087L9.51514 13.2041L7.59246 11.2815C5.46918 9.15824 5.46918 5.71573 7.59246 3.59246C9.71573 1.46918 13.1582 1.46918 15.2815 3.59246L17.204 5.51496L17.1085 6.01044L17.1067 6.01901C17.1044 6.02913 17.1002 6.0474 17.0937 6.07334C17.0806 6.12524 17.0581 6.20779 17.0232 6.3172C16.9532 6.53606 16.8335 6.86215 16.6391 7.26544C16.2508 8.07115 15.5633 9.18781 14.3752 10.3759C13.1872 11.5639 12.0706 12.2513 11.265 12.6396C10.8618 12.8339 10.5358 12.9536 10.317 13.0234C10.2076 13.0584 10.125 13.0808 10.0732 13.0939C10.0472 13.1004 10.029 13.1046 10.0189 13.1069L10.0103 13.1087ZM13.5303 4.46967C13.2374 4.17678 12.7626 4.17678 12.4697 4.46967C12.1768 4.76256 12.1768 5.23744 12.4697 5.53033L13.9697 7.03033C14.2626 7.32322 14.7374 7.32322 15.0303 7.03033C15.3232 6.73744 15.3232 6.26256 15.0303 5.96967L13.5303 4.46967Z"
      fill="black"
    />
    <Path
      d="M20.4075 8.71849L18.4546 6.76554L18.452 6.7736C18.3625 7.05391 18.2174 7.44558 17.9904 7.91669C17.5359 8.85977 16.754 10.1185 15.4359 11.4365C14.1178 12.7546 12.8592 13.5364 11.9162 13.9908C11.4452 14.2178 11.0535 14.3629 10.7732 14.4524L10.7658 14.4547L12.7185 16.4075C14.8418 18.5308 18.2843 18.5308 20.4075 16.4075C22.5308 14.2843 22.5308 10.8418 20.4075 8.71849Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M6.71656 10.1376C6.951 10.5468 7.24297 10.932 7.59245 11.2815L12.7185 16.4075C13.068 16.757 13.4532 17.049 13.8624 17.2834C13.6136 18.4252 13.0397 19.4455 12.2426 20.2426C11.1569 21.3284 9.65685 22 8 22C4.68629 22 2 19.3137 2 16C2 14.3431 2.67157 12.8431 3.75736 11.7574C4.55447 10.9602 5.57481 10.3864 6.71656 10.1376Z"
      fill="black"
    />
  </Svg>
);
export default SvgPills;
