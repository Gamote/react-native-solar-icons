import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRulerAngular = (props: SvgProps) => (
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
      d="M5.948 1.25h12.59c.67 0 1.229 0 1.681.046.473.048.913.153 1.309.417.3.201.558.459.759.76.264.395.369.835.417 1.308.046.452.046 1.011.046 1.68v.077c0 .67 0 1.229-.046 1.681-.048.473-.153.913-.418 1.309-.2.3-.458.558-.758.759-.396.264-.835.369-1.309.417-.452.046-1.011.046-1.68.046H11c-.493 0-.787.002-.997.03a.7.7 0 0 0-.177.042l-.003.001-.001.003-.005.01a.7.7 0 0 0-.037.167c-.028.21-.03.504-.03.997v7.538c0 .67 0 1.229-.046 1.681-.048.473-.153.913-.417 1.309-.201.3-.459.558-.76.759-.395.264-.835.369-1.308.417-.452.046-1.011.046-1.68.046h-.077c-.67 0-1.229 0-1.681-.046-.473-.048-.913-.153-1.309-.418-.3-.2-.558-.458-.759-.758-.264-.396-.369-.835-.417-1.309-.046-.452-.046-1.011-.046-1.68V5.947c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08M2.75 9.75H5a.75.75 0 1 0 0-1.5H2.75V6c0-.964.002-1.612.067-2.095.062-.461.169-.659.3-.789s.327-.237.788-.3C4.388 2.753 5.036 2.75 6 2.75h2.25V5a.75.75 0 1 0 1.5 0V2.75h1.5V4a.75.75 0 0 0 1.5 0V2.75h1.5V5a.75.75 0 0 0 1.5 0V2.75h1.5V4a.75.75 0 0 0 1.5 0V2.75c.583 0 .994.005 1.317.038.355.036.519.1.628.173.136.09.253.208.344.345.073.108.137.272.173.627.037.367.038.85.038 1.567 0 .718 0 1.2-.038 1.567-.036.355-.1.519-.173.627a1.3 1.3 0 0 1-.344.345c-.109.073-.273.137-.628.173-.367.037-.85.038-1.567.038h-7.545c-.433 0-.83 0-1.152.043-.356.048-.731.16-1.04.47s-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152V18.5c0 .718 0 1.2-.038 1.567-.036.355-.1.519-.173.628a1.3 1.3 0 0 1-.345.344c-.108.073-.272.137-.627.173-.367.037-.85.038-1.567.038-.718 0-1.2 0-1.567-.038-.355-.036-.519-.1-.627-.173a1.3 1.3 0 0 1-.345-.344c-.073-.109-.137-.273-.173-.628-.033-.323-.037-.734-.038-1.317H4a.75.75 0 0 0 0-1.5H2.75v-1.5H5a.75.75 0 0 0 0-1.5H2.75v-1.5H4a.75.75 0 0 0 0-1.5H2.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRulerAngular;
