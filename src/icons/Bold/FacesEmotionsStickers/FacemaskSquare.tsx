import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFacemaskSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m21.996 13.81-4.281 1.712-.206 2.88 3.286 1.409a.8.8 0 0 1 .217.14c.834-1.262.964-3.111.984-6.142M19.888 21.054l-2.492-1.068-.133 1.859c1.1-.128 1.946-.363 2.625-.791M15.751 21.956v-.01l.462-6.454-2.635-1.053a4.25 4.25 0 0 0-3.156 0l-2.635 1.053.461 6.455v.01C9.302 22 10.539 22 12 22c1.463 0 2.699 0 3.751-.044M6.737 21.845l-.133-1.86-2.492 1.069c.679.428 1.524.663 2.625.79M2.988 19.952a.8.8 0 0 1 .217-.141l3.286-1.409-.206-2.88-4.281-1.713c.02 3.03.15 4.88.984 6.143"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.464 3.464C2 4.93 2 7.286 2 12v.25a.8.8 0 0 1 .279.054L7 14.192l2.864-1.146a5.75 5.75 0 0 1 4.272 0L17 14.192l4.721-1.888A.8.8 0 0 1 22 12.25V12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5m5 1.5c.552 0 1-.672 1-1.5S15.552 9 15 9s-1 .672-1 1.5.448 1.5 1 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFacemaskSquare;
