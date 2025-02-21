import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarAngle = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="m11.924 8.8-.358-.205c-.393-.223-.59-.335-.723-.522-.134-.187-.19-.427-.301-.908l-.102-.437c-.394-1.692-.59-2.538-1.157-2.702m2.64 4.773c1.383.787 2.075 1.181 2.099 1.841s-.635 1.15-1.953 2.13l-.34.253c-.375.278-.562.417-.681.622m.876-4.846 7.62 2.11m-9.752 6.983c.551-.244.685-1.113.953-2.852l.069-.45c.076-.494.114-.74.233-.945m-1.255 4.247s-1.156-.3-2.364-1.386l-.312-.282c-.344-.308-.515-.463-.723-.523s-.427-.02-.867.062l-.4.075c-1.549.287-2.323.43-2.688-.08-.365-.509-.08-1.334.492-2.985l.148-.427c.162-.469.243-.703.234-.945s-.107-.464-.302-.908l-.179-.404c-.688-1.56-1.033-2.341-.707-2.9s1.106-.525 2.667-.459l.404.017c.444.02.665.029.867-.06.203-.09.362-.268.68-.624l.291-.324c1.122-1.252 1.683-1.878 2.25-1.713m.509 13.866 6.547 1.899c.693.201 1.04.302 1.399.096.358-.206.457-.515.654-1.132.128-.4.249-.871.33-1.4l.07-.45c.076-.495.114-.742.233-.946m-7.977-2.314 7.977 2.314M9.283 4.026 17.26 6.34c.566.164.763 1.01 1.156 2.702l.102.437c.112.481.168.722.302.908s.33.299.723.522m0 0 .357.204c1.383.788 2.074 1.181 2.098 1.842.025.66-.634 1.15-1.952 2.128l-.34.254c-.375.278-.562.417-.682.622"
    />
  </Svg>
);
export default SvgStarAngle;
