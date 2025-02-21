import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFigmaFile = (props: SvgProps) => (
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
      d="M12.25 2.834c-.46-.078-1.088-.084-2.22-.084-1.917 0-3.28.002-4.312.14-1.012.135-1.593.39-2.016.812s-.677 1.003-.812 2.009c-.138 1.028-.14 2.382-.14 4.29v4c0 1.906.002 3.26.14 4.288.135 1.006.389 1.586.812 2.01.423.422 1.003.676 2.009.811 1.028.139 2.382.14 4.289.14h4c1.907 0 3.262-.002 4.29-.14 1.005-.135 1.585-.389 2.008-.812s.677-1.003.812-2.009c.138-1.027.14-2.382.14-4.289v-.437c0-1.536-.01-2.264-.174-2.813h-3.13c-1.133 0-2.058 0-2.79-.098-.763-.103-1.425-.325-1.954-.854s-.751-1.19-.854-1.955c-.098-.73-.098-1.656-.098-2.79zm1.5.776V5c0 1.2.002 2.024.085 2.643.08.598.224.891.428 1.094s.496.348 1.094.428c.619.083 1.443.085 2.643.085h2.02a46 46 0 0 0-1.17-1.076l-3.959-3.563A37 37 0 0 0 13.75 3.61m-3.575-2.36c1.385 0 2.28 0 3.103.315.823.316 1.485.912 2.51 1.835l.107.096 3.958 3.563.125.112c1.184 1.065 1.95 1.754 2.361 2.678s.412 1.954.411 3.546v.661c0 1.838 0 3.294-.153 4.433-.158 1.172-.49 2.121-1.238 2.87-.749.748-1.698 1.08-2.87 1.238-1.14.153-2.595.153-4.433.153H9.944c-1.838 0-3.294 0-4.433-.153-1.172-.158-2.121-.49-2.87-1.238-.748-.749-1.08-1.698-1.238-2.87-.153-1.14-.153-2.595-.153-4.433V9.945c0-1.838 0-3.294.153-4.433.158-1.172.49-2.121 1.238-2.87.75-.749 1.701-1.08 2.878-1.238 1.144-.153 2.607-.153 4.455-.153h.202"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M4.25 11.5A2.25 2.25 0 0 1 6.5 9.25h3A2.25 2.25 0 0 1 11.177 13a2.25 2.25 0 0 1-2.427 3.622v.878A2.25 2.25 0 1 1 4.823 16a2.24 2.24 0 0 1-.573-1.5c0-.576.217-1.102.573-1.5a2.24 2.24 0 0 1-.573-1.5m2.25 2.25a.75.75 0 1 0 0 1.5h.75v-1.5zm.75-1.5H6.5a.75.75 0 0 1 0-1.5h.75zm2.25 0a.75.75 0 0 0 0-1.5h-.75v1.5zm0 1.5a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m-2.25 3H6.5a.75.75 0 1 0 .75.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgFigmaFile;
