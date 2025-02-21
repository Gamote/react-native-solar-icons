import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareShareLine = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M22 7H14C12.1824 7 11.0867 7.89202 10.6804 8.30029C10.5546 8.42673 10.4917 8.48996 10.4908 8.49082C10.49 8.49168 10.4267 8.55459 10.3003 8.68042C9.89202 9.08671 9 10.1824 9 12V15M22 7L17 2M22 7L17 12"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.46485 20.5352C4.9297 22 7.28733 22 12.0026 22C16.7179 22 19.0755 22 20.5404 20.5352C21.7815 19.294 21.9711 17.4119 22 13.9979M3.46485 20.5352C2 19.0703 2 16.7127 2 11.9974M3.46485 20.5352C4.92931 21.9996 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C21.7764 19.2946 21.9659 17.4129 21.9948 13.9994M3.46485 20.5352C2.00038 19.0707 2 16.714 2 12M3.46485 3.45963C4.70599 2.21848 6.58807 2.02895 10.0021 2M2.0551 8C2.16444 5.80655 2.49073 4.43821 3.46447 3.46447C4.70529 2.22364 6.58687 2.03415 10 2.00522"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SvgSquareShareLine;
