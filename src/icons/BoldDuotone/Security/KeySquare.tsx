import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgKeySquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 9.77606C18 11.8615 16.3025 13.5521 14.2084 13.5521C13.8264 13.5521 12.9564 13.4643 12.5331 13.113L12.004 13.64C11.693 13.9498 11.777 14.041 11.9153 14.1912C11.9731 14.2539 12.0403 14.3269 12.0922 14.4303C12.0922 14.4303 12.5331 15.045 12.0922 15.6597C11.8277 16.011 11.087 16.5027 10.2405 15.6597L10.0642 15.8353C10.0642 15.8353 10.5932 16.45 10.1523 17.0647C9.88782 17.416 9.18242 17.7673 8.56519 17.1526L7.94796 17.7673C7.52471 18.1888 7.00743 17.9429 6.8017 17.7673L6.27264 17.2404C5.77886 16.7486 6.0669 16.2159 6.27264 16.011L10.8578 11.4446C10.8578 11.4446 10.4169 10.742 10.4169 9.77606C10.4169 7.6906 12.1144 6 14.2084 6C16.3025 6 18 7.6906 18 9.77606ZM14.2084 11.0932C14.9388 11.0932 15.531 10.5035 15.531 9.77597C15.531 9.04848 14.9388 8.45874 14.2084 8.45874C13.4779 8.45874 12.8857 9.04848 12.8857 9.77597C12.8857 10.5035 13.4779 11.0932 14.2084 11.0932Z"
      fill="black"
    />
  </Svg>
);
export default SvgKeySquare;
