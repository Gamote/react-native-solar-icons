import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVolume = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7633 6.19161C12.1616 6.60837 11.8608 6.81674 11.5254 6.93781V17.0622C11.8608 17.1833 12.1616 17.3916 12.7633 17.8084C15.137 19.4526 16.3239 20.2747 17.3201 19.9176C17.5111 19.8491 17.696 19.7503 17.8611 19.6284C18.7223 18.9926 18.7877 17.5132 18.9186 14.5546C18.967 13.4591 19 12.5215 19 12C19 11.4785 18.967 10.5409 18.9186 9.44537C18.7877 6.48675 18.7223 5.00744 17.8611 4.37162C17.696 4.24972 17.5111 4.15088 17.3201 4.08241C16.3239 3.72527 15.137 4.54738 12.7633 6.19161Z"
      fill={props.primaryColor}
    />
    <Path
      opacity={0.5}
      d="M5.68099 8.16332C5.05988 8.95185 5.04093 9.87295 5.00304 11.7152C5.00104 11.8119 5 11.9069 5 11.9997C5 12.0925 5.00104 12.1875 5.00304 12.2842C5.04093 14.1264 5.05988 15.0475 5.68099 15.8361C5.79436 15.98 5.9607 16.151 6.10011 16.267C6.86393 16.9023 7.8724 16.9023 9.88932 16.9023C10.6099 16.9023 10.9702 16.9023 11.3137 16.9952C11.385 17.0145 11.4556 17.0367 11.5253 17.0619V6.9375C11.4556 6.96266 11.385 6.98491 11.3137 7.00421C10.9702 7.09711 10.6099 7.09711 9.88932 7.09711C7.8724 7.09711 6.86393 7.09711 6.10011 7.73243C5.9607 7.84839 5.79436 8.0194 5.68099 8.16332Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgVolume;
