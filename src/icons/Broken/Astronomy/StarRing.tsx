import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarRing = (props: SvgProps) => (
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
      strokeWidth={1.5}
      d="M13.673 15.684c.673 1.066 1.01 1.6.78 2.035s-.872.487-2.158.587l-.333.026c-.365.029-.548.043-.708.127s-.278.228-.515.516l-.216.263c-.836 1.014-1.254 1.522-1.73 1.456-.476-.065-.696-.66-1.135-1.848l-.114-.308c-.125-.338-.187-.507-.31-.63-.123-.122-.292-.185-.63-.31l-.307-.113c-1.19-.44-1.784-.66-1.849-1.136s.442-.894 1.457-1.73l.262-.215c.288-.238.433-.356.517-.516s.098-.342.126-.708l.026-.333c.1-1.286.15-1.929.587-2.158.436-.23.97.107 2.036.78l.276.174c.303.191.454.287.629.31.174.025.352-.026.707-.127l.324-.092c1.251-.355 1.877-.533 2.212-.198.335.334.157.96-.199 2.211M21.83 19.982c-.49 1.044-1.97 1.259-3.981.763m3.98-.763c.533-1.136-.21-3.029-1.829-5.13m1.83 5.13c-.631 1.344-2.897 1.314-5.83.166m5.83-.166c.868-1.852-1.656-5.713-5.83-9.21M2.17 6.018c-.532 1.136.211 3.028 1.83 5.129m-1.83-5.13c.49-1.044 1.97-1.258 3.981-.763m-3.98.764c-.707 1.506.83 4.341 3.675 7.229M2.17 6.017C3.079 4.083 7.385 4.999 12.186 8M18.895 3.395c.099.924.486 1.79 1.105 2.47m-1.105-2.47c-.93.767-1.23.909-2.402 1.135m2.402-1.135L19.204 3m-1.607 4a4.35 4.35 0 0 0-1.105-2.47m0 0L16 4.514"
    />
  </Svg>
);
export default SvgStarRing;
