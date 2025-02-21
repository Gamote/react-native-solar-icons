import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLinkRoundAngle = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.27732 7.93436C-0.358717 10.5704 -0.358717 14.8443 2.27732 17.4803C3.49943 18.7024 5.07536 19.3583 6.6749 19.4469C7.08848 19.4699 7.44233 19.1532 7.46524 18.7396C7.48815 18.326 7.17145 17.9722 6.75787 17.9492C5.51259 17.8803 4.28911 17.3708 3.33798 16.4196C1.28773 14.3694 1.28773 11.0453 3.33798 8.99502L6.16641 6.1666C8.21666 4.11634 11.5408 4.11634 13.591 6.1666C15.6413 8.21685 15.6413 11.541 13.591 13.5912L12.1768 15.0054C11.8839 15.2983 11.8839 15.7732 12.1768 16.0661C12.4697 16.359 12.9446 16.359 13.2375 16.0661L14.6517 14.6519C17.2877 12.0158 17.2877 7.74197 14.6517 5.10594C12.0157 2.4699 7.74179 2.4699 5.10575 5.10594L2.27732 7.93436Z"
      fill="black"
    />
    <Path
      opacity={0.5}
      d="M10.409 17.8338C8.35877 15.7835 8.35877 12.4594 10.409 10.4091L11.8232 8.99493C12.1161 8.70204 12.1161 8.22716 11.8232 7.93427C11.5303 7.64138 11.0555 7.64138 10.7626 7.93427L9.34837 9.34848C6.71233 11.9845 6.71233 16.2584 9.34837 18.8944C11.9844 21.5305 16.2583 21.5305 18.8943 18.8944L21.7227 16.066C24.3588 13.43 24.3588 9.15609 21.7227 6.52006C20.5006 5.29795 18.9247 4.64202 17.3252 4.55341C16.9116 4.5305 16.5577 4.8472 16.5348 5.26078C16.5119 5.67436 16.8286 6.02821 17.2422 6.05112C18.4875 6.1201 19.7109 6.62959 20.6621 7.58072C22.7123 9.63097 22.7123 12.9551 20.6621 15.0053L17.8336 17.8338C15.7834 19.884 12.4593 19.884 10.409 17.8338Z"
      fill="black"
    />
  </Svg>
);
export default SvgLinkRoundAngle;
