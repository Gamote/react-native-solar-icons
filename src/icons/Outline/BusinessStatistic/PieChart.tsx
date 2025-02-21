import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPieChart = (props: SvgProps) => (
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
      d="M14.254 1.364c-1.096-.306-2.122.025-2.851.695-.719.66-1.153 1.646-1.153 2.701v6.695a2.295 2.295 0 0 0 2.295 2.295h6.694c1.055 0 2.042-.435 2.701-1.153.67-.73 1.001-1.756.695-2.852a12.1 12.1 0 0 0-8.38-8.38M11.75 4.76c0-.65.27-1.231.668-1.596.386-.355.886-.508 1.433-.355 3.55.991 6.349 3.79 7.34 7.34.153.547 0 1.047-.355 1.433-.365.398-.945.668-1.597.668h-6.694a.795.795 0 0 1-.795-.795z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M8.672 4.715a.75.75 0 1 0-.45-1.43C4.183 4.552 1.25 8.327 1.25 12.788c0 5.501 4.46 9.96 9.96 9.96 4.462 0 8.237-2.931 9.505-6.972a.75.75 0 1 0-1.43-.45A8.46 8.46 0 1 1 8.673 4.715"
    />
  </Svg>
);
export default SvgPieChart;
