import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFire = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M20 13.111C20 20.222 13.956 22 10.933 22 8.29 22 3 20.222 3 13.111c0-2.782 1.461-4.65 2.86-5.716.778-.594 1.77-.003 1.87.971l.086.838c.105 1.02 1.033 1.857 1.893 1.298C11.394 9.407 12 6.775 12 5.333V5.01c0-1.43 1.444-2.35 2.602-1.512C17.165 5.35 20 8.584 20 13.11Z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M8 18.445C8 21.289 10.489 22 11.733 22c1.09 0 3.267-.711 3.267-3.555 0-1.102-.59-1.845-1.16-2.274-.398-.299-.957-.03-1.094.449-.178.624-.823 1.016-1.152.456-.3-.512-.3-1.28-.3-1.743 0-.636-.64-1.048-1.155-.674C9.106 15.409 8 16.68 8 18.445Z"
    />
  </Svg>
);
export default SvgFire;
