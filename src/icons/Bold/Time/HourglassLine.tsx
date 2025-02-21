import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHourglassLine = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.19825 3.29918C5.80046 2 7.86697 2 12 2C16.133 2 18.1995 2 18.8017 3.29918C18.8535 3.41086 18.8972 3.52686 18.9323 3.6461C19.3414 5.0333 17.8802 6.64111 14.9577 9.85674L13 12L14.9577 14.1433C17.8802 17.3589 19.3414 18.9667 18.9323 20.3539C18.8972 20.4731 18.8535 20.5891 18.8017 20.7008C18.1995 22 16.133 22 12 22C7.86697 22 5.80046 22 5.19825 20.7008C5.14649 20.5891 5.10282 20.4731 5.06765 20.3539C4.65857 18.9667 6.11981 17.3589 9.0423 14.1433L11 12L9.0423 9.85674C6.11981 6.64111 4.65857 5.0333 5.06765 3.6461C5.10282 3.52686 5.14649 3.41086 5.19825 3.29918ZM10 17.75C9.58579 17.75 9.25 18.0858 9.25 18.5C9.25 18.9142 9.58579 19.25 10 19.25H14C14.4142 19.25 14.75 18.9142 14.75 18.5C14.75 18.0858 14.4142 17.75 14 17.75H10ZM9.25 5.5C9.25 5.08579 9.58579 4.75 10 4.75H14C14.4142 4.75 14.75 5.08579 14.75 5.5C14.75 5.91421 14.4142 6.25 14 6.25H10C9.58579 6.25 9.25 5.91421 9.25 5.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgHourglassLine;
