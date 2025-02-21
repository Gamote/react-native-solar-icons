import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrashBinTrash = (props: SvgProps) => (
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
      d="M10.31 2.25h3.38c.217 0 .406 0 .584.028a2.25 2.25 0 0 1 1.64 1.183c.084.16.143.339.212.544l.111.335.029.085a1.25 1.25 0 0 0 1.234.825h3a.75.75 0 0 1 0 1.5h-17a.75.75 0 1 1 0-1.5h3.09a1.25 1.25 0 0 0 1.173-.91l.111-.335c.069-.205.128-.384.211-.544a2.25 2.25 0 0 1 1.641-1.183c.178-.028.367-.028.583-.028m-1.302 3q.078-.151.136-.315l.04-.113.099-.3c.091-.273.112-.328.133-.368a.75.75 0 0 1 .547-.395c.044-.007.104-.009.392-.009h3.29c.288 0 .348.002.392.01a.75.75 0 0 1 .547.394c.02.04.042.095.133.369l.1.3.038.112q.06.164.137.315z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M5.915 8.45a.75.75 0 0 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132.169.845.455 1.55 1.047 2.104s1.315.793 2.17.904c.822.108 1.86.108 3.146.108h.878c1.286 0 2.325 0 3.146-.108.855-.111 1.579-.35 2.17-.904.592-.553.878-1.26 1.047-2.104.162-.814.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99-.137.685-.327 1.047-.6 1.303-.274.256-.648.422-1.34.512-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095-.692-.09-1.066-.256-1.34-.512-.273-.256-.463-.618-.6-1.303-.14-.705-.204-1.643-.294-2.99z"
    />
    <Path
      fill="#000"
      d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821M14.575 10.254a.75.75 0 0 1 .671.82l-.5 5a.75.75 0 1 1-1.492-.149l.5-5a.75.75 0 0 1 .82-.671"
    />
  </Svg>
);
export default SvgTrashBinTrash;
