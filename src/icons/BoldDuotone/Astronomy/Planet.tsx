import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlanet = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#000" d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0" opacity={0.5} />
    <Path
      fill="#000"
      d="M17.712 5.453c1.047-.193 2.006-.259 2.797-.152.77.103 1.536.393 1.956 1.064.446.714.312 1.542-.012 2.258-.33.728-.918 1.499-1.672 2.268-1.516 1.547-3.836 3.226-6.597 4.697-2.763 1.472-5.495 2.484-7.694 2.92-1.095.217-2.098.299-2.923.201-.8-.095-1.6-.383-2.032-1.075-.47-.752-.296-1.63.07-2.379.375-.768 1.032-1.586 1.872-2.403L4 12.416c0 .219.083.71.168 1.146.045.23.09.444.123.596-.652.666-1.098 1.263-1.339 1.756-.277.567-.208.825-.145.925.072.116.305.305.937.38.609.073 1.44.018 2.455-.183 2.02-.4 4.613-1.351 7.28-2.772s4.85-3.015 6.23-4.423c.694-.707 1.15-1.334 1.377-1.836.233-.515.167-.75.107-.844-.07-.112-.289-.294-.883-.374-.542-.072-1.272-.041-2.163.112L16.87 5.656c.338-.101.658-.17.842-.203"
    />
  </Svg>
);
export default SvgPlanet;
