import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMouseCircle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 10a4 4 0 1 1 8 0v4a4 4 0 0 1-8 0z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M8.5 10h7M12 10V6"
    />
    <Path
      fill="#000"
      d="m10.013 2.033-.15-.735zm6.681.135a.75.75 0 0 0-.66 1.347zm-6.83-.87c-4.918 1-8.614 5.377-8.614 10.619h1.5c0-4.524 3.188-8.29 7.412-9.15zM1.25 11.917C1.25 17.894 6.057 22.75 12 22.75v-1.5c-5.103 0-9.25-4.173-9.25-9.333zM12 22.75c5.943 0 10.75-4.856 10.75-10.833h-1.5c0 5.16-4.147 9.333-9.25 9.333zm-.75-18.9v5.042h1.5V3.85zm11.5 8.067c0-4.286-2.47-7.992-6.056-9.749l-.66 1.347a9.34 9.34 0 0 1 5.216 8.402zm-12.588-9.15c.508-.103 1.088.324 1.088 1.083h1.5c0-1.468-1.229-2.89-2.887-2.552z"
    />
  </Svg>
);
export default SvgMouseCircle;
