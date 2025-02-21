import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTreadmill = (props: SvgProps) => (
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
      d="M15 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M12.25 4a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0M6.21 6.047a5.02 5.02 0 0 1 4.637-.357 1.817 1.817 0 0 1 .569 2.955l-1.654 1.654a.84.84 0 0 0 .056 1.24l.997.83a2.6 2.6 0 0 1 .935 1.998V16a.75.75 0 0 1-1.5 0v-1.633a1.1 1.1 0 0 0-.396-.846l-.996-.83A2.34 2.34 0 0 1 8.7 9.238l1.654-1.654a.317.317 0 0 0-.1-.516 3.52 3.52 0 0 0-3.25.25L4.898 8.637a.75.75 0 0 1-.795-1.272zm16.525.806a.75.75 0 0 1-.588.882l-1.123.225c-.35.07-.55.111-.695.157a.6.6 0 0 0-.113.046l-.011.007h-.001l-.001.001-.006.012a.6.6 0 0 0-.04.115 7 7 0 0 0-.124.702l-1.09 7.274a3.261 3.261 0 1 1 .546 6.476H3.087a1.837 1.837 0 0 1-.317-3.646l14.615-2.558 1.17-7.802c.046-.307.09-.595.153-.832.07-.265.183-.538.41-.776a1.73 1.73 0 0 1 .755-.447c.234-.075.52-.132.823-.193l1.157-.231a.75.75 0 0 1 .882.588M11.75 10a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75m-5.609 3.798.329-.328 1.06 1.06-.328.329-.085.085c-.494.495-.885.886-1.393 1.097-.509.21-1.061.21-1.76.21l-.12-.001H3v-1.5h.843c.879 0 1.11-.013 1.307-.095.198-.082.37-.236.991-.857m15.109 5.69a1.76 1.76 0 0 0-2.065-1.734L3.03 20.581a.337.337 0 0 0 .058.669h16.402c.973 0 1.761-.788 1.761-1.761"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTreadmill;
