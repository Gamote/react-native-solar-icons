import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBarChair = (props: SvgProps) => (
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
      d="M8.755 2.308A4 4 0 0 0 5.46 6.733l.017.14a1 1 0 0 0 .992.879h1.764L5.267 21.595a.75.75 0 0 0 1.467.314l.944-4.407h8.644l.945 4.407a.75.75 0 0 0 1.467-.314L15.766 7.752h1.764a1 1 0 0 0 .993-.88l.017-.139a4 4 0 0 0-3.295-4.425l-.373-.064a17 17 0 0 0-5.745 0zm5.495 5.444h-4.5a.8.8 0 0 1-.016.157l-1.735 8.093h8.002l-1.734-8.093a.8.8 0 0 1-.017-.157"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBarChair;
