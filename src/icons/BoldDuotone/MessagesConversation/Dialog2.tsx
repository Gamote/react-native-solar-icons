import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDialog2 = (props: SvgProps) => (
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
      d="m10.404 22.48.275-.464c.44-.745.66-1.117 1.012-1.325.351-.208.81-.222 1.725-.252.859-.027 1.436-.102 1.93-.306a4.24 4.24 0 0 0 2.295-2.296c.323-.779.323-1.767.323-3.743v-.848c0-2.777 0-4.165-.625-5.185-.35-.57-.83-1.05-1.4-1.4-1.02-.625-2.408-.625-5.185-.625H8.21c-2.777 0-4.165 0-5.185.625-.57.35-1.05.83-1.4 1.4C1 9.081 1 10.47 1 13.246v.848c0 1.976 0 2.964.323 3.743a4.24 4.24 0 0 0 2.295 2.296c.494.204 1.07.279 1.93.306.916.03 1.374.044 1.725.252.35.208.571.58 1.012 1.325l.275.465c.41.692 1.434.692 1.844 0m2.789-7.962a1.06 1.06 0 1 0 0-2.12 1.06 1.06 0 0 0 0 2.12m-2.65-1.06a1.06 1.06 0 1 1-2.121 0 1.06 1.06 0 0 1 2.12 0m-4.772 1.06a1.06 1.06 0 1 0 0-2.12 1.06 1.06 0 0 0 0 2.12"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M15.486 1c1.267 0 2.274 0 3.082.077.829.079 1.53.244 2.153.626a4.8 4.8 0 0 1 1.575 1.575c.383.624.548 1.325.627 2.153.076.808.076 1.816.076 3.082v.866c0 .901 0 1.619-.04 2.2-.04.595-.125 1.106-.323 1.584a4.77 4.77 0 0 1-2.67 2.617q-.21.082-.368.135h-1.65c.016-.499.016-1.093.016-1.822v-.848c0-2.777 0-4.165-.625-5.185-.35-.57-.83-1.05-1.4-1.4-1.02-.625-2.408-.625-5.185-.625H8.21c-.986 0-1.796 0-2.478.028v-1.65q.05-.17.13-.396.133-.389.346-.739a4.8 4.8 0 0 1 1.576-1.575c.624-.382 1.324-.547 2.153-.626C10.745 1 11.752 1 13.019 1z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgDialog2;
