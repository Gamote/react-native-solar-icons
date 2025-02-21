import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSsdRound = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M5.5 13.5882H18.5C19.8111 13.5882 20.9538 14.3515 21.5534 15.4813L19 5.11765C18.5 3.52941 17.6046 3 16.5 3H7.5C6.39543 3 5.5 3.52941 5 5.11765L2.44664 15.4813C3.04623 14.3515 4.18893 13.5882 5.5 13.5882Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.5 13.5879H5.5C4.18893 13.5879 3.04623 14.3512 2.44664 15.4809C2.16221 16.0169 2 16.6353 2 17.2938C2 19.3405 3.567 20.9997 5.5 20.9997H18.5C20.433 20.9997 22 19.3405 22 17.2938C22 16.6353 21.8378 16.0169 21.5534 15.4809C20.9538 14.3512 19.8111 13.5879 18.5 13.5879ZM18 16.25C18.4142 16.25 18.75 16.5858 18.75 17V18C18.75 18.4142 18.4142 18.75 18 18.75C17.5858 18.75 17.25 18.4142 17.25 18V17C17.25 16.5858 17.5858 16.25 18 16.25ZM16.25 17C16.25 16.5858 15.9142 16.25 15.5 16.25C15.0858 16.25 14.75 16.5858 14.75 17V18C14.75 18.4142 15.0858 18.75 15.5 18.75C15.9142 18.75 16.25 18.4142 16.25 18V17ZM13 16.25C13.4142 16.25 13.75 16.5858 13.75 17V18C13.75 18.4142 13.4142 18.75 13 18.75C12.5858 18.75 12.25 18.4142 12.25 18V17C12.25 16.5858 12.5858 16.25 13 16.25ZM11.25 17C11.25 16.5858 10.9142 16.25 10.5 16.25C10.0858 16.25 9.75 16.5858 9.75 17V18C9.75 18.4142 10.0858 18.75 10.5 18.75C10.9142 18.75 11.25 18.4142 11.25 18V17Z"
      fill="black"
    />
  </Svg>
);
export default SvgSsdRound;
