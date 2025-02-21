import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTextSquare2 = (props: SvgProps) => (
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
      d="M12 3C7.749 3 5.623 3 4.303 4.318 3.298 5.321 3.058 6.788 3 9.3m18 0c-.058-2.512-.298-3.98-1.303-4.982-.818-.817-1.946-1.127-3.697-1.246M21 14.7c-.058 2.512-.298 3.98-1.303 4.982C18.377 21 16.251 21 12 21s-6.377 0-7.697-1.318C3.298 18.679 3.058 17.212 3 14.7M8 8h8M12 16V8M22 12h-2M4 12H2"
    />
  </Svg>
);
export default SvgTextSquare2;
