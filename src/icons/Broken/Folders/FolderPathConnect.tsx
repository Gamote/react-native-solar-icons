import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFolderPathConnect = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M16.5 7.5h-3M22 20h-8M2 20h8M12 18v-3"
    />
    <Circle cx={12} cy={20} r={2} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5 5.217c0-.573 0-.86.049-1.099.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011.56.049 1.093.254 1.526.587.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972q.284.146.594.228c.377.1.78.1 1.588.1h.261c1.843 0 2.765 0 3.363.5q.083.07.157.146c.439.453.52 1.104.536 2.254m-.003 3.6c-.025 1.612-.154 2.526-.814 3.139-.82.761-2.14.761-4.78.761h-2.8c-2.64 0-3.96 0-4.78-.761C5 13.477 5 12.25 5 9.8V8.5"
    />
  </Svg>
);
export default SvgFolderPathConnect;
