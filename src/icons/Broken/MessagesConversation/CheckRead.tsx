import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCheckRead = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M4.565 12.407a.75.75 0 1 0-1.13.986zM7.143 16.5l-.565.493a.75.75 0 0 0 1.13 0zm8.422-8.507a.75.75 0 1 0-1.13-.986zm-5.059 3.514a.75.75 0 0 0 1.13.986zm-.834 3.236a.75.75 0 1 0-1.13-.986zm-6.237-1.35 3.143 3.6 1.13-.986-3.143-3.6zm4.273 3.6 1.964-2.25-1.13-.986-1.964 2.25zm3.928-4.5 1.965-2.25-1.13-.986-1.965 2.25zm1.965-2.25 1.964-2.25-1.13-.986-1.964 2.25z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20 7.563-4.286 4.5M11 16l.429.563 2.143-2.25"
    />
  </Svg>
);
export default SvgCheckRead;
