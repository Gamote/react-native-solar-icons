import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgListHeart = (props: SvgProps) => (
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
      d="M2.25 6A.75.75 0 0 1 3 5.25h18a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 6m0 4A.75.75 0 0 1 3 9.25h18a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m17.845 2.393c1.035.373 1.655 1.392 1.655 2.643 0 .898-.524 1.71-1.056 2.322-.552.636-1.232 1.19-1.77 1.587L18.85 19c-.36.267-.768.57-1.349.57s-.99-.303-1.35-.57l-.074-.055c-.538-.396-1.218-.951-1.77-1.587-.532-.613-1.056-1.424-1.056-2.322 0-1.251.62-2.27 1.655-2.643.835-.302 1.77-.12 2.595.46.825-.58 1.76-.761 2.595-.46m-.509 1.41c-.337-.12-.92-.07-1.56.561a.75.75 0 0 1-1.052 0c-.64-.63-1.223-.682-1.56-.56-.321.115-.664.476-.664 1.232 0 .337.218.797.688 1.338.45.517 1.03.997 1.527 1.363.233.171.347.253.438.302.06.031.076.031.095.031h.004c.02 0 .036 0 .095-.031.091-.049.205-.13.438-.302.497-.366 1.078-.846 1.527-1.363.47-.541.688-1 .688-1.338 0-.756-.343-1.117-.664-1.232M2.25 14a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgListHeart;
