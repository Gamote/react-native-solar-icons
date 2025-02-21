import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBenzeneRing = (props: SvgProps) => (
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
      d="M7.02 6.638c-.985.586-1.479.88-1.75 1.362S5 9.069 5 10.241v3.518c0 1.172 0 1.758.27 2.241.271.483.765.776 1.75 1.362l2.96 1.759c.986.586 1.479.879 2.02.879s1.034-.293 2.02-.88l2.96-1.758c.985-.586 1.479-.88 1.75-1.362.25-.448.269-.986.27-2M9.98 4.88C10.965 4.292 11.458 4 12 4s1.034.293 2.02.88l2.96 1.758c.985.586 1.479.88 1.75 1.362.25.448.269.986.27 2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5 8 2 6M19 8l3-2M5 16l-3 2"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m12 16.884 4-2.384"
    />
  </Svg>
);
export default SvgBenzeneRing;
