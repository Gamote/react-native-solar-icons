import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeAdd = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M12.75 11a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 1 0 0 1.5h2.25V17a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25z"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M12 1.25c-.708 0-1.351.203-2.05.542-.674.329-1.454.812-2.427 1.417L5.456 4.49c-.92.572-1.659 1.03-2.227 1.465-.589.45-1.041.91-1.368 1.507-.326.595-.472 1.229-.543 1.978-.068.726-.068 1.613-.068 2.726v1.613c0 1.904 0 3.407.153 4.582.156 1.205.486 2.178 1.23 2.948.747.773 1.697 1.118 2.875 1.282 1.14.158 2.598.158 4.434.158h4.116c1.836 0 3.294 0 4.434-.158 1.177-.164 2.128-.51 2.876-1.282.743-.77 1.073-1.743 1.23-2.948.152-1.175.152-2.678.152-4.582v-1.612c0-1.114 0-2.001-.068-2.727-.07-.749-.217-1.383-.543-1.978-.327-.597-.78-1.056-1.368-1.507-.568-.435-1.306-.893-2.227-1.465L16.477 3.21c-.973-.605-1.753-1.088-2.428-1.417-.697-.339-1.34-.542-2.049-.542M8.28 4.504c1.015-.63 1.73-1.072 2.327-1.363.581-.282.993-.39 1.393-.39s.812.108 1.393.39c.598.29 1.312.733 2.327 1.363l2 1.242c.961.596 1.636 1.016 2.14 1.4.489.376.77.685.963 1.037.193.353.306.766.365 1.398.061.648.062 1.465.062 2.623v1.521c0 1.971-.002 3.376-.14 4.444-.136 1.048-.393 1.656-.82 2.098-.425.439-1.003.7-2.004.839-1.026.142-2.379.144-4.286.144h-4c-1.908 0-3.26-.002-4.286-.144-1.001-.14-1.579-.4-2.003-.839-.428-.442-.685-1.05-.82-2.098-.14-1.068-.141-2.473-.141-4.444v-1.52c0-1.159 0-1.976.062-2.624.059-.632.172-1.045.365-1.398.193-.352.474-.661.964-1.036.503-.385 1.178-.805 2.139-1.401z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgHomeAdd;
