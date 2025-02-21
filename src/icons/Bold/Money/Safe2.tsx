import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSafe2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M8.75 12a3.25 3.25 0 0 1 2.5-3.163v1.041a2.25 2.25 0 0 0-1.495 2.268l-.958.41A3.3 3.3 0 0 1 8.75 12M12.75 9.878V8.837a3.25 3.25 0 0 1 2.453 3.72l-.958-.41q.005-.074.005-.147a2.25 2.25 0 0 0-1.5-2.122M13.654 13.525l.957.41A3.25 3.25 0 0 1 12 15.25c-1.07 0-2.02-.517-2.611-1.315l.957-.41c.41.446 1 .725 1.654.725s1.243-.28 1.654-.725"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M7.808 5.853c-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.101.754-.103 1.756-.103 3.191v2c0 1.435.002 2.437.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h2c1.435 0 2.437-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.754.103-1.756.103-3.191v-2c0-1.435-.002-2.437-.103-3.192-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.754-.101-1.756-.103-3.191-.103h-2c-1.435 0-2.437.002-3.192.103M12 7.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12m11.055-7.75c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v2.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-2.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982a3 3 0 0 1-.634-.933A.75.75 0 0 1 3.75 17v-3a.75.75 0 0 1 .5-.707v-2.586a.75.75 0 0 1-.5-.707V7a.75.75 0 0 1 .964-.72c.151-.342.356-.654.634-.932.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgSafe2;
