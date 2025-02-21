import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClipboardHeart = (props: SvgProps) => (
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
      d="M7.263 3.259A2.25 2.25 0 0 1 9.5 1.25h5a2.25 2.25 0 0 1 2.237 2.009c.763.015 1.423.055 1.987.158.758.14 1.403.405 1.928.93.602.602.86 1.36.982 2.26.116.866.116 1.969.116 3.336v6.11c0 1.368 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.982c-.867.116-1.97.116-3.337.116h-6.11c-1.367 0-2.47 0-3.337-.116-.9-.121-1.658-.38-2.26-.982s-.86-1.36-.981-2.26c-.117-.867-.117-1.97-.117-3.337v-6.11c0-1.367 0-2.47.117-3.336.12-.9.38-1.658.981-2.26.525-.525 1.17-.79 1.928-.93.564-.103 1.224-.143 1.987-.158m.002 1.5c-.718.015-1.272.052-1.718.134-.566.104-.895.27-1.138.514-.277.277-.457.666-.556 1.4-.101.755-.103 1.756-.103 3.191v6c0 1.436.002 2.437.103 3.192.099.734.28 1.122.556 1.4.277.276.665.457 1.4.555.754.102 1.756.103 3.191.103h6c1.435 0 2.436-.001 3.192-.103.734-.098 1.122-.279 1.399-.556.277-.276.457-.665.556-1.399.101-.755.103-1.756.103-3.192v-6c0-1.435-.002-2.436-.103-3.192-.099-.733-.28-1.122-.556-1.399-.244-.243-.572-.41-1.138-.514-.446-.082-1-.119-1.718-.134A2.25 2.25 0 0 1 14.5 6.75h-5a2.25 2.25 0 0 1-2.235-1.99M9.5 2.75a.75.75 0 0 0-.75.75v1c0 .414.336.75.75.75h5a.75.75 0 0 0 .75-.75v-1a.75.75 0 0 0-.75-.75zm.742 9.04c-.23.08-.492.33-.492.907 0 .214.141.545.51.971.348.403.809.786 1.226 1.093a4 4 0 0 0 .42.288c.054.029.07.029.094.029s.04 0 .094-.03a4 4 0 0 0 .42-.287c.417-.307.878-.69 1.227-1.093.368-.426.509-.757.509-.971 0-.576-.263-.827-.492-.907-.25-.088-.714-.06-1.24.443a.75.75 0 0 1-1.037 0c-.525-.503-.989-.531-1.24-.443M12 10.734c-.716-.471-1.525-.616-2.254-.36-.934.327-1.496 1.226-1.496 2.323 0 .77.441 1.45.875 1.952.453.525 1.014.984 1.474 1.321l.07.052c.352.26.752.556 1.331.556.58 0 .98-.296 1.33-.556l.07-.052c.46-.337 1.022-.796 1.475-1.32.434-.502.875-1.183.875-1.953 0-1.097-.562-1.996-1.496-2.323-.729-.256-1.538-.111-2.254.36"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgClipboardHeart;
