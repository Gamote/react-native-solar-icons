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
      fill="#000"
      d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408-.153.03-.313.043-.632.068-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536-.025.319-.038.479-.068.632-.07.352-.208.687-.408.985-.087.13-.191.252-.399.495-.521.612-.782.918-.935 1.238-.353.74-.353 1.6 0 2.34.153.32.414.626.935 1.238.208.243.312.365.399.495.2.298.338.633.408.985.03.153.043.313.068.632.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214.319.025.479.038.632.068.352.07.687.209.985.408.13.087.252.191.495.399.612.521.918.782 1.238.935.74.353 1.6.353 2.34 0 .32-.153.626-.414 1.238-.935.243-.208.365-.312.495-.399.298-.2.633-.338.985-.408.153-.03.313-.043.632-.068.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536.025-.319.038-.479.068-.632.07-.352.209-.687.408-.985.087-.13.191-.252.399-.495.521-.612.782-.918.935-1.238.353-.74.353-1.6 0-2.34-.153-.32-.414-.626-.935-1.238-.208-.243-.312-.365-.399-.495a2.7 2.7 0 0 1-.408-.985 6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214-.319-.025-.479-.038-.632-.068a2.7 2.7 0 0 1-.985-.408 6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M15.83 8.17a.814.814 0 0 1 0 1.151l-6.51 6.51a.814.814 0 0 1-1.151-1.15l6.51-6.511a.814.814 0 0 1 1.152 0M15.798 14.714a1.085 1.085 0 1 1-2.17 0 1.085 1.085 0 0 1 2.17 0M9.287 10.373a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17"
    />
  </Svg>
);
export default SvgSale;
