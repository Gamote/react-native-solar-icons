import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBook2 = (props: SvgProps) => (
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
      d="M9.945 1.25h4.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v8.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-4.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26a12 12 0 0 1-.082-.943.75.75 0 0 1-.016-.392c-.019-.592-.019-1.258-.019-2.002v-8.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981.867-.117 1.97-.117 3.337-.117m-5.168 17c.015.353.039.664.076.942.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h4c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.196-.196.344-.449.449-.841H8a.75.75 0 0 1 0-1.5h11.223c.019-.431.024-.925.026-1.5H7.898c-.978 0-1.32.006-1.583.077a2.25 2.25 0 0 0-1.538 1.422m14.473-3H7.782c-.818 0-1.376 0-1.855.128a3.8 3.8 0 0 0-1.177.548V8c0-1.435.002-2.437.103-3.192.099-.734.28-1.122.556-1.399.277-.277.665-.457 1.4-.556.754-.101 1.756-.103 3.191-.103h4c1.435 0 2.436.002 3.192.103.734.099 1.122.28 1.399.556.277.277.457.665.556 1.4.101.754.103 1.756.103 3.191zM7.25 7A.75.75 0 0 1 8 6.25h8a.75.75 0 0 1 0 1.5H8A.75.75 0 0 1 7.25 7m0 3.5A.75.75 0 0 1 8 9.75h5a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBook2;
