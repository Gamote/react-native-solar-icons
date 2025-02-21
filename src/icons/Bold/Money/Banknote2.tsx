import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBanknote2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.9414 8.18881C21.5215 8.76206 21.771 9.48386 21.8877 10.3411C22 11.1668 22 12.2166 22 13.5191V13.6236C22 14.9261 22 15.9759 21.8877 16.8016C21.771 17.6589 21.5215 18.3807 20.9414 18.9539C20.3612 19.5272 19.6307 19.7738 18.7632 19.889C17.9276 20 16.8651 20 15.547 20H10.622C9.30387 20 8.24141 20 7.4058 19.889C6.53824 19.7738 5.80777 19.5272 5.22762 18.9539C4.87566 18.6062 4.64535 18.2037 4.49261 17.7495C5.36407 17.8574 6.4422 17.8573 7.68787 17.8573H12.6974C13.979 17.8573 15.0833 17.8574 15.9676 17.7399C16.9154 17.614 17.8238 17.3301 18.5607 16.602C19.2975 15.8739 19.5848 14.9762 19.7123 14.0398C19.8312 13.166 19.8311 12.0748 19.831 10.8084V10.6203C19.8311 9.38912 19.8311 8.32356 19.7219 7.46234C20.1818 7.61328 20.5893 7.84088 20.9414 8.18881Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.1926 9.04765C9.26108 9.04765 8.50591 9.79385 8.50591 10.7143C8.50591 11.6348 9.26108 12.381 10.1926 12.381C11.1242 12.381 11.8793 11.6348 11.8793 10.7143C11.8793 9.79385 11.1242 9.04765 10.1926 9.04765Z"
      fill={props.primaryColor}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.84691 5.83684C2 6.67369 2 8.02057 2 10.7143C2 13.4081 2 14.755 2.84691 15.5918C3.69381 16.4287 5.05688 16.4287 7.78303 16.4287H12.6022C15.3284 16.4287 16.6914 16.4287 17.5384 15.5918C18.3853 14.755 18.3853 13.4081 18.3853 10.7143C18.3853 8.02057 18.3853 6.67369 17.5384 5.83684C16.6914 5 15.3284 5 12.6022 5H7.78303C5.05688 5 3.69381 5 2.84691 5.83684ZM7.06015 10.7143C7.06015 9.00487 8.46261 7.61907 10.1926 7.61907C11.9226 7.61907 13.3251 9.00487 13.3251 10.7143C13.3251 12.4238 11.9226 13.8096 10.1926 13.8096C8.46261 13.8096 7.06015 12.4238 7.06015 10.7143ZM15.4937 13.3334C15.0945 13.3334 14.7709 13.0136 14.7709 12.6191V8.80956C14.7709 8.41506 15.0945 8.09526 15.4937 8.09526C15.893 8.09526 16.2166 8.41506 16.2166 8.80956V12.6191C16.2166 13.0136 15.893 13.3334 15.4937 13.3334ZM4.16864 12.6191C4.16864 13.0136 4.49228 13.3334 4.89152 13.3334C5.29075 13.3334 5.61439 13.0136 5.61439 12.6191L5.61439 8.80956C5.61439 8.41506 5.29075 8.09526 4.89152 8.09526C4.49228 8.09526 4.16864 8.41506 4.16864 8.80956L4.16864 12.6191Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgBanknote2;
