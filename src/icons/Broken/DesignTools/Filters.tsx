import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilters = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#000" strokeWidth={1.5} d="M12 20.283A6 6 0 1 0 17.5 10" />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 2.803A6 6 0 1 1 6.341 6"
    />
    <Path
      fill="#000"
      d="M8 22v-.75zm-6-6h-.75zm.153 3.375a.75.75 0 1 0 1.299-.75zm4.097 1.576a.75.75 0 0 0-.5 1.415zm7-4.951c0 2.9-2.35 5.25-5.25 5.25v1.5A6.75 6.75 0 0 0 14.75 16zm-10.5 0a5.25 5.25 0 0 1 3.937-5.085l-.374-1.452A6.75 6.75 0 0 0 1.25 16zm10.156-1.874c.222.58.344 1.212.344 1.874h1.5c0-.848-.157-1.66-.443-2.41zm-9.454 4.498A5.2 5.2 0 0 1 2.75 16h-1.5c0 1.228.329 2.382.903 3.375zM8 21.25a5.2 5.2 0 0 1-1.75-.299l-.5 1.415A6.7 6.7 0 0 0 8 22.75z"
    />
  </Svg>
);
export default SvgFilters;
