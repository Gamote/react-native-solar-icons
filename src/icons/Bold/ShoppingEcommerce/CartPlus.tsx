import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCartPlus = (props: SvgProps) => (
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
      d="M3.04 2.293a.75.75 0 1 0-.497 1.415l.261.092c.668.234 1.107.39 1.43.548.303.149.436.27.524.398.09.132.16.314.2.677.04.38.042.876.042 1.616V9.64c0 2.942.063 3.913.93 4.826.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45.552-.449.71-1.213 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9 9 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362-.284-.416-.662-.682-1.103-.898-.412-.203-.936-.387-1.552-.603zM13 8.25a.75.75 0 0 1 .75.75v1.25H15a.75.75 0 0 1 0 1.5h-1.25V13a.75.75 0 1 1-1.5 0v-1.25H11a.75.75 0 1 1 0-1.5h1.25V9a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3M16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
    />
  </Svg>
);
export default SvgCartPlus;
