import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTuningSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M16 15.25C16.6904 15.25 17.25 14.6904 17.25 14C17.25 13.3096 16.6904 12.75 16 12.75C15.3096 12.75 14.75 13.3096 14.75 14C14.75 14.6904 15.3096 15.25 16 15.25Z"
      fill="black"
    />
    <Path
      d="M9.25 10C9.25 9.30964 8.69036 8.75 8 8.75C7.30964 8.75 6.75 9.30964 6.75 10C6.75 10.6904 7.30964 11.25 8 11.25C8.69036 11.25 9.25 10.6904 9.25 10Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM18.75 14C18.75 15.5188 17.5188 16.75 16 16.75C14.4812 16.75 13.25 15.5188 13.25 14C13.25 12.4812 14.4812 11.25 16 11.25C17.5188 11.25 18.75 12.4812 18.75 14ZM8 7.25C9.51878 7.25 10.75 8.48122 10.75 10C10.75 11.5188 9.51878 12.75 8 12.75C6.48122 12.75 5.25 11.5188 5.25 10C5.25 8.48122 6.48122 7.25 8 7.25ZM16 10.75C15.5858 10.75 15.25 10.4142 15.25 10V5C15.25 4.58579 15.5858 4.25 16 4.25C16.4142 4.25 16.75 4.58579 16.75 5V10C16.75 10.4142 16.4142 10.75 16 10.75ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25C8.41421 13.25 8.75 13.5858 8.75 14L8.75 19C8.75 19.4142 8.41421 19.75 8 19.75C7.58579 19.75 7.25 19.4142 7.25 19L7.25 14ZM16 19.75C15.5858 19.75 15.25 19.4142 15.25 19V18C15.25 17.5858 15.5858 17.25 16 17.25C16.4142 17.25 16.75 17.5858 16.75 18V19C16.75 19.4142 16.4142 19.75 16 19.75ZM7.25 5C7.25 4.58579 7.58579 4.25 8 4.25C8.41421 4.25 8.75 4.58579 8.75 5V6C8.75 6.41421 8.41421 6.75 8 6.75C7.58579 6.75 7.25 6.41421 7.25 6V5Z"
      fill="black"
    />
  </Svg>
);
export default SvgTuningSquare;
