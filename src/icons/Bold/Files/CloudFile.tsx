import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCloudFile = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m19.352 7.617-3.96-3.563c-1.127-1.015-1.69-1.523-2.383-1.788L13 5c0 2.357 0 3.536.732 4.268S15.643 10 18 10h3.58c-.362-.704-1.012-1.288-2.228-2.383"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-.437c0-.873 0-1.529-.043-2.063h-4.052c-1.097 0-2.067 0-2.848-.105-.847-.114-1.694-.375-2.385-1.066-.692-.692-.953-1.539-1.067-2.386-.105-.781-.105-1.75-.105-2.848l.01-2.834q0-.124.02-.244C11.121 2 10.636 2 10.03 2 6.239 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22m1-4c1.105 0 2-.79 2-1.765 0-.772-.562-1.429-1.346-1.668-.111-.882-.958-1.567-1.987-1.567-1.105 0-2 .79-2 1.765 0 .215.043.422.124.613a2 2 0 0 0-.291-.025c-.828 0-1.5.592-1.5 1.324C6 17.407 6.672 18 7.5 18z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCloudFile;
