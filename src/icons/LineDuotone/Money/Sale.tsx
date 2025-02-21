import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSale = (props: SvgProps) => (
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
      d="M9.781 3.89c.564-.48.846-.72 1.14-.861a2.5 2.5 0 0 1 2.157 0c.295.14.577.38 1.14.861.225.192.337.287.457.367a2.5 2.5 0 0 0 .908.376c.141.028.288.04.582.064.739.058 1.108.088 1.416.197a2.5 2.5 0 0 1 1.525 1.524c.109.309.138.678.197 1.416.023.294.035.441.063.583.064.324.192.633.376.907.08.12.176.232.367.457.48.564.721.846.862 1.14a2.5 2.5 0 0 1 0 2.157c-.14.294-.381.576-.862 1.14a5 5 0 0 0-.367.457 2.5 2.5 0 0 0-.376.907c-.028.142-.04.289-.063.583-.059.738-.088 1.108-.197 1.416a2.5 2.5 0 0 1-1.525 1.524c-.308.11-.677.139-1.416.197-.294.024-.44.036-.582.064a2.5 2.5 0 0 0-.908.376 5 5 0 0 0-.456.367c-.564.48-.846.72-1.14.861a2.5 2.5 0 0 1-2.157 0c-.295-.14-.577-.38-1.14-.861a5 5 0 0 0-.457-.367 2.5 2.5 0 0 0-.908-.376 5 5 0 0 0-.582-.064c-.739-.058-1.108-.088-1.416-.197a2.5 2.5 0 0 1-1.525-1.524c-.109-.308-.138-.678-.197-1.416-.023-.294-.035-.441-.063-.583a2.5 2.5 0 0 0-.376-.907c-.08-.12-.176-.232-.367-.457-.48-.564-.721-.846-.862-1.14a2.5 2.5 0 0 1 0-2.157c.141-.294.381-.576.862-1.14.191-.225.287-.337.367-.457a2.5 2.5 0 0 0 .376-.907c.028-.142.04-.289.063-.583.059-.738.088-1.107.197-1.416A2.5 2.5 0 0 1 6.42 4.894c.308-.109.677-.139 1.416-.197.294-.024.44-.036.582-.064a2.5 2.5 0 0 0 .908-.376c.12-.08.232-.175.456-.367Z"
      opacity={0.5}
    />
    <Path stroke="#000" strokeLinecap="round" strokeWidth={1.5} d="m9 15 6-6" />
    <Path
      fill="#000"
      d="M15.5 14.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0M10.5 9.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
    />
  </Svg>
);
export default SvgSale;
