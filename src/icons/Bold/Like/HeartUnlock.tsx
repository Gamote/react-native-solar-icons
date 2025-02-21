import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartUnlock = (props: SvgProps) => (
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
      d="M7.75 7c0-1.51.438-2.547 1.11-3.208.676-.663 1.685-1.042 3.012-1.042 1.667 0 2.84.594 3.49 1.644a.75.75 0 1 0 1.276-.788c-.993-1.607-2.73-2.356-4.766-2.356-1.609 0-3.036.464-4.062 1.472C6.78 3.733 6.25 5.197 6.25 7v.29C4.366 7.986 3 9.872 3 12.1c0 3.838 2.968 6.052 5.496 7.937q.394.294.77.578C10.2 21.328 11.1 22 12 22s1.8-.672 2.734-1.385q.376-.285.77-.578c2.528-1.885 5.496-4.1 5.496-7.938 0-4.237-4.95-7.242-9-3.168C10.61 7.533 9.115 6.969 7.75 7zM12 11.25a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHeartUnlock;
