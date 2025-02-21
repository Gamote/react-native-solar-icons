import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBroom = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M18.221 19.643c.477-.903.942-1.937 1.24-2.98.411-1.438.56-2.788.602-3.818l-1.552-1.552-5.804-5.804-1.552-1.552c-1.03.042-2.38.19-3.817.602-1.045.298-2.078.763-2.981 1.24C2.1 6.97 1.427 9.71 2.497 11.807l.013.025.7 1.15a23.34 23.34 0 0 0 7.808 7.809l1.15.699.025.013c2.096 1.07 4.837.396 6.028-1.86M21.775 3.313a.77.77 0 0 0-1.088-1.088L19.012 3.9a4.88 4.88 0 0 0-5.718 0l1.109 1.109 4.588 4.588 1.109 1.109a4.88 4.88 0 0 0 0-5.718z"
    />
  </Svg>
);
export default SvgBroom;
