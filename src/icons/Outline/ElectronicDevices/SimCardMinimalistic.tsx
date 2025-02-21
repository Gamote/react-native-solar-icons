import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSimCardMinimalistic = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.6206 2.76232C12.4868 2.75064 12.3532 2.75 12 2.75C9.62178 2.75 7.91356 2.7516 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33518 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 11.6468 21.2494 11.5132 21.2377 11.3794C21.1804 10.7235 20.9125 10.0768 20.4892 9.57254C20.403 9.46978 20.3063 9.37221 20.0502 9.11611L14.8839 3.94977C14.6278 3.69368 14.5302 3.59701 14.4275 3.51076C13.9232 3.08746 13.2765 2.81957 12.6206 2.76232ZM12.0315 1.25C12.3431 1.24998 12.5445 1.24997 12.751 1.268C13.7138 1.35204 14.6517 1.74054 15.3919 2.36187C15.5507 2.49517 15.696 2.64055 15.9213 2.86587L15.9446 2.88911L21.1341 8.07862C21.3594 8.30396 21.5048 8.44933 21.6381 8.60814C22.2595 9.34833 22.648 10.2862 22.732 11.249C22.75 11.4555 22.75 11.6569 22.75 11.9684V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25L12.0315 1.25ZM9.42673 12.25C9.45081 12.25 9.47523 12.25 9.5 12.25H14.5C14.5248 12.25 14.5492 12.25 14.5733 12.25C14.966 12.2498 15.269 12.2496 15.5365 12.3028C16.6274 12.5198 17.4802 13.3726 17.6972 14.4635C17.7504 14.731 17.7502 15.034 17.75 15.4267C17.75 15.4508 17.75 15.4752 17.75 15.5C17.75 15.5248 17.75 15.5492 17.75 15.5733C17.7502 15.966 17.7504 16.269 17.6972 16.5365C17.4802 17.6274 16.6274 18.4802 15.5365 18.6972C15.269 18.7504 14.966 18.7502 14.5733 18.75C14.5492 18.75 14.5248 18.75 14.5 18.75H9.5C9.47522 18.75 9.4508 18.75 9.42671 18.75C9.03399 18.7502 8.731 18.7504 8.4635 18.6972C7.3726 18.4802 6.51983 17.6274 6.30284 16.5365C6.24963 16.269 6.24978 15.966 6.24998 15.5733C6.24999 15.5492 6.25 15.5248 6.25 15.5C6.25 15.4752 6.24999 15.4508 6.24998 15.4267C6.24978 15.034 6.24963 14.731 6.30284 14.4635C6.51983 13.3726 7.3726 12.5198 8.4635 12.3028C8.73101 12.2496 9.034 12.2498 9.42673 12.25ZM9.5 13.75C8.9994 13.75 8.85862 13.7536 8.75614 13.774C8.26027 13.8727 7.87265 14.2603 7.77402 14.7561C7.75363 14.8586 7.75 14.9994 7.75 15.5C7.75 16.0006 7.75363 16.1414 7.77402 16.2439C7.87265 16.7397 8.26027 17.1274 8.75614 17.226C8.85862 17.2464 8.9994 17.25 9.5 17.25H14.5C15.0006 17.25 15.1414 17.2464 15.2439 17.226C15.7397 17.1274 16.1273 16.7397 16.226 16.2439C16.2464 16.1414 16.25 16.0006 16.25 15.5C16.25 14.9994 16.2464 14.8586 16.226 14.7561C16.1273 14.2603 15.7397 13.8727 15.2439 13.774C15.1414 13.7536 15.0006 13.75 14.5 13.75H9.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgSimCardMinimalistic;
