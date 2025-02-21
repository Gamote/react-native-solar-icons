import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHanger2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10.286 3.91c0-.568.538-1.16 1.374-1.16s1.374.592 1.374 1.16c0 .311-.112.581-.294.78-.113.122-.237.245-.379.385l-.081.08a9 9 0 0 0-.528.558c-.266.312-.553.723-.659 1.23a4.3 4.3 0 0 0-1.773.722l-7.096 4.992c-.927.652-1.166 1.702-.828 2.582.332.866 1.194 1.511 2.307 1.511h1.556c-.009.364-.009.764-.009 1.198v.104c0 .899 0 1.648.08 2.242.084.628.27 1.195.725 1.65.456.456 1.023.642 1.65.726.595.08 1.345.08 2.243.08h4.104c.899 0 1.648 0 2.242-.08.628-.084 1.195-.27 1.65-.726.456-.455.642-1.022.726-1.65.08-.594.08-1.343.08-2.242v-.104c0-.434 0-.834-.009-1.198h1.556c1.125 0 1.99-.657 2.316-1.533.33-.891.073-1.948-.877-2.588l-7.432-5.01a4.3 4.3 0 0 0-1.615-.66q.075-.121.205-.274c.126-.149.274-.298.44-.464l.075-.072c.14-.14.296-.292.436-.445.442-.48.689-1.115.689-1.795 0-1.542-1.364-2.659-2.874-2.659S8.786 2.367 8.786 3.91a.75.75 0 0 0 1.5 0m8.3 11.34h1.712c.508 0 .805-.277.908-.555.098-.264.049-.582-.308-.822l-7.433-5.01a2.9 2.9 0 0 0-1.655-.483 2.9 2.9 0 0 0-1.628.512l-7.095 4.991c-.345.243-.39.558-.29.819.105.275.403.548.906.548h1.711c.11-.447.3-.852.641-1.194.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h4.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.343.342.533.747.642 1.194m-11.47-.134c.13-.13.328-.237.79-.3.482-.064 1.13-.066 2.094-.066h4c.964 0 1.612.002 2.095.066.461.063.659.17.789.3s.237.328.3.79c.064.482.066 1.13.066 2.094s-.002 1.612-.067 2.095c-.062.461-.169.659-.3.789s-.327.237-.788.3c-.483.064-1.131.066-2.095.066h-4c-.964 0-1.612-.002-2.095-.067-.461-.062-.659-.169-.789-.3s-.237-.327-.3-.788c-.064-.483-.066-1.131-.066-2.095s.002-1.612.067-2.095c.062-.461.169-.659.3-.789"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHanger2;
