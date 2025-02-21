import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCpu = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.181 10.181c.053-.053.148-.119.45-.16.323-.043.761-.044 1.439-.044h1.86c.678 0 1.116.001 1.438.045.303.04.398.106.45.16.054.052.12.147.16.45.044.322.045.76.045 1.438v1.86c0 .678-.001 1.116-.045 1.438-.04.303-.106.398-.16.45-.052.054-.147.12-.45.16-.322.044-.76.045-1.438.045h-1.86c-.678 0-1.116-.001-1.438-.045-.303-.04-.398-.106-.45-.16-.054-.052-.12-.147-.16-.45-.044-.322-.045-.76-.045-1.438v-1.86c0-.678.001-1.116.045-1.438.04-.303.106-.398.16-.45"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 3c.385 0 .698.312.698.698v2.79q.764.001 1.395.017V3.698a.698.698 0 0 1 1.395 0v2.79a1 1 0 0 1-.008.108c.936.115 1.585.353 2.078.846s.731 1.142.846 2.078a1 1 0 0 1 .108-.008h2.79a.698.698 0 0 1 0 1.395h-2.807q.017.63.017 1.395h2.79a.698.698 0 0 1 0 1.396h-2.79q-.001.764-.017 1.395h2.807a.698.698 0 0 1 0 1.395h-2.79a1 1 0 0 1-.108-.008c-.115.936-.353 1.585-.846 2.078s-1.142.731-2.078.846q.009.053.008.108v2.79a.698.698 0 0 1-1.395 0v-2.807q-.63.017-1.395.017v2.79a.698.698 0 0 1-1.396 0v-2.79a56 56 0 0 1-1.395-.017v2.807a.698.698 0 0 1-1.395 0v-2.79q0-.056.008-.108c-.936-.115-1.585-.353-2.078-.846s-.731-1.142-.846-2.078a1 1 0 0 1-.108.008h-2.79a.698.698 0 0 1 0-1.395h2.807a56 56 0 0 1-.017-1.395h-2.79a.698.698 0 0 1 0-1.396h2.79q.001-.764.017-1.395H2.698a.698.698 0 0 1 0-1.395h2.79q.056 0 .108.008c.115-.936.353-1.585.846-2.078s1.142-.731 2.078-.846a1 1 0 0 1-.008-.108v-2.79a.698.698 0 0 1 1.395 0v2.807q.63-.017 1.395-.017v-2.79c0-.386.313-.698.698-.698m-.976 5.581c-.619 0-1.152 0-1.578.058-.458.061-.896.2-1.252.555-.355.356-.494.794-.555 1.252-.058.427-.058.96-.058 1.578v1.952c0 .619 0 1.151.058 1.578.061.458.2.896.555 1.252.356.355.794.494 1.252.555.426.058.96.058 1.578.058h1.952c.619 0 1.151 0 1.578-.058.458-.061.896-.2 1.252-.555.355-.356.494-.794.555-1.252.058-.427.058-.96.058-1.578v-1.952c0-.619 0-1.151-.058-1.578-.061-.458-.2-.896-.555-1.252-.356-.355-.794-.494-1.252-.555-.427-.058-.96-.058-1.578-.058z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgCpu;
