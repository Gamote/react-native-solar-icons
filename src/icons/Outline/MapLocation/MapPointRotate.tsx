import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapPointRotate = (props: SvgProps) => (
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
      d="M5.25 8.107C5.25 4.333 8.26 1.25 12 1.25s6.75 3.083 6.75 6.857c0 1.808-.514 3.743-1.422 5.414-.906 1.668-2.236 3.13-3.913 3.914-.898.42-1.932.42-2.83 0-1.677-.784-3.007-2.246-3.913-3.914C5.764 11.85 5.25 9.915 5.25 8.107M12 2.75c-2.887 0-5.25 2.386-5.25 5.357 0 1.54.443 3.23 1.24 4.698.799 1.47 1.92 2.659 3.23 3.271a1.84 1.84 0 0 0 1.56 0c1.31-.612 2.432-1.8 3.23-3.271.797-1.467 1.24-3.158 1.24-4.698 0-2.971-2.363-5.357-5.25-5.357m0 4a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M9.25 8a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0m-5.623 6.534a.75.75 0 0 1-.122 1.054c-.573.454-.755.855-.755 1.162 0 .243.11.538.44.88.334.345.856.695 1.566 1.017 1.254.569 2.988 1 4.994 1.187v-.459a.75.75 0 0 1 1.244-.564l1.5 1.312a.75.75 0 0 1 0 1.129l-1.5 1.312A.75.75 0 0 1 9.75 22v-.66c-2.185-.191-4.14-.659-5.614-1.327-.814-.369-1.515-.815-2.024-1.34-.511-.53-.862-1.179-.862-1.923 0-.95.567-1.738 1.324-2.338a.75.75 0 0 1 1.053.122m16.746 0a.75.75 0 0 1 1.053-.122c.757.6 1.324 1.388 1.324 2.338 0 1.378-1.168 2.41-2.547 3.101-1.441.723-3.412 1.234-5.627 1.459a.75.75 0 1 1-.152-1.493c2.098-.212 3.877-.69 5.107-1.307 1.294-.648 1.719-1.303 1.719-1.76 0-.307-.182-.708-.755-1.162a.75.75 0 0 1-.122-1.054"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMapPointRotate;
