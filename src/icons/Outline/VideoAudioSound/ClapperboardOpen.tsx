import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgClapperboardOpen = (props: SvgProps) => (
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
      d="M18.059 4.708a2.25 2.25 0 0 0-2.165-1.25 3 3 0 0 0-.511.096l-.446 3.74 3.118-.836a8 8 0 0 0 .289-.083.25.25 0 0 0 .137-.238l-.01-.052-.063-.24c-.19-.708-.26-.955-.35-1.137m-4.683 3.003.447-3.743-4.718 1.264-.447 3.743zM7.098 9.394l.446-3.743c-.817.219-1.401.379-1.85.544-.474.174-.728.33-.903.505-.28.28-.48.628-.583 1.009-.064.24-.072.537.014 1.034.063.362.167.79.311 1.338zM3.25 11.093c-.226-.843-.408-1.526-.506-2.094-.104-.6-.128-1.141.015-1.678A3.75 3.75 0 0 1 3.73 5.64c.393-.393.875-.643 1.446-.853.554-.203 1.259-.392 2.132-.626l.781-.21a.75.75 0 0 1 .285-.076l5.972-1.6.022-.006a.75.75 0 0 1 .285-.076c.474-.126.821-.21 1.143-.232a3.75 3.75 0 0 1 3.608 2.084c.164.332.272.736.43 1.328l.023.084.013.046c.047.176.096.359.108.534a1.75 1.75 0 0 1-.973 1.684c-.157.078-.34.126-.515.173l-.047.013-8.746 2.343h6.355c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.725.456.456.642 1.023.726 1.65.08.595.08 1.345.08 2.243v1.107c0 1.367 0 2.47-.116 3.337-.122.9-.38 1.658-.982 2.26s-1.36.86-2.26.981c-.867.117-1.97.117-3.337.117h-4.11c-1.367 0-2.47 0-3.337-.117-.9-.12-1.658-.38-2.26-.981-.602-.602-.86-1.36-.981-2.26-.117-.867-.117-1.97-.117-3.337zm1.5.657V16c0 1.435.002 2.436.103 3.192.099.734.28 1.122.556 1.399.277.277.665.457 1.4.556.754.101 1.756.103 3.191.103h4c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.277-.277.457-.665.556-1.4.101-.755.103-1.756.103-3.191v-1c0-.964-.002-1.612-.067-2.095-.062-.461-.169-.659-.3-.789s-.327-.237-.788-.3c-.483-.065-1.131-.066-2.095-.066z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgClapperboardOpen;
