import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGameboy = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C7.75736 22 5.63604 22 4.31802 20.5355C3 19.0711 3 16.714 3 12C3 7.28595 3 4.92893 4.31802 3.46447C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.46447C21 4.92893 21 7.28595 21 12C21 16.714 21 19.0711 19.682 20.5355C18.364 22 16.2426 22 12 22ZM9.25 14C9.25 13.5858 8.91421 13.25 8.5 13.25C8.08579 13.25 7.75 13.5858 7.75 14V14.75H7C6.58579 14.75 6.25 15.0858 6.25 15.5C6.25 15.9142 6.58579 16.25 7 16.25H7.75V17C7.75 17.4142 8.08579 17.75 8.5 17.75C8.91421 17.75 9.25 17.4142 9.25 17V16.25H10C10.4142 16.25 10.75 15.9142 10.75 15.5C10.75 15.0858 10.4142 14.75 10 14.75H9.25V14ZM16.3333 13.8333C16.3333 14.2936 15.9602 14.6667 15.5 14.6667C15.0398 14.6667 14.6667 14.2936 14.6667 13.8333C14.6667 13.3731 15.0398 13 15.5 13C15.9602 13 16.3333 13.3731 16.3333 13.8333ZM16.3333 17.1667C16.3333 17.6269 15.9602 18 15.5 18C15.0398 18 14.6667 17.6269 14.6667 17.1667C14.6667 16.7064 15.0398 16.3333 15.5 16.3333C15.9602 16.3333 16.3333 16.7064 16.3333 17.1667ZM13.8333 16.3333C14.2936 16.3333 14.6667 15.9602 14.6667 15.5C14.6667 15.0398 14.2936 14.6667 13.8333 14.6667C13.3731 14.6667 13 15.0398 13 15.5C13 15.9602 13.3731 16.3333 13.8333 16.3333ZM18 15.5C18 15.9602 17.6269 16.3333 17.1667 16.3333C16.7064 16.3333 16.3333 15.9602 16.3333 15.5C16.3333 15.0398 16.7064 14.6667 17.1667 14.6667C17.6269 14.6667 18 15.0398 18 15.5ZM7.05111 7.11177C7 7.30252 7 7.53501 7 8C7 8.46499 7 8.69748 7.05111 8.88823C7.18981 9.40587 7.59413 9.81019 8.11177 9.94889C8.30252 10 8.53501 10 9 10H15C15.465 10 15.6975 10 15.8882 9.94889C16.4059 9.81019 16.8102 9.40587 16.9489 8.88823C17 8.69748 17 8.46499 17 8C17 7.53501 17 7.30252 16.9489 7.11177C16.8102 6.59413 16.4059 6.18981 15.8882 6.05111C15.6975 6 15.465 6 15 6H9C8.53501 6 8.30252 6 8.11177 6.05111C7.59413 6.18981 7.18981 6.59413 7.05111 7.11177Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgGameboy;
