import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWidget = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M2.55078 4.5C2.61472 3.84994 2.75923 3.41238 3.08582 3.08579C3.67161 2.5 4.61442 2.5 6.50004 2.5C8.38565 2.5 9.32846 2.5 9.91425 3.08579C10.5 3.67157 10.5 4.61438 10.5 6.5C10.5 8.38562 10.5 9.32843 9.91425 9.91421C9.32846 10.5 8.38565 10.5 6.50004 10.5C4.61442 10.5 3.67161 10.5 3.08582 9.91421C2.77645 9.60484 2.63047 9.19589 2.56158 8.60106"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M21.4493 15.5C21.3853 14.8499 21.2408 14.4124 20.9142 14.0858C20.3284 13.5 19.3856 13.5 17.5 13.5C15.6144 13.5 14.6716 13.5 14.0858 14.0858C13.5 14.6716 13.5 15.6144 13.5 17.5C13.5 19.3856 13.5 20.3284 14.0858 20.9142C14.6716 21.5 15.6144 21.5 17.5 21.5C19.3856 21.5 20.3284 21.5 20.9142 20.9142C21.2408 20.5876 21.3853 20.1501 21.4493 19.5"
      stroke="black"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M2.5 17.5C2.5 15.6144 2.5 14.6716 3.08579 14.0858C3.67157 13.5 4.61438 13.5 6.5 13.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5C10.5 19.3856 10.5 20.3284 9.91421 20.9142C9.32843 21.5 8.38562 21.5 6.5 21.5C4.61438 21.5 3.67157 21.5 3.08579 20.9142C2.5 20.3284 2.5 19.3856 2.5 17.5Z"
      stroke="black"
      strokeWidth={1.5}
    />
    <Path
      d="M13.5 6.5C13.5 4.61438 13.5 3.67157 14.0858 3.08579C14.6716 2.5 15.6144 2.5 17.5 2.5C19.3856 2.5 20.3284 2.5 20.9142 3.08579C21.5 3.67157 21.5 4.61438 21.5 6.5C21.5 8.38562 21.5 9.32843 20.9142 9.91421C20.3284 10.5 19.3856 10.5 17.5 10.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5Z"
      stroke="black"
      strokeWidth={1.5}
    />
  </Svg>
);
export default SvgWidget;
