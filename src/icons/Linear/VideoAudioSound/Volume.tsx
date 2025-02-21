import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVolume = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M5.035 10.971c.073-1.208.11-1.813.424-2.394a3.2 3.2 0 0 1 1.38-1.3C7.44 7 8.127 7 9.5 7c.512 0 .768 0 1.016-.042.245-.042.485-.113.712-.214.23-.101.444-.242.871-.524l.22-.144C14.86 4.399 16.132 3.56 17.2 3.925c.205.07.403.17.58.295.922.648.992 2.157 1.133 5.174A68 68 0 0 1 19 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.3 2.3 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151l-.219-.144c-.427-.282-.64-.423-.871-.525a3 3 0 0 0-.712-.213C10.268 17 10.012 17 9.5 17c-1.374 0-2.06 0-2.66-.277a3.2 3.2 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395A17 17 0 0 1 5 12c0-.323.013-.671.035-1.029Z"
    />
  </Svg>
);
export default SvgVolume;
