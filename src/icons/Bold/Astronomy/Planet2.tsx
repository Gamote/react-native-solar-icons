import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlanet2 = (props: SvgProps) => (
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
      d="M12 20a8 8 0 0 0 7.992-8.357q.384-.344.72-.682a.75.75 0 0 0-1.004-1.111 8 8 0 0 0-1.546-2.953q.449-.076.847-.113a.75.75 0 0 0-.138-1.494q-.637.06-1.345.2a.75.75 0 0 0-.472.309 8 8 0 0 0-13.013 7.024.75.75 0 0 0-.73.193q-.503.505-.896.995a.75.75 0 1 0 1.172.937q.303-.38.707-.792a8 8 0 0 0 1.6 3.014.75.75 0 0 0 .591 1.34 18 18 0 0 0 .666-.146A7.97 7.97 0 0 0 12 20m-4.849-1.636a8 8 0 0 1-1.256-1.194.75.75 0 0 1 .3-.132c.996-.198 2.136-.53 3.36-.99a.75.75 0 0 1 .528 1.405c-1.03.387-2.018.693-2.932.91M19.708 9.85a1 1 0 0 0-.06.054c-.687.692-1.568 1.43-2.61 2.171a.75.75 0 0 0 .871 1.222 24 24 0 0 0 2.083-1.654 8 8 0 0 0-.284-1.793m1.229-4.47a.75.75 0 1 0-.346 1.459c.394.093.546.232.602.322.063.102.133.366-.157.948a.75.75 0 0 0 1.343.67c.378-.759.563-1.65.086-2.413-.344-.55-.923-.843-1.528-.987M2.815 16.25a.75.75 0 0 0-1.43-.455c-.191.601-.211 1.262.15 1.84.453.724 1.307 1.006 2.154 1.087a.75.75 0 1 0 .143-1.493c-.694-.066-.948-.267-1.025-.39-.05-.08-.102-.244.008-.589m12.935-1.546a.75.75 0 1 0-.77-1.287 35 35 0 0 1-3.092 1.645.75.75 0 0 0 .638 1.357 37 37 0 0 0 3.224-1.715"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPlanet2;
