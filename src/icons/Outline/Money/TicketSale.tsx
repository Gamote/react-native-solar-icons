import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTicketSale = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.93872 3.25H14.0613C15.9039 3.24998 17.3629 3.24997 18.5047 3.4031C19.6795 3.56066 20.6302 3.89255 21.3801 4.64058C22.4097 5.66758 22.6599 7.08185 22.7388 8.95797L22.7398 8.98214C22.7467 9.14598 22.7538 9.31328 22.7476 9.45419C22.741 9.60408 22.7178 9.82054 22.5981 10.0344C22.5153 10.1823 22.4044 10.2846 22.3304 10.3458C22.2503 10.4122 22.1613 10.4724 22.0764 10.5259C21.9127 10.6292 21.6913 10.7529 21.4317 10.8978L21.4126 10.9085C21.0269 11.1239 20.7699 11.533 20.7699 12C20.7699 12.467 21.0269 12.8761 21.4126 13.0915L21.4318 13.1022C21.6913 13.2472 21.9127 13.3708 22.0764 13.4741C22.1613 13.5276 22.2503 13.5878 22.3304 13.6542C22.4044 13.7154 22.5153 13.8177 22.5981 13.9656C22.7178 14.1795 22.741 14.3959 22.7476 14.5458C22.7538 14.6867 22.7467 14.854 22.7398 15.0179L22.7388 15.042C22.6599 16.9182 22.4097 18.3324 21.3801 19.3594C20.6302 20.1074 19.6795 20.4393 18.5047 20.5969C17.3629 20.75 15.9038 20.75 14.0613 20.75H9.93872C8.09617 20.75 6.63712 20.75 5.49531 20.5969C4.32052 20.4393 3.36981 20.1074 2.61992 19.3594C1.59037 18.3324 1.34012 16.9182 1.26125 15.042L1.26023 15.0179C1.25331 14.854 1.24625 14.6867 1.25245 14.5458C1.25904 14.3959 1.28222 14.1795 1.40191 13.9656C1.48475 13.8177 1.59567 13.7154 1.66958 13.6542C1.74972 13.5878 1.83873 13.5276 1.92358 13.4741C2.08731 13.3708 2.30875 13.2471 2.56833 13.1022L2.58742 13.0915C2.97312 12.8761 3.23008 12.467 3.23008 12C3.23008 11.533 2.97312 11.1239 2.58742 10.9085L2.56831 10.8978C2.30874 10.7529 2.08731 10.6292 1.92358 10.5259C1.83873 10.4724 1.74972 10.4122 1.66957 10.3458C1.59566 10.2846 1.48474 10.1823 1.40191 10.0344C1.28222 9.82054 1.25904 9.60408 1.25245 9.45419C1.24625 9.31328 1.25331 9.14599 1.26023 8.98215C1.26057 8.97408 1.26091 8.96602 1.26125 8.95797C1.34012 7.08185 1.59037 5.66758 2.61992 4.64058C3.36981 3.89255 4.32052 3.56066 5.49531 3.4031C6.63712 3.24997 8.09617 3.24998 9.93872 3.25ZM21.2469 14.5842C21.2469 14.5842 21.2471 14.5852 21.2473 14.5875ZM21.2493 14.726C21.2492 14.7325 21.249 14.7394 21.2488 14.7464C21.2472 14.8104 21.2441 14.8847 21.2401 14.979C21.1621 16.8351 20.9085 17.7111 20.3208 18.2974C19.8962 18.721 19.3145 18.9749 18.3053 19.1102C17.2748 19.2484 15.9165 19.25 14.005 19.25H9.99503C8.08356 19.25 6.72522 19.2484 5.6947 19.1102C4.68555 18.9749 4.10385 18.721 3.67926 18.2974C3.09147 17.7111 2.83796 16.8351 2.75992 14.979C2.75596 14.8847 2.75285 14.8104 2.75121 14.7464C2.75102 14.7394 2.75087 14.7325 2.75073 14.726C2.87539 14.649 3.05444 14.5488 3.31877 14.4012C4.15861 13.9322 4.73008 13.0336 4.73008 12C4.73008 10.9664 4.15861 10.0678 3.31877 9.59884C3.05443 9.45123 2.87539 9.35098 2.75073 9.27401C2.75086 9.26746 2.75102 9.26065 2.75121 9.25358C2.75285 9.18961 2.75596 9.11528 2.75992 9.02097C2.83796 7.16494 3.09147 6.28889 3.67926 5.70256C4.10385 5.27902 4.68555 5.02513 5.6947 4.88979C6.72522 4.75159 8.08356 4.75 9.99503 4.75H14.005C15.9165 4.75 17.2748 4.75159 18.3053 4.88979C19.3145 5.02513 19.8962 5.27902 20.3208 5.70256C20.9085 6.28889 21.1621 7.16494 21.2401 9.02098C21.2441 9.11528 21.2472 9.18961 21.2488 9.25357C21.249 9.26065 21.2492 9.26746 21.2493 9.274C21.1246 9.35098 20.9456 9.45123 20.6813 9.59884C19.8414 10.0678 19.2699 10.9664 19.2699 12C19.2699 13.0336 19.8414 13.9322 20.6813 14.4012C20.9456 14.5488 21.1246 14.649 21.2493 14.726ZM21.3735 9.19072L21.3724 9.19165C21.3766 9.18779 21.3774 9.18748 21.3735 9.19072ZM21.2469 9.41578C21.2469 9.41578 21.247 9.41461 21.2473 9.41248ZM2.62649 9.19072C2.62258 9.18748 2.6234 9.18779 2.62762 9.19165L2.62649 9.19072ZM2.75269 9.41247C2.75305 9.4146 2.75315 9.41578 2.75315 9.41578ZM2.75315 14.5842C2.75315 14.5842 2.75305 14.5854 2.75269 14.5875ZM2.62763 14.8084C2.6234 14.8122 2.62258 14.8125 2.62649 14.8093L2.62763 14.8084ZM21.3724 14.8084L21.3735 14.8093C21.3774 14.8125 21.3766 14.8122 21.3724 14.8084ZM15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L9.53034 15.5303C9.23745 15.8232 8.76257 15.8232 8.46968 15.5303C8.17679 15.2374 8.17679 14.7626 8.46968 14.4697L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z"
      fill={props.primaryColor}
    />
    <Path
      d="M15.5 14.5C15.5 15.0523 15.0523 15.5 14.5 15.5C13.9477 15.5 13.5 15.0523 13.5 14.5C13.5 13.9477 13.9477 13.5 14.5 13.5C15.0523 13.5 15.5 13.9477 15.5 14.5Z"
      fill={props.primaryColor}
    />
    <Path
      d="M10.5 9.5C10.5 10.0523 10.0523 10.5 9.50001 10.5C8.94772 10.5 8.50001 10.0523 8.50001 9.5C8.50001 8.94772 8.94772 8.5 9.50001 8.5C10.0523 8.5 10.5 8.94772 10.5 9.5Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgTicketSale;
