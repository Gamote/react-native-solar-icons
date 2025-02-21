import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMusicLibrary2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M11.25 17a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987s.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303s-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716s-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56s2.636-.987 6.01-.987M12.75 10.5a.75.75 0 0 0-1.5 0v4.378A2.25 2.25 0 1 0 12.75 17v-3.68c.67.543 1.512.93 2.25.93a.75.75 0 1 0 0-1.5c-.305 0-.886-.219-1.416-.69-.519-.46-.834-1.021-.834-1.56"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M8.51 2h6.98c.232 0 .41 0 .566.015 1.108.109 2.015.775 2.4 1.672H5.543c.384-.897 1.291-1.563 2.399-1.672C8.099 2 8.277 2 8.51 2"
      opacity={0.4}
    />
    <Path
      fill="#000"
      d="M6.31 4.723c-1.39 0-2.53.84-2.911 1.953l-.023.07c.398-.12.812-.199 1.232-.253 1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.951 0 4.032.138.419.054.833.133 1.232.253l-.023-.07c-.38-1.114-1.521-1.953-2.912-1.953z"
      opacity={0.7}
    />
  </Svg>
);
export default SvgMusicLibrary2;
