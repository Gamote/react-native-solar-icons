import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlbum = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M17.29 11.969a1.33 1.33 0 0 1-1.322 1.337 1.33 1.33 0 0 1-1.323-1.337 1.33 1.33 0 0 1 1.323-1.338c.73 0 1.323.599 1.323 1.338"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M18.132 7.408c-.849-.12-1.942-.12-3.305-.12H9.173c-1.363 0-2.456 0-3.305.12-.877.125-1.608.393-2.152 1.02-.543.628-.71 1.397-.716 2.293-.006.866.139 1.962.319 3.329l.365 2.771c.141 1.069.255 1.933.432 2.61.185.704.457 1.289.968 1.741s1.12.648 1.834.74C7.605 22 8.468 22 9.533 22h4.934c1.065 0 1.928 0 2.615-.088.715-.092 1.323-.288 1.834-.74s.783-1.037.968-1.741c.177-.677.291-1.542.432-2.61l.365-2.771c.18-1.367.325-2.463.319-3.33-.007-.895-.172-1.664-.716-2.291-.544-.628-1.275-.896-2.152-1.021M6.052 8.732c-.726.104-1.094.292-1.34.578-.248.285-.384.678-.39 1.42-.005.762.126 1.765.315 3.195l.05.38.371-.273c.96-.702 2.376-.668 3.288.095l3.384 2.833c.32.268.871.318 1.269.084l.235-.138c1.125-.662 2.634-.592 3.672.19l1.832 1.38c.09-.496.171-1.105.273-1.876l.352-2.675c.189-1.43.32-2.433.314-3.195-.005-.742-.141-1.135-.388-1.42-.247-.286-.615-.474-1.342-.578-.745-.106-1.745-.107-3.172-.107h-5.55c-1.427 0-2.427.001-3.172.107"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="M8.859 2h6.282c.21 0 .37 0 .51.015a2.62 2.62 0 0 1 2.159 1.672H6.19a2.62 2.62 0 0 1 2.159-1.672c.14-.015.3-.015.51-.015M6.88 4.5c-1.252 0-2.278.84-2.62 1.954l-.021.07c.358-.12.73-.2 1.108-.253.973-.139 2.202-.139 3.629-.139h6.203c1.427 0 2.656 0 3.628.139.378.053.75.132 1.11.253l-.021-.07C19.553 5.34 18.527 4.5 17.276 4.5z"
    />
  </Svg>
);
export default SvgAlbum;
