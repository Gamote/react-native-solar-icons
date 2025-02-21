import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBatteryFull = (props: SvgProps) => (
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
      d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172.944.943 1.127 2.348 1.163 4.828H20c.943 0 1.414 0 1.707.293S22 11.057 22 12s0 1.414-.293 1.707S20.943 14 20 14h-.509c-.036 2.48-.22 3.885-1.163 4.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12m4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363.001.001.002.004.004.007.01.018.026.053q.03.064.075.175c.06.147.132.356.202.631.142.551.274 1.364.274 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01q.01-.022.038-.087c.035-.087.087-.235.142-.447.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01m4.52.292a.75.75 0 0 0-1.317.719l.005.01q.01.022.038.087c.035.087.087.235.142.447.108.424.226 1.111.226 2.101s-.118 1.677-.226 2.101a4 4 0 0 1-.18.534l-.005.01a.75.75 0 0 0 1.317.72L10.5 15l.656.363.001-.002.002-.003.004-.007.01-.018.026-.053q.03-.064.075-.175c.06-.147.132-.356.203-.631.14-.551.273-1.364.273-2.474s-.132-1.923-.274-2.474a5 5 0 0 0-.202-.631 3 3 0 0 0-.102-.228l-.01-.018-.003-.007-.002-.004zM10.5 9c.65-.361.655-.365.656-.364zm3.136-.656a.75.75 0 0 1 1.02.292L14 9l.656-.363.001.001.002.004.004.007.01.018.026.053q.03.064.075.175c.06.147.132.356.203.631.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a3 3 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002l-.001.001-.654-.363c.648.36.653.364.654.363a.75.75 0 0 1-1.317-.719l.005-.01q.01-.022.038-.087a4 4 0 0 0 .142-.447c.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a4 4 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBatteryFull;
