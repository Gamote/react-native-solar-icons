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
      d="m20.082 3.018.026.75zm-3.582.47-.215-.72v.001zm-2.826 1.315-.376-.65zM3.982 3.075l-.046.748zM7 3.487l.191-.725zm3.282 1.388-.35.663zm3.346 15.194.352.662zM17 18.633l-.191-.725zm2.985-.41.047.748zm-9.613 1.846-.352.662zM7 18.633l.191-.725zm-2.985-.41-.047.748zm-1.265-2.08V4.999h-1.5v11.146zm20 0V4.934h-1.5v11.21zM20.056 2.269c-1.139.04-2.626.158-3.771.501l.43 1.437c.95-.284 2.274-.4 3.393-.439zm-3.771.501c-.995.298-2.114.88-2.987 1.385l.752 1.298c.85-.492 1.845-1 2.665-1.246zM3.936 3.823c.966.06 2.06.175 2.873.39l.382-1.45c-.96-.254-2.176-.376-3.163-.437zm2.873.39c.962.254 2.146.809 3.123 1.325l.7-1.326c-.995-.526-2.304-1.15-3.44-1.45zM13.98 20.73c.991-.528 2.219-1.11 3.211-1.373l-.382-1.45c-1.17.309-2.526.962-3.534 1.5zm3.211-1.373c.803-.211 1.882-.327 2.841-.387l-.094-1.497c-.98.062-2.179.183-3.13.434zm-6.466.05c-1.008-.538-2.363-1.191-3.534-1.5l-.382 1.45c.992.262 2.22.845 3.21 1.373zm-3.534-1.5c-.95-.25-2.15-.372-3.13-.434l-.093 1.497c.959.06 2.038.176 2.84.387zm14.059-1.764c0 .685-.568 1.284-1.312 1.33l.094 1.497c1.474-.092 2.718-1.291 2.718-2.827zm1.5-11.21c0-1.464-1.165-2.719-2.694-2.666l.052 1.5c.615-.022 1.142.484 1.142 1.165zm-21.5 11.21c0 1.536 1.244 2.735 2.718 2.827l.094-1.497c-.744-.046-1.312-.645-1.312-1.33zm12.025 3.263a2.72 2.72 0 0 1-2.55 0l-.705 1.324a4.22 4.22 0 0 0 3.96 0zm.023-15.253a2.77 2.77 0 0 1-2.665.058l-.701 1.326a4.27 4.27 0 0 0 4.118-.086zM2.75 4.998c0-.697.552-1.213 1.186-1.175l.092-1.497C2.47 2.231 1.25 3.5 1.25 4.998z"
    />
    <Path stroke="#000" strokeWidth={1.5} d="M12 5.5v15" opacity={0.5} />
  </Svg>
);
export default SvgNotebookMinimalistic;
