import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartLock = (props: SvgProps) => (
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
      d="M6.25 7.29V7c0-1.809.546-3.275 1.602-4.285C8.902 1.711 10.358 1.25 12 1.25s3.098.461 4.148 1.465C17.204 3.725 17.75 5.191 17.75 7v.29C19.634 7.986 21 9.872 21 12.1c0 3.838-2.968 6.052-5.496 7.937q-.394.294-.77.578C13.8 21.328 12.9 22 12 22s-1.8-.672-2.734-1.385a87 87 0 0 0-.77-.578C5.968 18.152 3 15.937 3 12.099c0-2.226 1.366-4.112 3.25-4.81M7.75 7c0-1.505.447-2.539 1.139-3.2.697-.668 1.74-1.05 3.111-1.05 1.37 0 2.414.382 3.111 1.05.692.661 1.139 1.695 1.139 3.2v.001c-1.365-.032-2.86.532-4.25 1.93C10.61 7.533 9.115 6.969 7.75 7zM12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHeartLock;
