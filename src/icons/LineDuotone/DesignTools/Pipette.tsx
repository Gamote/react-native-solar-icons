import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPipette = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m10.531 19.291-.53-.53zm.802-12.446.53-.53zm-1.092-1.092-.53.53zm2.184-2.183.53-.53zm1.091 1.091-.53.53a.75.75 0 0 0 1.06 0zm1.456-1.455-.53-.53zm4.367 7.278-.53-.53a.75.75 0 0 0 0 1.06zm1.091 1.091-.53.53zM4.71 13.47l-.53-.53zm-2.257 5.896.53.53zm.629-.63-.53-.53zm1.555 2.813.53.53zm.628-.629-.53-.53zM3.78 16.747l-.746.082zm-.053-.476.745-.082zm3.527 3.95-.083.746zm.476.053.082-.745zm-2.214.404L6 21.25zm1.392-.488.022-.75zM3.88 14.426l-.663-.351zm-.203.58-.737-.14zm-.355 3.48L2.75 18zm.488-1.393.75-.022zm5.764 3.027.351.662zm-.58.203.14.737zm5.506-5-.53-.531zm-2.637-9.009-1.091-1.091-1.061 1.06 1.092 1.092zm6.914 6.914-1.091-1.091-1.061 1.06 1.092 1.092zM11.894 4.1l1.092 1.092 1.06-1.06-1.091-1.093zm2.153 1.092 1.455-1.456-1.06-1.06-1.456 1.455zm6.217 3.306-1.456 1.455 1.06 1.061 1.457-1.456zm-9.461-1.123 5.822 5.822 1.06-1.06-5.822-5.823zM5.239 14l6.624-6.624-1.06-1.06-6.624 6.623zm-2.256 5.896.628-.629-1.06-1.06-.63.628zm2.183 2.183.629-.629-1.061-1.06-.629.628zm-.642-5.414-.053-.476-1.49.166.052.476zm2.646 4.303.476.053.165-1.491-.475-.053zm-1.375.482c.133-.133.17-.17.205-.2l-.97-1.143c-.093.08-.18.167-.296.283zm1.541-1.973c-.162-.018-.285-.032-.407-.036l-.044 1.5c.046 0 .098.006.285.027zM6 21.25c.247-.21.562-.32.885-.31l.044-1.5a2.8 2.8 0 0 0-1.9.666zm-4.078.828a2.294 2.294 0 0 0 3.244 0l-1.06-1.06a.794.794 0 0 1-1.123 0zm2.257-9.14c-.424.424-.752.74-.962 1.137l1.326.702c.08-.15.207-.289.696-.778zm.292 3.25c-.076-.687-.09-.875-.058-1.042l-1.473-.28c-.084.44-.026.893.04 1.488zm-1.254-2.113a2.8 2.8 0 0 0-.277.792l1.473.279q.037-.194.13-.369zM20.264 3.736a3.367 3.367 0 0 1 0 4.762l1.06 1.06c1.901-1.9 1.901-4.982 0-6.882zm-4.762 0a3.367 3.367 0 0 1 4.762 0l1.06-1.06a4.867 4.867 0 0 0-6.882 0zm4.398 9.492a.794.794 0 0 1-1.123 0l-1.06 1.061a2.294 2.294 0 0 0 3.244 0zM3.61 19.266c.116-.116.204-.203.283-.295L2.75 18c-.03.035-.066.072-.2.205zm-.578-2.436c.021.187.026.239.028.285l1.499-.044c-.004-.122-.018-.245-.036-.407zm.86 2.14c.45-.529.687-1.205.667-1.899l-1.5.044c.01.323-.1.638-.31.885zM10.773 4.1a.794.794 0 0 1 1.122 0l1.061-1.06a2.294 2.294 0 0 0-3.244 0zm-7.79 16.917a.794.794 0 0 1 0-1.122l-1.06-1.06a2.294 2.294 0 0 0 0 3.243zm7.79-15.794a.794.794 0 0 1 0-1.123L9.71 3.04a2.294 2.294 0 0 0 0 3.243zm10.189 9.066a2.294 2.294 0 0 0 0-3.244l-1.061 1.06c.31.31.31.813 0 1.123zM10 18.761c-.489.489-.628.617-.778.696l.702 1.325c.396-.21.713-.537 1.136-.96zM7.646 21.02c.595.066 1.047.124 1.487.04l-.279-1.473c-.167.031-.355.018-1.043-.058zm1.577-1.563a1.3 1.3 0 0 1-.369.13l.28 1.473c.276-.052.543-.146.791-.277zm9.585-8.443 1.092 1.092 1.06-1.061-1.091-1.092zm-7.746 8.807 3.968-3.968-1.06-1.061L10 18.761zm3.968-3.968 2.656-2.656-1.061-1.06-2.655 2.655z"
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m14.5 15.322-1.854-1.853m-.146 3.853-1.854-1.853"
      opacity={0.5}
    />
  </Svg>
);
export default SvgPipette;
