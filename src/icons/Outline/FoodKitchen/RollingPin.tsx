import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRollingPin = (props: SvgProps) => (
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
      d="M17.31 2.358a2.93 2.93 0 0 1 4.258-.353c.056.05.118.113.201.196l.03.03c.083.083.145.145.196.2a2.93 2.93 0 0 1-.353 4.26c-.059.047-.13.097-.226.166l-2.11 1.507c.384.522.638 1.066.638 1.708 0 .682-.285 1.248-.7 1.79-.394.518-.969 1.092-1.664 1.788l-3.93 3.93c-.696.696-1.27 1.27-1.787 1.665-.543.414-1.11.699-1.79.699-.643 0-1.187-.254-1.71-.637l-1.506 2.11c-.069.095-.12.166-.166.225a2.93 2.93 0 0 1-4.26.353c-.055-.05-.117-.113-.2-.196l-.03-.03c-.083-.083-.145-.145-.196-.2a2.93 2.93 0 0 1 .353-4.26c.059-.047.13-.098.226-.166l2.11-1.507c-.384-.522-.638-1.065-.638-1.708 0-.682.285-1.248.7-1.79.394-.518.969-1.092 1.664-1.788l3.93-3.93c.696-.695 1.27-1.27 1.787-1.665.543-.414 1.11-.699 1.79-.699.643 0 1.187.254 1.71.637l1.506-2.11c.069-.095.12-.166.166-.225m-.542 3.331q.354.346.764.757l.022.022q.41.41.757.764l2.216-1.584c.12-.086.157-.112.182-.132a1.43 1.43 0 0 0 .172-2.08 6 6 0 0 0-.157-.16 5 5 0 0 0-.16-.157 1.43 1.43 0 0 0-2.08.172 5 5 0 0 0-.132.182zM5.69 16.77l-2.216 1.583a5 5 0 0 0-.182.132 1.43 1.43 0 0 0-.172 2.08c.021.023.053.055.157.16.105.104.137.136.16.157a1.43 1.43 0 0 0 2.08-.172c.02-.025.046-.061.132-.182l1.584-2.216a77 77 0 0 1-.764-.757l-.022-.022q-.41-.41-.757-.764m7.358-10.821c-.427.326-.931.828-1.673 1.57l-3.856 3.856c-.742.742-1.244 1.246-1.57 1.673-.313.41-.392.66-.392.88 0 .302.145.642.785 1.347.306.338.693.724 1.177 1.208s.87.87 1.208 1.177c.705.64 1.045.785 1.346.785.222 0 .471-.08.881-.392.427-.326.931-.828 1.673-1.57l3.856-3.856c.742-.742 1.244-1.246 1.57-1.673.313-.41.392-.66.392-.88 0-.302-.145-.642-.785-1.347a38 38 0 0 0-1.177-1.208c-.484-.484-.87-.87-1.208-1.177-.705-.64-1.045-.785-1.346-.785-.222 0-.471.08-.881.392"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgRollingPin;
