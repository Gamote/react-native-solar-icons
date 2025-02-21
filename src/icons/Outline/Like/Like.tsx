import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLike = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12.438 2.778a.6.6 0 0 0-.438.03.52.52 0 0 0-.28.33l-.476 1.834a8.4 8.4 0 0 1-.72 1.844c-.485.907-1.218 1.604-1.898 2.19l-1.438 1.24a.92.92 0 0 0-.315.774l.812 9.393a.916.916 0 0 0 .911.837h4.649c3.136 0 5.779-2.182 6.286-5.113l.705-4.08a.916.916 0 0 0-.901-1.073h-5.181c-.977 0-1.72-.876-1.562-1.84l.663-4.044a4 4 0 0 0-.076-1.664.89.89 0 0 0-.596-.611zl.23-.714zm-1.09-1.321a2.1 2.1 0 0 1 1.549-.107l.145.047-.23.714.23-.714c.777.25 1.383.87 1.589 1.662.193.746.229 1.524.104 2.284l-.663 4.044a.083.083 0 0 0 .082.097h5.18c1.5 0 2.636 1.352 2.38 2.829l-.705 4.08c-.638 3.688-3.938 6.357-7.764 6.357H8.596a2.416 2.416 0 0 1-2.405-2.208l-.813-9.393a2.42 2.42 0 0 1 .83-2.04l1.44-1.24c.655-.564 1.206-1.111 1.552-1.76.257-.48.456-.988.592-1.514l.476-1.833a2.01 2.01 0 0 1 1.08-1.305m-8.38 8.028a.75.75 0 0 1 .78.685l.97 11.236a1.237 1.237 0 1 1-2.468.107V10.234a.75.75 0 0 1 .718-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLike;
