import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPrinter2 = (props: SvgProps) => (
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
      d="M6 17.983c-1.553-.047-2.48-.22-3.121-.862C2 16.243 2 14.828 2 12s0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12s0 4.243-.879 5.121c-.641.642-1.567.815-3.121.862"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M9 10H6M19 15H5"
    />
    <Path
      fill="#000"
      d="m17.121 2.879-.53.53zm-10.242 0 .53.53zm0 18.242.53-.53zM18.75 15a.75.75 0 0 0-1.5 0zm-12 0a.75.75 0 0 0-1.5 0zm10.5 1c0 1.435-.002 2.436-.103 3.192-.099.734-.28 1.122-.556 1.399l1.06 1.06c.603-.601.861-1.36.983-2.26.118-.878.116-1.998.116-3.391zM12 22.75c1.393 0 2.513.002 3.392-.116.9-.122 1.658-.38 2.26-.982L16.59 20.59c-.277.277-.665.457-1.4.556-.755.101-1.756.103-3.191.103zm0-20c1.435 0 2.437.002 3.192.103.734.099 1.122.28 1.399.556l1.06-1.06c-.601-.603-1.36-.861-2.26-.982-.878-.119-1.998-.117-3.391-.117zm0-1.5c-1.393 0-2.513-.002-3.392.117-.9.12-1.658.38-2.26.981L7.41 3.41c.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103zM5.25 16c0 1.393-.002 2.513.117 3.392.12.9.38 1.658.981 2.26L7.41 20.59c-.277-.277-.457-.665-.556-1.4-.101-.755-.103-1.756-.103-3.191zM12 21.25c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556l-1.06 1.06c.601.603 1.36.861 2.26.983.878.118 1.998.116 3.391.116zm6.732-15.273c-.046-1.542-.208-2.757-1.08-3.629L16.59 3.41c.41.41.595 1.049.642 2.614zm-11.965.046c.047-1.565.231-2.203.642-2.614l-1.06-1.06c-.873.871-1.035 2.086-1.081 3.628zM18.75 16v-1h-1.5v1zm-12 0v-1h-1.5v1z"
    />
    <Circle cx={17} cy={10} r={1} fill="#000" />
  </Svg>
);
export default SvgPrinter2;
