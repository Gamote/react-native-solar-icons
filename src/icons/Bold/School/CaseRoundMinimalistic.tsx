import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCaseRoundMinimalistic = (props: SvgProps) => (
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
      d="M9.878 4.25a2.251 2.251 0 0 1 4.244 0 .75.75 0 1 0 1.414-.5 3.751 3.751 0 0 0-7.073 0 .75.75 0 0 0 1.415.5M2.748 8.09a.8.8 0 0 0-.168-.081c.153-.318.347-.594.592-.838C4.343 6 6.229 6 10 6h4c3.771 0 5.657 0 6.828 1.172.245.244.439.52.592.838a.8.8 0 0 0-.167.081c-2.1 1.365-3.42 2.22-4.516 2.767A.75.75 0 0 0 15.25 11v.458c-2.12.64-4.38.64-6.5 0V11a.75.75 0 0 0-1.487-.142C6.167 10.31 4.847 9.456 2.747 8.09M2 14c0-1.95 0-3.396.162-4.5 2.277 1.48 3.736 2.423 5.088 3.005V13a.75.75 0 0 0 1.5.016c2.13.562 4.37.562 6.5 0a.75.75 0 0 0 1.5-.016v-.495c1.352-.582 2.811-1.525 5.088-3.005C22 10.604 22 12.05 22 14c0 3.771 0 5.657-1.172 6.828S17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCaseRoundMinimalistic;
