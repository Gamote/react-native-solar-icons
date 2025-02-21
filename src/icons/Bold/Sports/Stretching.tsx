import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStretching = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M17 4.5C17 5.88071 15.8807 7 14.5 7C13.1192 7 12 5.88071 12 4.5C12 3.11929 13.1192 2 14.5 2C15.8807 2 17 3.11929 17 4.5Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5025 9.20673C11.9872 8.57043 13.6388 9.6595 13.6388 11.2748V13.8953C13.6388 14.3654 13.5183 14.8276 13.2888 15.2379L10.5765 20.0861C10.2517 20.6668 9.72723 21.11 9.10049 21.3336L5.25194 22.7064C4.8618 22.8456 4.43272 22.6421 4.29356 22.252C4.15439 21.8618 4.35784 21.4328 4.74798 21.2936L8.59654 19.9208C8.88142 19.8192 9.11979 19.6177 9.26746 19.3537L11.9797 14.5055C12.0841 14.3191 12.1388 14.1089 12.1388 13.8953V11.2748C12.1388 10.7364 11.5883 10.3733 11.0934 10.5854L8.63761 11.6379C8.14618 11.8485 8.02666 12.491 8.40948 12.8643L9.02354 13.463C9.32011 13.7522 9.32612 14.227 9.03696 14.5236C8.7478 14.8202 8.27296 14.8262 7.97639 14.537L7.36233 13.9383C6.21388 12.8186 6.57244 10.8911 8.04673 10.2592L10.5025 9.20673ZM16.5589 14.0535C18.2317 13.7817 19.75 15.0731 19.75 16.7679V22C19.75 22.4142 19.4142 22.75 19 22.75C18.5857 22.75 18.25 22.4142 18.25 22V16.7679C18.25 15.9975 17.5599 15.4105 16.7995 15.5341L15.7869 15.6986C15.3781 15.7651 14.9928 15.4875 14.9263 15.0786C14.8599 14.6698 15.1375 14.2845 15.5463 14.218L16.5589 14.0535Z"
      fill="black"
    />
  </Svg>
);
export default SvgStretching;
