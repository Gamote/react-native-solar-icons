import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSmartSpeakerMinimalistic = (props: SvgProps) => (
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
      d="M7.24 2.461A4.83 4.83 0 0 0 3.32 6.658l-.016.137a47 47 0 0 0 0 10.69A4.714 4.714 0 0 0 7.41 21.62l1.016.126c.495.062.742.093.99.118 1.717.18 3.45.18 5.169 0 .247-.025.494-.056.989-.118l.906-.113a4.84 4.84 0 0 0 4.215-4.26l.017-.154a46.8 46.8 0 0 0-.035-10.672 4.7 4.7 0 0 0-3.809-4.066l-.323-.06a24.7 24.7 0 0 0-9.09 0zm-.815 3.057a.75.75 0 0 1 1.057-.093C8.059 5.908 9.676 6.75 12 6.75s3.941-.842 4.518-1.325a.75.75 0 1 1 .963 1.15C16.62 7.297 14.657 8.25 12 8.25s-4.62-.953-5.482-1.675a.75.75 0 0 1-.093-1.057"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSmartSpeakerMinimalistic;
