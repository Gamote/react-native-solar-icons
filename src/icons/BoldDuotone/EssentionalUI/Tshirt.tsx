import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTshirt = (props: SvgProps) => (
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
      d="M5.777 18.265v-7.97c0-.683 0-1.025-.132-1.326-.131-.3-.378-.523-.871-.968l-.186-.167C3.532 6.882 3.004 6.405 3 5.716c-.004-.69.464-1.122 1.401-1.988q.214-.197.418-.362c.472-.378 1.138-.792 1.648-1.09a2.05 2.05 0 0 1 1.567-.205l.49.129c.389.102.727.353.949.703.6.948 1.564 1.423 2.527 1.423V22c-1.467 0-2.724-.148-3.716-.33-1.073-.198-1.61-.296-2.058-.858-.45-.562-.45-1.224-.45-2.547"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M18.223 18.265v-7.97c0-.683 0-1.025.132-1.326.131-.3.378-.523.871-.968l.186-.167c1.056-.952 1.584-1.429 1.588-2.118.004-.69-.465-1.122-1.401-1.988a8 8 0 0 0-.418-.362c-.472-.378-1.138-.792-1.648-1.09a2.05 2.05 0 0 0-1.567-.205l-.49.129a1.6 1.6 0 0 0-.949.703c-.6.948-1.564 1.423-2.527 1.423V22c1.467 0 2.724-.148 3.716-.33 1.073-.198 1.61-.296 2.059-.858.448-.562.448-1.224.448-2.547"
      opacity={0.5}
    />
  </Svg>
);
export default SvgTshirt;
