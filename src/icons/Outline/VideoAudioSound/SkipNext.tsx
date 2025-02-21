import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkipNext = (props: SvgProps) => (
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
      d="M6.278 1.756c-1.143-.739-2.438-.622-3.417.048-.967.66-1.611 1.841-1.611 3.229v13.934c0 1.388.644 2.568 1.61 3.23.98.669 2.275.786 3.418.048l10.789-6.968c1.15-.742 1.683-2.043 1.683-3.277s-.533-2.535-1.683-3.277zM2.75 5.033c0-.921.423-1.625.958-1.991.522-.358 1.162-.41 1.756-.026l10.789 6.967c.637.41.997 1.18.997 2.017 0 .836-.36 1.606-.997 2.017L5.464 20.985c-.594.383-1.234.33-1.756-.027-.535-.365-.958-1.07-.958-1.99z"
      clipRule="evenodd"
    />
    <Path fill="#000" d="M22.75 5a.75.75 0 0 0-1.5 0v14a.75.75 0 0 0 1.5 0z" />
  </Svg>
);
export default SvgSkipNext;
