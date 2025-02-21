import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPip2 = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.95491 5.06107C2 6.3754 2 8.25027 2 12C2 15.7497 2 17.6246 2.95491 18.9389C3.26331 19.3634 3.6366 19.7367 4.06107 20.0451C5.3754 21 7.25027 21 11 21H13C16.7497 21 18.6246 21 19.9389 20.0451C20.3634 19.7367 20.7367 19.3634 21.0451 18.9389C22 17.6246 22 15.7497 22 12C22 8.25027 22 6.3754 21.0451 5.06107C20.7367 4.6366 20.3634 4.26331 19.9389 3.95491C18.6246 3 16.7497 3 13 3H11C7.25027 3 5.3754 3 4.06107 3.95491C3.6366 4.26331 3.26331 4.6366 2.95491 5.06107ZM11.174 12.4404C11 12.8692 11 13.4128 11 14.5C11 15.5872 11 16.1308 11.174 16.5596C11.406 17.1313 11.8509 17.5856 12.411 17.8224C12.8311 18 13.3636 18 14.4286 18H15.5714C16.6364 18 17.1689 18 17.589 17.8224C18.1491 17.5856 18.594 17.1313 18.826 16.5596C19 16.1308 19 15.5872 19 14.5C19 13.4128 19 12.8692 18.826 12.4404C18.594 11.8687 18.1491 11.4144 17.589 11.1776C17.1689 11 16.6364 11 15.5714 11H14.4286C13.3636 11 12.8311 11 12.411 11.1776C11.8509 11.4144 11.406 11.8687 11.174 12.4404Z"
      fill="black"
    />
  </Svg>
);
export default SvgPip2;
