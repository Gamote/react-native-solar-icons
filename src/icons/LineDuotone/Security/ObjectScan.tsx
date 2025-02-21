import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgObjectScan = (props: SvgProps) => (
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
      d="M22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22M10 22c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14M10 2C6.229 2 4.343 2 3.172 3.172S2 6.229 2 10M14 2c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M4 11.5s2.4-2 8-2 8 2 8 2"
    />
    <Path
      fill="#000"
      d="M5.25 10a.75.75 0 0 0 1.5 0zm12.164-3.914-.53.53zM10 6.25h4v-1.5h-4zM6.75 10v-.5h-1.5v.5zm10.5-.5v.5h1.5v-.5zM14 6.25c.964 0 1.612.002 2.095.067.461.062.659.169.789.3l1.06-1.062c-.455-.455-1.022-.64-1.65-.725-.606-.082-1.372-.08-2.294-.08zm4.75 3.25c0-.922.002-1.688-.08-2.294-.084-.628-.27-1.195-.726-1.65l-1.06 1.06c.13.13.237.328.3.79.064.482.066 1.13.066 2.094zM10 4.75c-.922 0-1.688-.002-2.294.08-.628.084-1.195.27-1.65.725l1.06 1.061c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066zM6.75 9.5c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789l-1.062-1.06c-.455.455-.64 1.022-.725 1.65-.082.606-.08 1.372-.08 2.294z"
      opacity={0.7}
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M18 10.5v4c0 1.886 0 2.828-.586 3.414S15.886 18.5 14 18.5h-4c-1.886 0-2.828 0-3.414-.586S6 16.386 6 14.5V10"
      opacity={0.7}
    />
  </Svg>
);
export default SvgObjectScan;
