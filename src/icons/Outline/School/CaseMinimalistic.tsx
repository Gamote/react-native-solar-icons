import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCaseMinimalistic = (props: SvgProps) => (
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
      d="M10.561 2.25h2.879c.113 0 .201 0 .285.005a2.75 2.75 0 0 1 2.385 1.72c.032.077.06.16.095.268l.032.097.03.085c.177.49.613.83 1.068.875l.1.006c1.677.099 2.966.378 3.924 1.335.748.749 1.08 1.698 1.238 2.87.153 1.14.153 2.595.153 4.433v.112c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433v-.112c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.958-.957 2.248-1.236 3.924-1.335l.1-.006c.455-.044.892-.385 1.07-.875l.028-.085.032-.097c.036-.107.064-.191.095-.269a2.75 2.75 0 0 1 2.385-1.719c.084-.005.172-.005.286-.005m-3.92 4.554q.068-.002.133-.008C7.647 6.75 8.697 6.75 10 6.75h4c1.303 0 2.353 0 3.226.046q.066.006.132.008c1.604.095 2.398.356 2.94.898a2.3 2.3 0 0 1 .477.7c-1.827 1.186-3.028 1.95-4.038 2.456A.75.75 0 0 0 15.25 11v.458c-2.12.64-4.38.64-6.5 0V11a.75.75 0 0 0-1.487-.142c-1.01-.505-2.21-1.27-4.038-2.457a2.3 2.3 0 0 1 .477-.7c.542-.541 1.336-.802 2.94-.897m-3.78 3.149c-.11.996-.111 2.286-.111 4.047 0 1.907.002 3.262.14 4.29.135 1.005.389 1.585.812 2.008s1.003.677 2.009.812c1.028.138 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289 0-1.76-.001-3.05-.11-4.047-1.887 1.223-3.181 2.032-4.39 2.552V13a.75.75 0 0 1-1.5.016 12.75 12.75 0 0 1-6.5 0A.75.75 0 0 1 7.25 13v-.495c-1.208-.52-2.503-1.33-4.39-2.552m12.131-4.702-.971-.001H9.009a3 3 0 0 0 .174-.428l.003-.008.026-.077c.045-.136.058-.173.07-.203a1.25 1.25 0 0 1 1.084-.782c.032-.002.072-.002.215-.002h2.838c.143 0 .183 0 .215.002.482.03.904.334 1.085.782.012.03.024.067.07.203l.028.085m.039.113q.058.163.136.316Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCaseMinimalistic;
