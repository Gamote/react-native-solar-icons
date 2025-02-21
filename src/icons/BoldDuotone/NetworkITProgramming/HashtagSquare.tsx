import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHashtagSquare = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      opacity={0.5}
      d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"
      fill="black"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7184 7.21546C11.8374 6.81872 11.6123 6.40061 11.2155 6.28158C10.8188 6.16256 10.4007 6.3877 10.2816 6.78444L9.54198 9.24995H7C6.58579 9.24995 6.25 9.58574 6.25 9.99995C6.25 10.4142 6.58579 10.75 7 10.75H9.09198L8.34198 13.25H6C5.58579 13.25 5.25 13.5857 5.25 14C5.25 14.4142 5.58579 14.75 6 14.75H7.89198L7.28163 16.7844C7.16261 17.1812 7.38774 17.5993 7.78449 17.7183C8.18123 17.8373 8.59935 17.6122 8.71837 17.2155L9.45802 14.75H12.892L12.2816 16.7844C12.1626 17.1812 12.3877 17.5993 12.7845 17.7183C13.1812 17.8373 13.5993 17.6122 13.7184 17.2155L14.458 14.75H17C17.4142 14.75 17.75 14.4142 17.75 14C17.75 13.5857 17.4142 13.25 17 13.25H14.908L15.658 10.75H18C18.4142 10.75 18.75 10.4142 18.75 9.99995C18.75 9.58574 18.4142 9.24995 18 9.24995H16.108L16.7184 7.21546C16.8374 6.81872 16.6123 6.40061 16.2155 6.28158C15.8188 6.16256 15.4007 6.3877 15.2816 6.78444L14.542 9.24995H11.108L11.7184 7.21546ZM14.092 10.75L13.342 13.25H9.90802L10.658 10.75H14.092Z"
      fill="black"
    />
  </Svg>
);
export default SvgHashtagSquare;
