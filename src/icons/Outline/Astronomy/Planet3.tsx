import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlanet3 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.19225 9.16589C2.90508 10.059 2.75 11.0114 2.75 12C2.75 12.4327 2.77972 12.8585 2.83722 13.2755C2.87405 13.2673 2.91197 13.2619 2.95077 13.2593L2.99998 14.0075C2.95077 13.2593 2.95056 13.2593 2.95077 13.2593L2.95265 13.2592L2.95529 13.259L2.96288 13.2586L2.98712 13.2573C3.00726 13.2563 3.03532 13.2551 3.07097 13.2539C3.14227 13.2516 3.24395 13.2496 3.37334 13.2501C3.63204 13.2511 4.00196 13.2624 4.46148 13.3025C5.37989 13.3827 6.66049 13.5785 8.12832 14.0403C8.57895 14.1821 9.02716 14.4137 9.45535 14.6459C9.55492 14.6998 9.65408 14.7542 9.75365 14.8089C10.1001 14.9989 10.4512 15.1916 10.8406 15.3783C11.8205 15.8482 12.9853 16.25 14.5093 16.25C17.3331 16.25 19.5635 15.1904 20.8698 14.3658C20.8982 14.3479 20.9274 14.3321 20.9571 14.3184C21.1483 13.5775 21.25 12.8006 21.25 12C21.25 10.8563 21.0424 9.76116 20.663 8.75006C20.4635 8.75094 20.166 8.7605 19.7896 8.79631C19.0359 8.86802 17.97 9.04465 16.7432 9.46521C16.48 9.55543 16.1799 9.71766 15.7851 9.9509C15.7057 9.99778 15.6228 10.0474 15.5365 10.099C15.2143 10.2916 14.8463 10.5117 14.4491 10.7193C13.4191 11.2575 12.1264 11.75 10.4372 11.75C8.01909 11.75 6.03061 10.9463 4.65632 10.1535C4.04759 9.80234 3.55463 9.45069 3.19225 9.16589ZM3.79689 7.72138C3.85576 7.77225 3.92418 7.82985 4.00185 7.89288C4.32232 8.15296 4.7975 8.50325 5.40584 8.85418C6.62514 9.55754 8.35524 10.25 10.4372 10.25C11.8108 10.25 12.8623 9.85594 13.7544 9.3898C14.1095 9.20426 14.4293 9.01313 14.7469 8.82329C14.8386 8.76851 14.93 8.71383 15.0221 8.65943C15.4144 8.42772 15.8328 8.19163 16.2568 8.04628C17.6129 7.58138 18.797 7.38399 19.6475 7.30305C19.7556 7.29277 19.8583 7.28437 19.9553 7.27753C18.3426 4.56654 15.3834 2.75 12 2.75C8.43509 2.75 5.34119 4.76665 3.79689 7.72138ZM20.0853 16.4969C18.6481 17.1634 16.748 17.75 14.5093 17.75C12.6961 17.75 11.3066 17.2653 10.1921 16.7308C9.76182 16.5245 9.36367 16.306 9.01277 16.1134C8.91847 16.0617 8.82758 16.0118 8.7404 15.9645C8.31101 15.7317 7.97624 15.565 7.67813 15.4712C6.33161 15.0475 5.16061 14.8693 4.33098 14.7968C3.91649 14.7606 3.5883 14.7509 3.36738 14.7501C3.28497 14.7497 3.21755 14.7506 3.16623 14.7518C4.33775 18.5166 7.84967 21.25 12 21.25C15.4764 21.25 18.505 19.3322 20.0853 16.4969ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgPlanet3;
