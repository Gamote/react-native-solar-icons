import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlayStream = (props: SvgProps) => (
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
      d="M5.467 4.392a.75.75 0 0 1-.001 1.06A9.22 9.22 0 0 0 2.75 12a9.22 9.22 0 0 0 2.775 6.606.75.75 0 1 1-1.05 1.071A10.72 10.72 0 0 1 1.25 12c0-2.972 1.207-5.664 3.156-7.609a.75.75 0 0 1 1.06.001m13.15.072a.75.75 0 0 1 1.06.011A10.72 10.72 0 0 1 22.75 12c0 2.964-1.2 5.65-3.141 7.594a.75.75 0 1 1-1.062-1.06A9.22 9.22 0 0 0 21.25 12a9.22 9.22 0 0 0-2.644-6.475.75.75 0 0 1 .01-1.06M8.308 7.488a.75.75 0 0 1-.035 1.06c-.949.888-1.524 2.102-1.524 3.434 0 1.348.589 2.575 1.558 3.466a.75.75 0 1 1-1.016 1.104c-1.252-1.151-2.042-2.77-2.042-4.57 0-1.779.771-3.38 2-4.53a.75.75 0 0 1 1.06.036m7.434.038a.75.75 0 0 1 1.06-.024c1.197 1.145 1.947 2.727 1.947 4.48 0 1.775-.767 3.373-1.99 4.521a.75.75 0 1 1-1.027-1.093c.945-.887 1.517-2.1 1.517-3.428 0-1.313-.559-2.512-1.484-3.396a.75.75 0 0 1-.023-1.06m-3.15 1.362.052.03a13 13 0 0 1 .694.404c.245.155.505.337.761.525q.023.016.046.033c.408.3.79.58 1.06.864.314.328.544.727.544 1.256 0 .53-.23.928-.543 1.257-.27.283-.653.563-1.061.863a18 18 0 0 1-.807.558c-.215.136-.453.273-.694.405l-.053.029c-.4.22-.79.432-1.132.543-.409.132-.882.161-1.336-.146-.428-.289-.604-.717-.692-1.125-.08-.373-.11-.845-.143-1.367l-.004-.052c-.021-.33-.035-.662-.035-.965s.014-.634.035-.965l.004-.052c.033-.522.063-.994.143-1.367.088-.408.264-.836.692-1.125.454-.307.927-.278 1.336-.146.342.11.732.324 1.132.543m-1.642.87a1 1 0 0 0-.052.174c-.054.25-.079.608-.117 1.2-.02.31-.032.608-.032.868s.012.558.032.869c.038.59.063.95.117 1.199a1 1 0 0 0 .052.174l.048-.014c.19-.062.451-.201.926-.46a12 12 0 0 0 .613-.358c.205-.13.436-.29.675-.466.47-.345.74-.547.908-.723.13-.135.13-.184.129-.217v-.008c0-.033 0-.082-.129-.217-.167-.175-.438-.378-.909-.723a12 12 0 0 0-.674-.466c-.18-.114-.39-.235-.613-.357-.475-.26-.736-.4-.926-.46z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlayStream;
