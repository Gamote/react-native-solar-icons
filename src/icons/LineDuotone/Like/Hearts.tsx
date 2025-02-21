import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHearts = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m14.829 20.17.45-.601zm1.671-7.012-.527.534a.75.75 0 0 0 1.054 0zm1.671 7.011-.45-.6zm2.976-7.251.543-.518zm-6.745 6.936-.443.605zM11.75 15.06c0-.97.576-1.788 1.37-2.133.757-.329 1.81-.264 2.853.765l1.054-1.067c-1.433-1.415-3.13-1.671-4.504-1.074a3.82 3.82 0 0 0-2.273 3.508zm2.63 5.71c.278.208.598.448.928.63.33.184.736.35 1.192.35v-1.5c-.094 0-.238-.036-.463-.16a7 7 0 0 1-.758-.521zm4.24 0c.765-.573 1.806-1.273 2.62-2.145.84-.899 1.51-2.047 1.51-3.565h-1.5c0 1.024-.436 1.824-1.106 2.541-.695.745-1.568 1.328-2.423 1.968zm-.899-1.201a7 7 0 0 1-.758.52c-.225.125-.369.161-.463.161v1.5c.456 0 .861-.166 1.192-.35.33-.182.65-.422.929-.63zm5.029-4.51a3.84 3.84 0 0 0-1.06-2.66l-1.085 1.037c.397.415.645.987.645 1.624zm-1.06-2.66a3.68 3.68 0 0 0-2.643-1.149c-1.044-.005-2.121.434-3.074 1.375l1.054 1.067c.71-.7 1.418-.945 2.013-.942.603.003 1.159.26 1.565.685zm-6.411 7.17-.434-.32-.886 1.21.42.31zm-.434-.32c-1.626-1.191-3.095-2.307-3.095-4.19h-1.5c0 2.767 2.227 4.315 3.709 5.4z"
    />
    <Path
      fill="#000"
      d="m8.962 19.338.477-.578zM12 5.317l-.552.508a.75.75 0 0 0 1.104 0zM9.439 18.76C6.385 16.242 2.75 13.773 2.75 9.119h-1.5c0 5.516 4.404 8.465 7.235 10.798zM2.75 9.119c0-2.28 1.232-4.174 2.886-4.964 1.596-.763 3.75-.57 5.812 1.67l1.104-1.016C10.114 2.16 7.268 1.712 4.989 2.8 2.768 3.863 1.25 6.314 1.25 9.12zm5.735 10.798c.512.422 1.062.872 1.62 1.213.556.34 1.196.62 1.895.62v-1.5c-.301 0-.66-.123-1.114-.4-.452-.276-.921-.657-1.447-1.09zM22.75 9.12c0-2.805-1.518-5.256-3.74-6.318-2.278-1.089-5.124-.64-7.562 2.008l1.104 1.016c2.062-2.24 4.216-2.433 5.812-1.67 1.654.79 2.886 2.684 2.886 4.964zm-.926 4.122a9.4 9.4 0 0 0 .926-4.122h-1.5a7.9 7.9 0 0 1-.78 3.475zm-7.885 6.023c-.827.648-1.433.986-1.939.986v1.5c1.083 0 2.065-.679 2.865-1.306z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgHearts;
