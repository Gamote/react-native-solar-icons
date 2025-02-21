import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLinkSquare = (props: SvgProps) => (
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
      d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22M9.198 7.25h.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243V12a.75.75 0 0 1-1.5 0c0-.964-.002-1.612-.066-2.095-.063-.461-.17-.659-.3-.789s-.328-.237-.79-.3c-.482-.064-1.13-.066-2.094-.066s-1.612.002-2.095.067c-.461.062-.659.169-.789.3s-.237.327-.3.788C6.003 10.388 6 11.036 6 12s.002 1.612.067 2.095c.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066a.75.75 0 0 1 0 1.5h-.052c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08m7.647 1.567c-.483-.065-1.131-.067-2.095-.067a.75.75 0 0 1 0-1.5h.052c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08h-.104c-.899 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65C10 13.7 10 12.95 10 12.052V12a.75.75 0 0 1 1.5 0c0 .964.002 1.612.066 2.095.063.461.17.659.3.789s.328.237.79.3c.482.064 1.13.066 2.094.066s1.612-.002 2.095-.066c.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094s-.002-1.612-.067-2.095c-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgLinkSquare;
