import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEyeClosed = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2.69 6.705a.75.75 0 0 0-1.38.59zm12.897 6.624-.274-.698zm-6.546.409a.75.75 0 1 0-1.257-.818zm-2.67 1.353a.75.75 0 1 0 1.258.818zM22.69 7.295a.75.75 0 0 0-1.378-.59zM19 11.13l-.513-.547zm.97 2.03a.75.75 0 1 0 1.06-1.06zM11.25 16.5a.75.75 0 0 0 1.5 0zm5.121-.591a.75.75 0 1 0 1.258-.818zm-10.84-4.25A.75.75 0 0 0 4.47 10.6zm-2.561.44a.75.75 0 0 0 1.06 1.06zM12 13.25c-3.224 0-5.539-1.605-7.075-3.26a13.6 13.6 0 0 1-1.702-2.28 12 12 0 0 1-.507-.946l-.022-.049-.004-.01-.001-.001L2 7l-.69.296h.001l.001.003.003.006.04.088q.039.088.117.243c.103.206.256.496.462.841.41.69 1.035 1.61 1.891 2.533C5.54 12.855 8.224 14.75 12 14.75zm3.313-.62c-.97.383-2.071.62-3.313.62v1.5c1.438 0 2.725-.276 3.862-.723zm-7.529.29L6.371 15.09l1.258.818 1.412-2.171zM22 7l-.69-.296h.001v.002l-.007.013-.028.062a12.349 12.349 0 0 1-.64 1.162 13.3 13.3 0 0 1-2.15 2.639l1.027 1.094a14.8 14.8 0 0 0 3.122-4.26l.039-.085.01-.024.004-.007v-.003h.001v-.001zm-3.513 3.582c-.86.806-1.913 1.552-3.174 2.049l.549 1.396c1.473-.58 2.685-1.444 3.651-2.351zm-.017 1.077 1.5 1.5 1.06-1.06-1.5-1.5zM11.25 14v2.5h1.5V14zm3.709-.262 1.412 2.171 1.258-.818-1.413-2.171zm-10.49-3.14-1.5 1.5L4.03 13.16l1.5-1.5z"
    />
  </Svg>
);
export default SvgEyeClosed;
