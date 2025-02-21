import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSwimming = (props: SvgProps) => (
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
      d="M4.57 17.866c.687-1.074 2.157-1.039 2.888-.104.99 1.267 2.372 2.488 4.542 2.488 2.209 0 3.57-.979 4.505-2.229.72-.962 2.286-1.12 3.04.023.626.945 1.304 1.687 2.627 1.999a.75.75 0 1 1-.344 1.46c-1.852-.437-2.807-1.534-3.534-2.632a.28.28 0 0 0-.253-.128.43.43 0 0 0-.335.177C16.54 20.48 14.76 21.75 12 21.75c-2.842 0-4.611-1.64-5.724-3.064a.3.3 0 0 0-.246-.126.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.365-3.662 2.829a.75.75 0 1 1-.344-1.46c1.401-.33 2.08-1.142 2.742-2.177M4.57 12.805c.687-1.073 2.157-1.038 2.888-.104C8.448 13.97 9.83 15.19 12 15.19c2.209 0 3.57-.98 4.505-2.23.72-.962 2.286-1.12 3.04.023.626.946 1.304 1.687 2.627 1.999a.75.75 0 0 1-.344 1.46c-1.852-.436-2.807-1.533-3.534-2.632a.28.28 0 0 0-.253-.128.43.43 0 0 0-.335.177C16.54 15.42 14.76 16.69 12 16.69c-2.842 0-4.611-1.64-5.724-3.064a.3.3 0 0 0-.246-.125.23.23 0 0 0-.196.114c-.74 1.156-1.695 2.364-3.662 2.828a.75.75 0 0 1-.344-1.46c1.401-.33 2.08-1.141 2.742-2.177"
      clipRule="evenodd"
      opacity={0.5}
    />
    <Path
      fill="#000"
      d="M19.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M16.646 12.794 15.5 11.5 9 4.134A1.421 1.421 0 0 0 6.857 6l.988 1.152c.605.706-.367 2.263-.367 2.263l-2.362 2.845c.748-.47 1.772-.288 2.343.442C8.448 13.97 9.83 15.19 12 15.19c2.209 0 3.57-.98 4.505-2.23q.066-.087.14-.166"
    />
  </Svg>
);
export default SvgSwimming;
