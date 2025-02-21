import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStickerCircle = (props: SvgProps) => (
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
      d="M12 2.75a9.25 9.25 0 0 0-.75 18.47c.002-2.257.034-3.633.435-4.78a7.75 7.75 0 0 1 4.755-4.755c1.147-.401 2.523-.433 4.78-.435A9.25 9.25 0 0 0 12 2.75m9.04 10.001c-2.188.006-3.249.05-4.104.35a6.25 6.25 0 0 0-3.835 3.835c-.3.855-.344 1.916-.35 4.104q.226-.128.427-.328l7.534-7.534q.2-.2.328-.427M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12c0 .884-.408 1.669-.977 2.239l-7.534 7.534c-.57.57-1.355.977-2.239.977-5.937 0-10.75-4.813-10.75-10.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStickerCircle;
