import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCrown = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m19.687 14.093.184-1.705c.097-.91.162-1.51.111-1.888H20a1.5 1.5 0 1 0-1.136-.52c-.326.201-.752.626-1.393 1.265-.495.493-.742.739-1.018.777a.83.83 0 0 1-.45-.063c-.254-.112-.424-.416-.763-1.025l-1.79-3.209c-.209-.375-.384-.69-.542-.942a2 2 0 1 0-1.816 0c-.158.253-.333.567-.543.942L8.76 10.934c-.34.609-.51.913-.764 1.025a.83.83 0 0 1-.45.063c-.275-.038-.522-.284-1.017-.777-.641-.639-1.067-1.064-1.393-1.265A1.5 1.5 0 1 0 4 10.5h.018c-.051.378.014.979.111 1.888l.184 1.705c.102.946.186 1.847.29 2.657h14.794c.104-.81.188-1.71.29-2.657M10.912 21h2.176c2.836 0 4.254 0 5.2-.847.413-.37.674-1.036.863-1.903H4.849c.189.867.45 1.534.863 1.903.946.847 2.364.847 5.2.847"
    />
  </Svg>
);
export default SvgCrown;
