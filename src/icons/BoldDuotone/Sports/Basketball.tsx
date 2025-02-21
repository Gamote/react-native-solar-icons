import * as React from "react";
import Svg, { Path, G } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBasketball = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M13.453 8.397c1.728-1.469 3.087-3.21 3.672-4.949l.01-.031A9.96 9.96 0 0 1 20.66 7 9.96 9.96 0 0 1 22 11.842c-1.995-.431-4.186-.1-6.255.68-.321-.864-.685-1.688-1.095-2.397a14 14 0 0 0-1.197-1.728"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M3.34 17a9.95 9.95 0 0 0 3.525 3.583v-.002c.818-2.468 3.2-4.945 5.992-6.644q.73-.445 1.508-.822c-.302-.823-.64-1.593-1.014-2.24a13 13 0 0 0-1.081-1.556q-.52.372-1.064.706c-2.758 1.693-6.113 2.743-9.062 2.162l-.145-.028a9.96 9.96 0 0 0 1.34 4.84"
      clipRule="evenodd"
    />
    <G fill="#000" opacity={0.5}>
      <Path d="M16.226 13.943c1.887-.72 3.811-.996 5.477-.63l.204.045a10 10 0 0 1-.71 2.57 9.95 9.95 0 0 1-3.538 4.317l-.013-.079a52.107 52.107 0 0 0-.687-3.494 40 40 0 0 0-.733-2.73M8.319 3.454c-.252-.2-.458-.357-.6-.465l-.023-.016a9.95 9.95 0 0 1 5.5-.902c.887.107 1.757.333 2.584.67l-.077.229c-.477 1.418-1.65 2.95-3.228 4.29-.73-.795-1.501-1.531-2.203-2.16A42 42 0 0 0 8.32 3.453M10.42 8.747c-2.586 1.588-5.55 2.449-7.987 1.969l-.342-.068a9.99 9.99 0 0 1 4.19-6.853l.328.239.002.001.01.007.039.029.154.115a40.239 40.239 0 0 1 2.456 2.03c.66.592 1.358 1.26 2.013 1.965q-.42.293-.863.566M16.205 20.663l.002.012v.004l.053.369a9.99 9.99 0 0 1-8.04.21l.069-.204c.663-2.002 2.72-4.237 5.348-5.836q.592-.36 1.206-.667c.252.83.471 1.671.655 2.462a51 51 0 0 1 .699 3.597z" />
    </G>
  </Svg>
);
export default SvgBasketball;
