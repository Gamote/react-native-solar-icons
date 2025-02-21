import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWhisk = (props: SvgProps) => (
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
      d="M11.233 3.654C13.992.895 18.478.32 21.08 2.92s2.026 7.087-.733 9.845c-1.848 1.848-4.835 3.112-7.384 3.021a7 7 0 0 1-.667-.056L6.86 21.166a2.847 2.847 0 0 1-4.026-4.026l5.435-5.435a7 7 0 0 1-.057-.666c-.091-2.55 1.173-5.537 3.021-7.385m1.061 1.06c1.64-1.64 3.846-2.247 5.658-1.84a10 10 0 0 0-.796.426c-1.308.776-2.665 1.928-3.58 2.842-.912.913-2.257 2.463-3.228 3.956-.228.35-.443.709-.628 1.063l-.009-.175c-.075-2.098 1.003-4.692 2.583-6.272m7.138-.783c.409-.084.54.005.586.05s.135.178.051.587c-.082.403-.31.921-.659 1.51-.693 1.17-1.756 2.429-2.612 3.285-.858.857-2.327 2.13-3.713 3.031-.699.454-1.332.785-1.83.937-.248.076-.423.095-.533.086a.3.3 0 0 1-.094-.018.1.1 0 0 1-.017-.01.1.1 0 0 1-.01-.018.3.3 0 0 1-.019-.093c-.008-.11.01-.285.086-.533.153-.498.483-1.131.938-1.83.901-1.385 2.174-2.855 3.031-3.712.857-.856 2.116-1.92 3.285-2.613.589-.35 1.107-.577 1.51-.66m-5.53 9.72c-.35.23-.709.443-1.062.628l.175.01c2.098.074 4.69-1.004 6.27-2.583 1.641-1.641 2.248-3.846 1.841-5.658a10 10 0 0 1-.426.796c-.776 1.308-1.927 2.665-2.842 3.58-.913.913-2.463 2.257-3.956 3.228"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgWhisk;
