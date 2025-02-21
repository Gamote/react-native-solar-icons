import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarRings = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M21.995 13.52c-.052-.6-.539-1.206-1.351-1.77m1.351 1.77c.027.308-.062.596-.252.861-.386.536-1.191.976-2.3 1.289 1.657-.468 2.634-1.218 2.552-2.15Zm0 0a1.4 1.4 0 0 0-.09-.38 2.3 2.3 0 0 0-.433-.678c-.356-.4-.882-.788-1.543-1.152m2.066 2.21c.095 1.09-1.258 1.932-3.454 2.364m2.103-4.134c-1.787-1.241-5.153-2.282-8.948-2.63-5.52-.507-9.86.64-9.691 2.564m18.639.066c-.559-.388-1.271-.757-2.103-1.09.51.205.976.422 1.388.65m-17.924.374a1.4 1.4 0 0 0 .09.38q.132.342.433.679c.356.399.882.787 1.543 1.152m-2.066-2.211c-.082-.932.895-1.682 2.553-2.15-1.11.313-1.915.753-2.3 1.29-.191.264-.28.552-.253.86Zm0 0c.052.601.539 1.207 1.351 1.77m.715.44c.412.228.878.446 1.388.65-.831-.333-1.544-.702-2.103-1.09m.715.44c.95.524 2.181.997 3.594 1.377m-4.309-1.816c1.157.803 2.976 1.522 5.144 2.024m11.43-4.17c-.951-.523-2.182-.996-3.595-1.375"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M15.274 4.85q.39-.245.753-.423c.881-.43 1.637-.55 2.175-.29.276.133.478.358.61.661.122.284.184.635.188 1.044m-3.726-.991c-1.814 1.145-3.998 3.363-5.892 6.141-3.143 4.61-4.301 9.022-2.594 9.867M15.274 4.85c-.388.245-.794.54-1.21.879M6.787 20.859l.01.005q.171.083.369.114c.237.04.502.025.791-.037.516-.11 1.105-.377 1.741-.775q.224-.14.454-.301.385-.27.784-.595l1.175-.954m-5.324 2.543c-.826-.409-.981-1.652-.566-3.348M18.778 7.49c.15-.615.226-1.17.222-1.647m0 0c.007.856-.241 1.962-.719 3.213"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M11.765 14.281c-.014-.91-.02-1.365.266-1.531s.678.068 1.46.535l.202.12c.222.134.333.2.455.215.123.016.242-.021.482-.096l.218-.067c.843-.262 1.264-.393 1.518-.16.253.235.17.679.005 1.566l-.042.23c-.047.252-.07.379-.043.502s.104.23.256.442l.138.194c.535.749.802 1.123.672 1.433s-.573.351-1.456.433l-.229.021c-.25.023-.376.035-.482.096-.105.06-.178.163-.323.369l-.133.187c-.512.725-.768 1.087-1.102 1.045s-.525-.461-.906-1.298l-.098-.217c-.109-.238-.163-.357-.256-.443-.093-.085-.213-.128-.455-.214l-.22-.078c-.852-.3-1.278-.45-1.354-.787s.248-.636.897-1.235l.167-.155c.184-.17.277-.256.324-.37.048-.113.046-.243.042-.501z"
    />
  </Svg>
);
export default SvgStarRings;
