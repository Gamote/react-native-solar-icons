import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHikingMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle cx={11.5} cy={5.5} r={2.5} stroke="#000" strokeWidth={1.5} />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 16.5s-.426 1.62-1 2.5c-.603.925-2 2-2 2"
    />
    <Path
      fill="#000"
      d="m10.21 11.901.746.075zm-.069.686-.746-.075zm8.436-2.734-.48-.576zm.903.223a.75.75 0 0 0-.96-1.152zm-8.276 4.677-.397.636zm.333.208.398-.636zm2.72 4.432.747-.067zm-.604 1.674a.75.75 0 1 0 1.494-.134zM13 10.5l-.386.643.05.028zm-3.536 1.326-.069.686 1.492.15.07-.686zm9.593-1.397.423-.353-.96-1.152-.424.353zm-8.25 4.96.333.208.795-1.272-.333-.208zm2.703 4.07.143 1.608 1.494-.134-.143-1.607zm-.845-8.288a5.88 5.88 0 0 0 6.392-.742l-.96-1.152a4.38 4.38 0 0 1-4.762.552zm-1.525 4.426a5.09 5.09 0 0 1 2.37 3.862l1.494-.133a6.59 6.59 0 0 0-3.07-5.001zm-1.745-3.085a3.04 3.04 0 0 0 1.412 2.877l.795-1.272a1.54 1.54 0 0 1-.715-1.455zm1.561-.536a1.098 1.098 0 0 1 1.658-.833l.772-1.286c-1.634-.98-3.733.073-3.922 1.97z"
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="M19 21V7" />
  </Svg>
);
export default SvgHikingMinimalistic;
