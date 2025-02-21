import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRollingPin = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m8.222 18.215-1.963 2.748c-.08.113-.12.169-.156.213a2.18 2.18 0 0 1-3.169.262 6 6 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.18 2.18 0 0 1 .262-3.17c.044-.034.1-.075.213-.155l2.748-1.963m2.437 2.437a38 38 0 0 1-1.234-1.203c-.48-.48-.881-.88-1.203-1.234m2.437 2.437c.719.652 1.245.979 1.85.979.904 0 1.63-.727 3.085-2.181l3.855-3.856c1.455-1.454 2.182-2.181 2.182-3.085 0-.605-.327-1.131-.98-1.85M5.786 15.778c-.652-.719-.979-1.245-.979-1.85 0-.904.727-1.63 2.182-3.085l3.855-3.855c1.454-1.455 2.181-2.182 3.085-2.182.605 0 1.131.327 1.85.98m2.437 2.436 2.748-1.963c.113-.08.169-.12.213-.156a2.18 2.18 0 0 0 .262-3.169 6 6 0 0 0-.184-.188c-.098-.098-.147-.147-.188-.184a2.18 2.18 0 0 0-3.17.262 6 6 0 0 0-.155.213l-1.963 2.748m2.437 2.437a38 38 0 0 0-1.203-1.234c-.48-.48-.88-.881-1.234-1.203"
    />
  </Svg>
);
export default SvgRollingPin;
