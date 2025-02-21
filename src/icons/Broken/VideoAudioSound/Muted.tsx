import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMuted = (props: SvgProps) => (
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
      d="M1.959 8.577a3.2 3.2 0 0 1 1.381-1.3C3.94 7 4.626 7 6 7c.512 0 .768 0 1.016-.042a3 3 0 0 0 .712-.214c.23-.101.444-.242.871-.524l.22-.144C11.36 4.399 12.632 3.56 13.7 3.925c.205.07.403.17.58.295.923.648.993 2.157 1.133 5.174A68 68 0 0 1 15.5 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151L8.6 17.78c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C6.768 17 6.512 17 6 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395q-.017-.27-.026-.528M22 10l-4 4m0-4 4 4"
    />
  </Svg>
);
export default SvgMuted;
