import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMonitorCamera = (props: SvgProps) => (
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
      d="M14.95 1.25h1.1c.664 0 1.237 0 1.696.062.492.066.963.215 1.345.597.236.236.383.505.476.792l.76-.316.041-.017c.277-.116.557-.233.796-.293.265-.067.657-.113 1.03.135.372.248.48.628.52.899.036.244.036.546.036.847v2.088c0 .3 0 .604-.036.848-.04.27-.148.65-.52.898-.373.248-.765.202-1.03.135a6 6 0 0 1-.796-.293q-.02-.007-.041-.017l-.76-.316c-.093.287-.24.556-.476.792-.382.382-.854.531-1.345.597-.459.062-1.032.062-1.697.062h-1.098c-.665 0-1.238 0-1.697-.062-.492-.066-.963-.215-1.345-.597s-.531-.854-.597-1.345c-.062-.459-.062-1.032-.062-1.697v-.098c0-.665 0-1.238.062-1.697.066-.491.215-.963.597-1.345s.853-.531 1.345-.597c.459-.062 1.032-.062 1.697-.062m4.8 4.5 1.154.48c.135.057.247.103.344.142.002-.105.002-.226.002-.372V4c0-.146 0-.267-.002-.372-.098.039-.21.085-.344.141l-1.154.481v1.5M18.25 5c0-.728-.002-1.2-.048-1.546-.044-.325-.115-.427-.172-.484s-.159-.128-.484-.172c-.347-.046-.818-.048-1.546-.048h-1c-.728 0-1.2.002-1.546.048-.325.044-.427.115-.484.172s-.128.159-.172.484c-.046.347-.048.818-.048 1.546s.002 1.2.048 1.546c.044.325.115.427.172.484s.159.128.484.172c.347.046.818.048 1.546.048h1c.728 0 1.2-.002 1.546-.048.325-.044.427-.115.484-.172s.128-.159.172-.484c.046-.347.048-.818.048-1.546M9.451 1.25H9.5a.75.75 0 0 1 0 1.5c-1.662 0-2.843.001-3.749.108-.889.105-1.415.304-1.813.63a3.3 3.3 0 0 0-.45.45c-.326.398-.525.924-.63 1.813-.107.906-.108 2.087-.108 3.749V11q-.001.687.004 1.25h18.492q.005-.563.004-1.25v-1a.75.75 0 0 1 1.5 0v1.055c0 .662 0 1.263-.013 1.804a.75.75 0 0 1-.01.327c-.017.444-.045.845-.093 1.206-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116H12.75v3.5H16a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1 0-1.5h3.25v-3.5H7.945c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.049-.36-.077-.762-.094-1.206a.75.75 0 0 1-.01-.327c-.013-.541-.013-1.142-.013-1.804V9.45c0-1.602 0-2.872.119-3.876.122-1.03.377-1.88.96-2.588a4.8 4.8 0 0 1 .658-.659c.709-.582 1.557-.837 2.588-.96C6.58 1.25 7.85 1.25 9.451 1.25m-6.644 12.5q.018.234.046.442c.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h8c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4q.028-.207.046-.441z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMonitorCamera;
