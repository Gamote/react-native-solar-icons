import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHandHeart = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C274C"
      d="m10.15 8.802-.442.606zM12 3.106l-.508.552a.75.75 0 0 0 1.015 0zm1.85 5.696.442.606zM12 9.676v.75zm-1.408-1.48c-.69-.503-1.427-1.115-1.983-1.76-.574-.665-.859-1.254-.859-1.721h-1.5c0 1.017.578 1.954 1.223 2.701.663.768 1.501 1.457 2.235 1.992zM7.75 4.715c0-1.059.52-1.663 1.146-1.873.652-.22 1.624-.078 2.596.816l1.015-1.104C11.23 1.38 9.704.988 8.418 1.42 7.105 1.862 6.25 3.096 6.25 4.715zm6.542 4.693c.734-.534 1.572-1.224 2.235-1.992.645-.747 1.223-1.684 1.223-2.701h-1.5c0 .467-.284 1.056-.859 1.721-.556.645-1.292 1.257-1.982 1.76zm3.458-4.693c0-1.619-.855-2.853-2.167-3.295-1.286-.432-2.813-.04-4.09 1.134l1.015 1.104c.972-.894 1.945-1.036 2.597-.816.625.21 1.145.814 1.145 1.873zM9.708 9.408c.755.55 1.354 1.018 2.292 1.018v-1.5c-.365 0-.565-.115-1.408-.73zm3.7-1.212c-.843.615-1.043.73-1.408.73v1.5c.938 0 1.537-.467 2.292-1.018z"
    />
    <Path
      stroke="#1C274C"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5 20.388h2.26c1.01 0 2.033.106 3.016.308 1.74.359 3.573.402 5.33.118.868-.14 1.72-.355 2.492-.727.696-.337 1.549-.81 2.122-1.341.572-.53 1.168-1.397 1.59-2.075.364-.582.188-1.295-.386-1.728a1.89 1.89 0 0 0-2.22 0l-1.807 1.365c-.7.53-1.465 1.017-2.376 1.162q-.165.026-.345.047m0 0-.11.012m.11-.012a1 1 0 0 0 .427-.24 1.49 1.49 0 0 0 .126-2.134 1.9 1.9 0 0 0-.45-.367c-2.797-1.669-7.15-.398-9.779 1.467m9.676 1.274a.5.5 0 0 1-.11.012m0 0a9.3 9.3 0 0 1-1.814.004"
    />
    <Rect
      width={3}
      height={8}
      x={2}
      y={14}
      stroke="#1C274C"
      strokeWidth={1.5}
      rx={1.5}
    />
  </Svg>
);
export default SvgHandHeart;
