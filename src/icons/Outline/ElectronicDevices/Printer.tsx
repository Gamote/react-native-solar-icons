import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPrinter = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M18 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M11.945 1.25h.11c1.367 0 2.47 0 3.337.117.9.12 1.658.38 2.26.981.74.74.968 1.727 1.05 2.951q.366.025.69.068c.9.12 1.658.38 2.26.981.602.602.86 1.36.982 2.26.116.867.116 1.97.116 3.337v.11c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26-.74.74-1.727.968-2.951 1.05q-.024.366-.067.69c-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-.11c-1.367 0-2.47 0-3.337-.116-.9-.122-1.658-.38-2.26-.982s-.86-1.36-.981-2.26q-.044-.324-.068-.69c-1.224-.082-2.21-.31-2.95-1.05-.603-.602-.861-1.36-.982-2.26-.117-.867-.117-1.97-.117-3.337v-.11c0-1.367 0-2.47.117-3.337.12-.9.38-1.658.981-2.26.602-.602 1.36-.86 2.26-.981a10 10 0 0 1 .69-.068c.082-1.224.31-2.21 1.05-2.95.602-.603 1.36-.861 2.26-.982.867-.117 1.97-.117 3.337-.117M6.807 5.253q.535-.004 1.138-.003h8.11q.602 0 1.138.003c-.082-1.02-.267-1.508-.602-1.844-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103s-2.437.002-3.192.103c-.734.099-1.122.28-1.399.556-.335.336-.52.823-.602 1.844m-1.554 11.94q-.004-.535-.003-1.138V14.75H5a.75.75 0 0 1 0-1.5h14a.75.75 0 0 1 0 1.5h-.25v1.305q0 .602-.003 1.138c1.02-.082 1.509-.267 1.844-.602.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191s-.002-2.437-.103-3.192c-.099-.734-.28-1.122-.556-1.399-.277-.277-.665-.457-1.4-.556-.755-.101-1.756-.103-3.191-.103H8c-1.435 0-2.437.002-3.192.103-.734.099-1.122.28-1.399.556-.277.277-.457.665-.556 1.4-.101.754-.103 1.756-.103 3.191s.002 2.437.103 3.192c.099.734.28 1.122.556 1.399.336.335.823.52 1.844.602M17.25 14.75H6.75V16c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103s2.437-.002 3.192-.103c.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191zM5.25 10A.75.75 0 0 1 6 9.25h3a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m3 6.805a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75m0 2.5a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgPrinter;
