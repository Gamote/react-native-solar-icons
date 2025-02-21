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
      fill="#000"
      d="m13.157 17.012 3.856-3.856c1.454-1.454 2.18-2.18 2.18-3.084 0-.605-.326-1.132-.978-1.85-.322-.354-.723-.755-1.202-1.235-.48-.48-.881-.88-1.235-1.202-.719-.652-1.245-.979-1.85-.979-.904 0-1.63.727-3.085 2.181l-3.855 3.856c-1.455 1.454-2.182 2.181-2.182 3.085 0 .605.327 1.131.98 1.85.321.354.722.754 1.202 1.234s.88.88 1.234 1.202c.719.653 1.245.98 1.85.98.904 0 1.63-.728 3.085-2.182M21.066 2.562c.041.037.09.086.188.184s.147.147.184.188a2.18 2.18 0 0 1-.262 3.17c-.044.034-.1.074-.213.155l-1.52 1.086-.118-.132c-.346-.38-.768-.803-1.232-1.266l-.04-.04a39 39 0 0 0-1.267-1.232l-.13-.118 1.085-1.52c.08-.113.12-.169.155-.213a2.18 2.18 0 0 1 3.17-.262M4.557 16.655l.118.131c.346.381.768.803 1.231 1.267l.041.04c.463.464.886.886 1.266 1.232l.132.118-1.086 1.52c-.08.113-.12.169-.156.213a2.18 2.18 0 0 1-3.169.262 6 6 0 0 1-.188-.184c-.098-.098-.147-.147-.184-.188a2.18 2.18 0 0 1 .262-3.17c.044-.034.1-.075.213-.155z"
    />
  </Svg>
);
export default SvgRollingPin;
