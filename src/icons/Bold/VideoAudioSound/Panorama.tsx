import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPanorama = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M19.21 12.84c0 .778-.625 1.409-1.396 1.409s-1.395-.631-1.395-1.41.624-1.409 1.395-1.409c.77 0 1.395.631 1.395 1.41"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M18.448 3.073c-1.06-.332-2.03.514-2.03 1.547v3.626c-1.296.252-2.804.397-4.418.397s-3.122-.145-4.419-.397V4.62c0-1.033-.97-1.879-2.028-1.547-.982.307-1.831.697-2.45 1.17C2.495 4.705 2 5.338 2 6.13V18.08q.002.323.104.614.091.262.244.493c.324.491.841.894 1.44 1.223.609.334 1.351.62 2.185.852C7.64 21.727 9.737 22 12 22c1.9 0 3.682-.192 5.189-.529 1.493-.333 2.773-.82 3.63-1.445.208-.152.405-.322.576-.511.36-.398.605-.877.605-1.436V6.13c0-.792-.494-1.425-1.103-1.889-.619-.472-1.468-.862-2.45-1.169m2.157 5.154-.082.052c-.822.516-1.95.93-3.253 1.227-1.524.347-3.335.547-5.27.547s-3.745-.2-5.27-.547c-1.302-.297-2.431-.71-3.254-1.227l-.08-.052v9.162l2.83-2.675 1.276-1.08a2.39 2.39 0 0 1 3.192.105l3.09 2.985a.786.786 0 0 0 .975.078l.215-.145a2.91 2.91 0 0 1 3.532.207l1.9 1.653c.157-.188.199-.337.199-.438z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPanorama;
