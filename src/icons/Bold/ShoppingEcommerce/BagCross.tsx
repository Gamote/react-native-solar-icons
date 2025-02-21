import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBagCross = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.25014 6.01489C8.25005 6.00994 8.25 6.00498 8.25 6V5C8.25 2.92893 9.92893 1.25 12 1.25C14.0711 1.25 15.75 2.92893 15.75 5V6C15.75 6.00498 15.75 6.00994 15.7499 6.0149C17.0371 6.05353 17.8248 6.1924 18.4261 6.69147C19.2593 7.38295 19.4787 8.55339 19.9177 10.8943L20.6677 14.8943C21.2849 18.186 21.5934 19.8318 20.6937 20.9159C19.794 22 18.1195 22 14.7704 22H9.22954C5.88048 22 4.20595 22 3.30624 20.9159C2.40652 19.8318 2.71512 18.186 3.33231 14.8943L4.08231 10.8943C4.52122 8.55339 4.74068 7.38295 5.57386 6.69147C6.17521 6.19239 6.96288 6.05353 8.25014 6.01489ZM9.75 5C9.75 3.75736 10.7574 2.75 12 2.75C13.2426 2.75 14.25 3.75736 14.25 5V6C14.25 6.00001 14.25 5.99999 14.25 6C14.1747 5.99998 14.0982 6 14.0204 6H9.97954C9.90177 6 9.82526 6 9.75 6.00002C9.75 6.00002 9.75 6.00003 9.75 6.00002V5ZM8.46965 10.4697C8.76255 10.1768 9.23742 10.1768 9.53031 10.4697L12 12.9394L14.4697 10.4697C14.7625 10.1768 15.2374 10.1768 15.5303 10.4697C15.8232 10.7626 15.8232 11.2375 15.5303 11.5304L13.0607 14L15.5303 16.4696C15.8232 16.7625 15.8232 17.2374 15.5303 17.5303C15.2374 17.8232 14.7625 17.8232 14.4696 17.5303L12 15.0607L9.53034 17.5303C9.23745 17.8232 8.76257 17.8232 8.46968 17.5303C8.17679 17.2374 8.17679 16.7626 8.46968 16.4697L10.9393 14L8.46965 11.5303C8.17676 11.2374 8.17676 10.7626 8.46965 10.4697Z"
      fill="black"
    />
  </Svg>
);
export default SvgBagCross;
