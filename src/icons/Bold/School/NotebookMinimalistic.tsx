import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNotebookMinimalistic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923.977.06 2.131.179 3.018.412 1.05.277 2.296.867 3.282 1.388.307.163.634.275.968.339v15.179a3.4 3.4 0 0 1-.878-.324c-1-.532-2.29-1.15-3.372-1.436-.877-.231-2.016-.35-2.985-.41C2.906 18.153 2 17.255 2 16.143M12.75 20.393a3.4 3.4 0 0 0 .878-.324c1-.532 2.29-1.15 3.372-1.436.877-.231 2.016-.35 2.985-.41 1.109-.07 2.015-.968 2.015-2.08V4.934c0-1.072-.846-1.953-1.918-1.915-1.129.04-2.535.156-3.582.47-.908.271-1.965.816-2.826 1.315a3.5 3.5 0 0 1-.924.37z"
    />
  </Svg>
);
export default SvgNotebookMinimalistic;
