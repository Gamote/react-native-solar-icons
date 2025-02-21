import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarCircle = (props: SvgProps) => (
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
      d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12M12 8.9a13 13 0 0 0-.484.829l-.13.235-.03.054c-.11.198-.257.466-.5.65-.249.189-.548.255-.762.302l-.058.013-.255.057c-.465.106-.755.173-.95.241.12.181.323.42.651.803l.174.203.04.047c.147.17.344.398.434.69.09.29.06.589.037.817l-.006.062-.027.271c-.047.484-.075.797-.075 1.018.193-.068.456-.188.858-.373l.238-.11.055-.025c.198-.093.478-.224.79-.224s.592.131.79.224l.055.026.238.11c.402.184.665.304.858.372 0-.221-.028-.534-.075-1.018l-.027-.27-.006-.063c-.023-.228-.053-.527.037-.817.09-.292.287-.52.435-.69l.04-.047.173-.203c.328-.383.53-.622.65-.803-.194-.068-.484-.135-.95-.24l-.254-.058-.058-.013c-.214-.047-.513-.113-.761-.302-.244-.184-.391-.452-.5-.65l-.03-.054-.131-.235A13 13 0 0 0 12 8.9m2.153 6.35h.002Zm-4.308 0h.002Zm1.038-7.365c.216-.282.568-.635 1.117-.635s.901.353 1.117.635c.207.271.42.653.651 1.067l.026.046.13.235.133.23.065.017.173.04.255.057.052.012c.447.101.864.195 1.179.32.34.134.753.376.912.887.157.503-.036.937-.23 1.246-.183.29-.465.62-.771.978l-.208.242-.118.14-.057.071a5 5 0 0 0 .024.286l.03.321c.047.48.09.917.074 1.261-.016.358-.1.838-.526 1.16-.437.333-.926.268-1.273.168-.325-.093-.715-.272-1.133-.465l-.049-.022-.238-.11-.218-.098-.055.024-.163.074-.238.11-.049.022c-.418.193-.808.372-1.133.465-.347.1-.836.165-1.273-.168-.426-.323-.51-.802-.526-1.16-.016-.344.027-.781.073-1.26l.031-.322c.015-.152.022-.23.024-.286l-.057-.071-.118-.14-.174-.203-.034-.039c-.306-.358-.588-.688-.77-.978-.195-.309-.388-.743-.231-1.246.159-.51.571-.753.912-.887.315-.125.732-.219 1.18-.32l.051-.012.255-.057.239-.057.04-.069.091-.16.131-.236.026-.046c.23-.414.444-.796.651-1.067"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgStarCircle;
