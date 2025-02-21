import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDislike = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m20.975 11.815-.739.128zm-.705-4.08-.74.128zM6.938 3.523l-.747-.065zm-.812 9.393.747.064zm7.869 5.863.74-.122zm-.663-4.045.74-.121zm-6.634-.412-.49.569zm1.439 1.24.49-.568zm2.381 3.654-.726.189zm.476 1.834.726-.188zm1.674.886-.23-.714zm.145-.047.229.714zm-2.951-4.352.662-.353zm4.043 3.216-.726-.189zm-2.23 1.115-.326.675zm8.561-9.925-.705-4.08 1.478-.256.705 4.08zM13.245 2.75H8.596v-1.5h4.649zm-5.56.838-.812 9.392-1.495-.129.813-9.393zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357zM13.255 18.9l-.663-4.045 1.48-.242.663 4.044zm-6.067-5.146 1.438 1.24-.979 1.137-1.438-1.24zm4.056 5.274.476 1.834-1.452.376-.476-1.833zm1.194 2.194.145-.047.459 1.428-.145.047zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A7 7 0 0 0 9.2 17.89zm2.06 3.991a.89.89 0 0 0 .596-.61l1.452.376a2.38 2.38 0 0 1-1.59 1.662zm-.863-.313c.035.135.132.259.28.33l-.651 1.351a2.01 2.01 0 0 1-1.081-1.305zm.28.33a.6.6 0 0 0 .438.03l.459 1.428a2.1 2.1 0 0 1-1.548-.107zm2.154-8.176h5.18v1.5h-5.18zm.581 5.641c.125.76.089 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664zM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.898-1.196-1.553-1.76zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073zm-9.122 3.168a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098zm-5.72-1.875a.92.92 0 0 0 .316.774l-.98 1.137a2.42 2.42 0 0 1-.83-2.04z"
    />
    <Path
      fill="#000"
      d="m3.972 2.53-.748-.065zM3 13.765l.747.064a.75.75 0 0 1-1.497-.064zM4.719 2.594 3.747 13.83l-1.494-.129.971-11.236zm-.969-.107v11.279h-1.5V2.487zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344zm.263.285a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237z"
      opacity={0.5}
    />
  </Svg>
);
export default SvgDislike;
