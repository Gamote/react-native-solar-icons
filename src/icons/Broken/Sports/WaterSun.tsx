import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWaterSun = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M22 16.772c-1.588-.374-2.404-1.293-3.08-2.315-.424-.64-1.355-.602-1.815.013C16.055 15.876 14.485 17 12 17c-2.507 0-4.082-1.43-5.133-2.777-.44-.562-1.28-.554-1.665.047C4.5 15.366 3.684 16.375 2 16.772"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M17.917 11a6.002 6.002 0 0 0-11.834 0M12 2v1M22 12h-1M3 12H2M19.07 4.93l-.393.392M5.322 5.322l-.393-.393"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 22c-2.507 0-4.082-1.345-5.133-2.611-.44-.53-1.28-.522-1.665.043-.701 1.03-1.518 1.98-3.202 2.354m20 0c-1.588-.352-2.404-1.216-3.08-2.178-.424-.602-1.355-.566-1.815.013-.41.516-.899.99-1.49 1.379"
    />
  </Svg>
);
export default SvgWaterSun;
