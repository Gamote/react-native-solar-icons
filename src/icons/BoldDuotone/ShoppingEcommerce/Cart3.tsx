import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCart3 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M10 2a1.75 1.75 0 1 0 0 3.5h4A1.75 1.75 0 1 0 14 2zM3.863 16.205c-.858-3.432-1.287-5.147-.386-6.301S6.147 8.75 9.684 8.75h4.63c3.538 0 5.307 0 6.208 1.154s.472 2.87-.386 6.301c-.546 2.183-.819 3.274-1.633 3.91-.813.635-1.938.635-4.188.635h-4.63c-2.25 0-3.376 0-4.19-.635-.813-.636-1.086-1.727-1.632-3.91"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M15.58 4.502a1.74 1.74 0 0 0 .002-1.501c.683.005 1.216.036 1.692.222a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.999l.047.17.512 2.963c-.408-.282-.935-.45-1.617-.55l-.361-2.087c-.284-1.04-.387-1.367-.561-1.601a1.75 1.75 0 0 0-.768-.587c-.22-.086-.486-.11-1.148-.118M8.418 3.001a1.74 1.74 0 0 0 .002 1.501c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.174.234-.277.561-.56 1.6l-.362 2.089c-.681.1-1.208.267-1.617.548l.512-2.962.047-.17c.237-.872.41-1.505.776-2a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222M8.75 12.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0zM16 12a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0v-4A.75.75 0 0 1 16 12M12.75 12.75a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0z"
    />
  </Svg>
);
export default SvgCart3;
