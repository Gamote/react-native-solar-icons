import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRulerCrossPen = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M13.254 19.424a.75.75 0 0 0-1.061 1.061zm5.254.53.53.531zM4.045 5.493l.53.53zm-.53 6.315a.75.75 0 1 0 1.06-1.06zm7.762-7.762.53.53a.75.75 0 0 0 0-1.06zm-5.785 0-.53-.53zm14.463 8.678.53-.53a.75.75 0 0 0-1.06 0zm0 5.785-.53-.53zM8.336 5.926a.75.75 0 0 0 1.06 1.06zm8.678 8.677a.75.75 0 0 0 1.06 1.061zM4.96 3.515 3.515 4.961l1.06 1.061 1.447-1.446zm14.078 16.97 1.446-1.446-1.06-1.061-1.447 1.446zm-6.846 0c.667.667 1.219 1.221 1.715 1.6.514.392 1.054.665 1.708.665v-1.5c-.194 0-.418-.068-.798-.358-.397-.303-.868-.77-1.564-1.468zm5.785-1.06c-.697.696-1.167 1.164-1.565 1.467-.38.29-.604.358-.797.358v1.5c.653 0 1.194-.273 1.707-.665.497-.379 1.049-.933 1.716-1.6zM3.515 4.96c-.667.667-1.221 1.22-1.6 1.716-.392.513-.665 1.054-.665 1.707h1.5c0-.193.068-.417.358-.797.303-.398.77-.868 1.468-1.565zm1.06 5.785C3.88 10.05 3.412 9.58 3.109 9.183c-.29-.38-.358-.604-.358-.798h-1.5c0 .654.273 1.194.665 1.708.379.496.933 1.048 1.6 1.715zm7.232-7.231c-.667-.667-1.219-1.221-1.715-1.6-.514-.392-1.054-.665-1.708-.665v1.5c.194 0 .418.068.798.358.397.303.868.77 1.564 1.468zm-5.785 1.06c.697-.696 1.167-1.164 1.565-1.467.38-.29.604-.358.797-.358v-1.5c-.653 0-1.194.273-1.707.665-.497.379-1.049.933-1.716 1.6zm13.402 8.679c.697.696 1.165 1.167 1.468 1.564.29.38.358.604.358.798h1.5c0-.654-.273-1.194-.665-1.708-.379-.496-.933-1.048-1.6-1.715zm1.061 5.785c.667-.667 1.221-1.22 1.6-1.716.392-.513.665-1.054.665-1.707h-1.5c0 .193-.068.417-.358.797-.303.398-.77.868-1.468 1.565zM10.747 3.515l-2.411 2.41 1.06 1.061 2.411-2.41zm8.677 8.678-2.41 2.41 1.06 1.061 2.411-2.41z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m14.36 4.079.927-.927a3.932 3.932 0 0 1 5.561 5.561l-.927.927m-5.56-5.561s.115 1.97 1.853 3.707C17.952 9.524 19.92 9.64 19.92 9.64m-5.56-5.561-8.522 8.52c-.577.578-.866.867-1.114 1.185a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526L2.589 19l-.267.802m17.6-10.162L11.4 18.16c-.577.577-.866.866-1.184 1.114a6.6 6.6 0 0 1-1.211.749c-.364.173-.751.302-1.526.56L5 21.411l-.802.267m0 0-.802.268a1.06 1.06 0 0 1-1.342-1.342l.268-.802m1.876 1.876-1.876-1.876"
    />
  </Svg>
);
export default SvgRulerCrossPen;
