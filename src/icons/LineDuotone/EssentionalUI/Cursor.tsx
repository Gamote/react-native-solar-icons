import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCursor = (props: SvgProps) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.636 15.262-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702s-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.232 4.39 4.392s2.47-.24 5.73.962L15.57 7.36c1.633.602 2.45.903 2.596 1.565s-.47 1.277-1.702 2.508l-1.202 1.203"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.636 15.262 3.938 3.938c.408.408.612.612.84.706.303.126.643.126.947 0 .227-.094.431-.298.839-.706s.611-.612.706-.84a1.24 1.24 0 0 0 0-.946c-.095-.228-.298-.432-.706-.84l-3.938-3.938"
      opacity={0.5}
    />
  </Svg>
);
export default SvgCursor;
