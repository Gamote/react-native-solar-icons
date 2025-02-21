import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSliderHorizontal = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16 6.41861C18.8284 6.41861 20.2426 6.41861 21.1213 7.23598C22 8.05336 22 9.36891 22 12C22 14.6311 22 15.9466 21.1213 16.764C20.2426 17.5814 18.8284 17.5814 16 17.5814L8 17.5814C5.17157 17.5814 3.75736 17.5814 2.87868 16.764C2 15.9466 2 14.6311 2 12C2 9.3689 2 8.05336 2.87868 7.23598C3.75736 6.4186 5.17157 6.4186 8 6.4186L16 6.41861Z"
      fill="black"
    />
    <Path
      d="M16.0987 5.02325L16 5.02326L7.90125 5.02325C6.91848 5.0232 6.03622 5.02315 5.27233 5.06946C5.00264 5.08581 4.74771 5.10793 4.50831 5.13787C4.40079 5.15132 4.29376 5.16661 4.18739 5.18411C3.97125 5.21968 3.76738 5.05257 3.78655 4.83435V4.83435C3.8244 4.40341 3.90514 4.01421 4.10423 3.65073C4.41582 3.08186 4.913 2.61936 5.52453 2.32951C5.91527 2.14431 6.33367 2.06921 6.79693 2.034C7.2445 1.99998 7.79521 1.99999 8.46859 2L15.5314 2C16.2048 1.99999 16.7555 1.99998 17.2031 2.034C17.6663 2.06921 18.0847 2.14431 18.4755 2.32952C19.087 2.61937 19.5842 3.08186 19.8958 3.65073C20.0949 4.01421 20.1756 4.40341 20.2134 4.83435V4.83435C20.2326 5.05257 20.0288 5.21968 19.8126 5.18411C19.7062 5.16661 19.5992 5.15132 19.4917 5.13787C19.2523 5.10793 18.9974 5.08581 18.7277 5.06946C17.9638 5.02316 17.0815 5.0232 16.0987 5.02325Z"
      fill="black"
    />
    <Path
      d="M7.90126 18.9767L16.0987 18.9767C17.0815 18.9768 17.9638 18.9768 18.7277 18.9305C18.9974 18.9142 19.2523 18.8921 19.4917 18.8621C19.5992 18.8487 19.7062 18.8334 19.8126 18.8159C20.0287 18.7803 20.2326 18.9474 20.2134 19.1656V19.1656C20.1756 19.5966 20.0949 19.9858 19.8958 20.3493C19.5842 20.9181 19.087 21.3806 18.4755 21.6705C18.0847 21.8557 17.6663 21.9308 17.2031 21.966C16.7555 22 16.2048 22 15.5314 22L8.46859 22C7.79521 22 7.24449 22 6.79693 21.966C6.33367 21.9308 5.91527 21.8557 5.52453 21.6705C4.913 21.3806 4.41582 20.9181 4.10423 20.3493C3.90514 19.9858 3.8244 19.5966 3.78655 19.1656V19.1656C3.76738 18.9474 3.97125 18.7803 4.1874 18.8159C4.29376 18.8334 4.40079 18.8487 4.50831 18.8621C4.74771 18.8921 5.00264 18.9142 5.27233 18.9305C6.03623 18.9768 6.91849 18.9768 7.90126 18.9767Z"
      fill="black"
    />
  </Svg>
);
export default SvgSliderHorizontal;
