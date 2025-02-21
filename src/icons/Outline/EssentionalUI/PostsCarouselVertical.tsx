import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPostsCarouselVertical = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M5 1.25a.75.75 0 0 1 .75.75v.5c0 .966.784 1.75 1.75 1.75h9a1.75 1.75 0 0 0 1.75-1.75V2a.75.75 0 0 1 1.5 0v.5a3.25 3.25 0 0 1-3.25 3.25h-9A3.25 3.25 0 0 1 4.25 2.5V2A.75.75 0 0 1 5 1.25"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.948 6.75h6.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v1.104c0 .899 0 1.648-.08 2.242-.084.628-.27 1.195-.726 1.65-.455.456-1.022.642-1.65.726-.594.08-1.344.08-2.242.08H8.948c-.898 0-1.648 0-2.242-.08-.628-.084-1.195-.27-1.65-.726-.456-.455-.642-1.022-.726-1.65-.08-.594-.08-1.344-.08-2.242v-1.104c0-.899 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08M6.905 8.317c-.461.062-.659.169-.789.3s-.237.327-.3.788c-.064.483-.066 1.131-.066 2.095v1c0 .964.002 1.612.067 2.095.062.461.169.659.3.789s.327.237.788.3c.483.064 1.131.066 2.095.066h6c.964 0 1.612-.002 2.095-.066.461-.063.659-.17.789-.3s.237-.328.3-.79c.064-.482.066-1.13.066-2.094v-1c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.064-1.131-.066-2.095-.066H9c-.964 0-1.612.002-2.095.067"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M7.5 18.25a3.25 3.25 0 0 0-3.25 3.25v.5a.75.75 0 0 0 1.5 0v-.5c0-.966.784-1.75 1.75-1.75h9c.966 0 1.75.784 1.75 1.75v.5a.75.75 0 0 0 1.5 0v-.5a3.25 3.25 0 0 0-3.25-3.25z"
    />
  </Svg>
);
export default SvgPostsCarouselVertical;
