import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPrinter2 = (props: SvgProps) => (
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
      d="M16 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12s0 4.243.879 5.121c.494.495 1.158.711 2.149.806C5 17.204 5 16.352 5 15.5a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1c0 .852 0 1.704-.028 2.427.99-.095 1.655-.311 2.15-.806C22 16.243 22 14.828 22 12s0-4.243-.879-5.121C20.243 6 18.828 6 16 6m-7 4.75a.75.75 0 0 0 0-1.5H6a.75.75 0 0 0 0 1.5zm8 .25a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M17.121 2.879C16.242 2 14.828 2 12 2s-4.243 0-5.122.879c-.492.492-.708 1.153-.804 2.136C6.634 5 7.252 5 7.93 5h8.142c.677 0 1.295 0 1.854.015-.095-.983-.312-1.644-.804-2.136M18 15.5c0 2.828 0 4.743-.879 5.621C16.243 22 14.828 22 12 22s-4.243 0-5.121-.879C6 20.243 6 18.328 6 15.5z"
    />
  </Svg>
);
export default SvgPrinter2;
