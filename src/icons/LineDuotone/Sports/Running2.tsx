import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRunning2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Circle
      cx={18.5}
      cy={4.5}
      r={2.5}
      stroke="#000"
      strokeWidth={1.5}
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m9 17-1 1.2c-.738.886-1.107 1.328-1.61 1.564S5.31 20 4.157 20H3"
    />
    <Path
      fill="#000"
      d="M13.65 22a.75.75 0 0 0 1.5 0zm-1.085-5.754.452-.598zm1.184 1.015.587-.466zm.557 1.121.726-.186zm-.802-6.827a.75.75 0 0 0-1.009-1.11zm-2.652 1.61.703.26zm.07 1.555-.678.323zm2.728 5.22V22h1.5v-2.06zm-1.538-3.096c.663.503.887.679 1.05.884l1.174-.933c-.308-.388-.717-.691-1.319-1.147zm3.038 3.095c0-.754.005-1.263-.118-1.743l-1.453.372c.065.254.07.538.07 1.371zm-1.988-2.211c.196.247.339.534.417.84l1.453-.372a3.75 3.75 0 0 0-.696-1.401zm-.667-7.283c-.42.382-.945.837-1.354 1.224-.21.198-.41.398-.573.587-.149.17-.327.399-.42.648l1.407.521c-.008.021.014-.035.146-.186.116-.134.276-.296.471-.48.4-.38.865-.779 1.332-1.204zm.522 5.203c-.487-.37-.817-.62-1.055-.832-.234-.208-.32-.33-.363-.418l-1.354.645c.167.35.423.63.72.894.292.26.678.552 1.147.907zm-2.868-2.744a2.75 2.75 0 0 0 .096 2.139l1.354-.645a1.25 1.25 0 0 1-.044-.973z"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="m5.436 8.82-.37-.651zm-1.807.164a.75.75 0 1 0 .742 1.305zm9.778-1.627-.286.694zm-2.96-.714-.055-.748zM21 12.75a.75.75 0 0 0 0-1.5zm-5.232-3.214-.67.336zM5.065 8.17l-1.436.815.742 1.305 1.435-.816zm8.627-1.505c-1.344-.554-2.08-.858-3.3-.77l.11 1.497c.823-.06 1.255.098 2.62.66zM5.806 9.473C8.308 8.05 9.358 7.474 10.501 7.39l-.109-1.496c-1.56.113-2.949.922-5.327 2.274zm13.949 3.277H21v-1.5h-1.245zm-4.658-2.878a5.21 5.21 0 0 0 4.658 2.878v-1.5a3.71 3.71 0 0 1-3.316-2.05zM16.44 9.2a5.33 5.33 0 0 0-2.747-2.537l-.57 1.387c.86.354 1.564.999 1.975 1.82z"
    />
  </Svg>
);
export default SvgRunning2;
