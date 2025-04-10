import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWadOfMoney = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M14.25 18.9999H15.75C18.0674 18.9946 19.3075 18.9376 20.2223 18.3263C20.659 18.0345 21.034 17.6595 21.3259 17.2227C22 16.2138 22 14.8094 22 12.0004C22 9.1915 22 7.78704 21.3259 6.77815C21.034 6.34139 20.659 5.96638 20.2223 5.67455C19.3075 5.06329 18.0674 5.00629 15.75 5.00098H14.25V9H15C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15H14.25V18.9999Z"
      fill={props.primaryColor}
    />
    <Path
      d="M9.75 18.9999V15H9C7.34315 15 6 13.6569 6 12C6 10.3431 7.34315 9 9 9H9.75V5.00098H8.25C5.93257 5.00629 4.69253 5.06329 3.77772 5.67455C3.34096 5.96639 2.96596 6.34139 2.67412 6.77815C2 7.78704 2 9.19151 2 12.0004C2 14.8094 2 16.2138 2.67412 17.2227C2.96596 17.6595 3.34096 18.0345 3.77772 18.3263C4.69253 18.9376 5.93258 18.9946 8.25 18.9999H9.75Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M9.75 19L14.25 19V5H9.75V19Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgWadOfMoney;
