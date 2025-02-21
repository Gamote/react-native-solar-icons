import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMaskSad = (props: SvgProps) => (
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
      d="M21 11.406V6.208c0-2.156 0-3.234-.707-3.824s-1.788-.412-3.95-.057l-1.055.173c-1.64.269-2.46.403-3.288.403S10.352 2.77 8.712 2.5l-1.054-.173c-2.162-.355-3.243-.532-3.95.057S3 4.052 3 6.208v5.198c0 5.405 4.239 8.027 6.899 9.14C10.62 20.85 10.98 21 12 21c1.02 0 1.38-.151 2.101-.453C16.761 19.433 21 16.81 21 11.407M7.996 13.812a.745.745 0 0 0-.04 1.056.76.76 0 0 0 1.054.033l.005-.005.01-.007a1 1 0 0 1 .101-.075c.101-.068.268-.168.507-.271.475-.206 1.247-.43 2.367-.43s1.892.224 2.367.43c.239.103.406.203.506.271q.075.052.103.075l.01.008.005.004c.3.274.769.26 1.052-.033a.73.73 0 0 0-.026-1.043l-.001-.002h-.001l-.003-.004-.008-.007-.02-.017-.06-.05a3 3 0 0 0-.202-.148 4.6 4.6 0 0 0-.751-.406c-.663-.287-1.64-.554-2.971-.554-1.33 0-2.308.268-2.97.554-.33.143-.58.289-.752.406a3 3 0 0 0-.262.198zM8.5 8.208c-.743 0-1.205.333-1.329.576a.756.756 0 0 1-1.006.33.733.733 0 0 1-.336-.99C6.288 7.22 7.397 6.73 8.5 6.73c1.104 0 2.212.49 2.671 1.393a.733.733 0 0 1-.336.99.756.756 0 0 1-1.006-.33c-.123-.243-.586-.576-1.329-.576m7 0c-.743 0-1.206.333-1.329.576a.756.756 0 0 1-1.006.33.733.733 0 0 1-.336-.99c.459-.904 1.568-1.393 2.671-1.393 1.104 0 2.212.49 2.671 1.393a.733.733 0 0 1-.336.99.756.756 0 0 1-1.006-.33c-.123-.243-.586-.576-1.329-.576"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgMaskSad;
