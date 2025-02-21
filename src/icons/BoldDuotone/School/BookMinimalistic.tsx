import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M7.426 18H20c-.003.93-.022 1.623-.113 2.17-.11.653-.31.998-.616 1.244-.307.246-.737.407-1.55.494-.837.09-1.946.092-3.536.092h-4.43c-1.59 0-2.7-.001-3.536-.092-.813-.087-1.243-.248-1.55-.494s-.506-.591-.616-1.243l-.022-.151c-.04-.291-.06-.437.066-.78.127-.344.181-.397.291-.505.326-.32.772-.556 1.285-.667.29-.062.67-.068 1.753-.068"
    />
    <Path
      fill="#000"
      d="M4.727 2.733c.306-.308.734-.508 1.544-.618C7.105 2.002 8.209 2 9.793 2h4.414c1.584 0 2.688.002 3.522.115.81.11 1.238.31 1.544.618.305.308.504.74.613 1.557.112.84.114 1.955.114 3.552V18H7.426c-1.084 0-1.462.006-1.753.068-.513.11-.96.347-1.285.667-.11.108-.164.161-.291.505A1.3 1.3 0 0 0 4 19.7V7.842c0-1.597.002-2.711.114-3.552.109-.816.308-1.249.613-1.557"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M7.31 16.23H20V7.977c0-1.634-.002-2.774-.114-3.634-.109-.835-.308-1.278-.613-1.593-.306-.315-.734-.52-1.544-.633C16.895 2.002 15.791 2 14.207 2H9.793c-1.002 0-1.812 0-2.483.03zM5.655 2.24c-.433.119-.711.287-.928.51-.305.316-.504.758-.613 1.593-.112.86-.114 2-.114 3.634V17c.389-.28.827-.494 1.299-.624a3 3 0 0 1 .356-.076z"
    />
  </Svg>
);
export default SvgBookMinimalistic;
