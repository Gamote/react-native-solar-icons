import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCartLarge = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M7.25 9A.75.75 0 0 1 8 8.25h3a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 9"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M1.288 2.763a.75.75 0 0 1 .95-.474l.304.101c.626.209 1.155.385 1.571.579.443.206.827.46 1.118.865s.412.849.467 1.333l.009.083H16.51c.976 0 1.792 0 2.417.093.651.096 1.28.318 1.676.919.396.6.352 1.265.184 1.902-.16.61-.483 1.36-.867 2.258l-.467 1.09c-.176.411-.332.774-.493 1.06-.175.311-.388.594-.711.807-.324.213-.667.298-1.021.336-.328.035-.722.035-1.17.035H6.153c.073.134.158.245.255.341.277.277.665.457 1.4.556.754.102 1.756.103 3.191.103h8a.75.75 0 0 1 0 1.5h-8.055c-1.367 0-2.47 0-3.337-.116-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337V6.883c0-.713-.001-1.185-.042-1.546-.04-.341-.108-.506-.194-.626s-.221-.237-.533-.382c-.33-.153-.777-.304-1.453-.529l-.265-.088a.75.75 0 0 1-.475-.949m4.519 9.487h10.215c.496 0 .808 0 1.046-.026.219-.024.303-.063.356-.098.052-.034.121-.097.23-.289.116-.208.24-.495.436-.95l.428-1c.415-.968.69-1.615.82-2.106.125-.476.062-.62.013-.694-.048-.073-.156-.188-.643-.26-.501-.075-1.205-.077-2.258-.077H5.75V9.5c0 1.172.001 2.055.057 2.75M7.5 21.75a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m-.75-2.25a.75.75 0 1 0 1.5 0 .75.75 0 0 0-1.5 0M14.25 19.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0m2.25.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCartLarge;
