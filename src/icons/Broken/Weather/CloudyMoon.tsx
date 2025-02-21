import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudyMoon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m21.067 11.857-.642-.388zM15.5 14.25a.75.75 0 0 0 0 1.5zM8.25 8.5a.75.75 0 0 0 1.5 0zm3.893-5.567-.388-.642zm-10.4 12.292a.75.75 0 1 0 1.43-.45zm14.882 4.788a.75.75 0 1 0 .75 1.298zM3.987 7.376a.75.75 0 0 0-1.298-.752zm2.637-4.687a.75.75 0 1 0 .752 1.298zm13.801 8.78A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zm-6.577 6.275A9.3 9.3 0 0 1 2.75 12h-1.5c0 1.122.172 2.206.492 3.225zM21.25 12a9.25 9.25 0 0 1-4.625 8.013l.75 1.298A10.75 10.75 0 0 0 22.75 12zM12 2.75a.38.38 0 0 1-.268-.118.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137-.438-.059-.995.103-1.299.606zM2.75 12c0-1.686.45-3.265 1.237-4.624l-1.298-.752A10.7 10.7 0 0 0 1.25 12zm4.626-8.013A9.2 9.2 0 0 1 12 2.75v-1.5c-1.957 0-3.794.524-5.376 1.439z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.048 15.142c.387-.13.804-.2 1.238-.2.425 0 .834.067 1.215.192m-7.175 1.622a3 3 0 0 0-.54-.05C3.247 16.706 2 17.89 2 19.353S3.247 22 4.786 22h6.5C13.337 22 15 20.42 15 18.47c0-1.544-1.045-2.857-2.5-3.336m-7.174 1.622a3.4 3.4 0 0 1-.23-1.227C5.095 13.58 6.757 12 8.81 12c1.91 0 3.484 1.371 3.69 3.134m-7.174 1.622c.366.068.707.205 1.007.396"
    />
  </Svg>
);
export default SvgCloudyMoon;
