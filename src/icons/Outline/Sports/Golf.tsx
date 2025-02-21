import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGolf = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V3.03654L17.8117 5.56732C18.5461 5.93447 19.1721 6.24743 19.6077 6.55149C20.0495 6.85982 20.5139 7.3075 20.5139 8C20.5139 8.6925 20.0495 9.14018 19.6077 9.44851C19.1721 9.75257 18.5461 10.0655 17.8116 10.4327L12.75 12.9635V14.2595C15.2793 14.3234 17.5807 14.7089 19.3188 15.3172C20.2696 15.65 21.0925 16.0635 21.6923 16.5598C22.2874 17.0522 22.75 17.7041 22.75 18.5C22.75 19.2959 22.2874 19.9478 21.6923 20.4402C21.0925 20.9365 20.2696 21.35 19.3188 21.6828C17.4104 22.3507 14.8228 22.75 12 22.75C9.17724 22.75 6.58961 22.3507 4.68117 21.6828C3.73041 21.35 2.90754 20.9365 2.30771 20.4402C1.71264 19.9478 1.25 19.2959 1.25 18.5C1.25 17.7041 1.71264 17.0522 2.30771 16.5598C2.90754 16.0635 3.73041 15.65 4.68117 15.3172C6.41925 14.7089 8.72068 14.3234 11.25 14.2595V12.5216C11.2496 12.5076 11.2496 12.4935 11.25 12.4796V3.52045C11.2496 3.50646 11.2496 3.49244 11.25 3.4784V2C11.25 1.58579 11.5858 1.25 12 1.25ZM12.75 4.71358V11.2864L17.0868 9.11804C17.8902 8.71635 18.415 8.45177 18.7492 8.21847C18.9074 8.10809 18.9756 8.03693 19.0033 8C18.9756 7.96307 18.9074 7.89191 18.7492 7.78153C18.415 7.54823 17.8902 7.28365 17.0868 6.88196L12.75 4.71358ZM19.0205 8.03071C19.0197 8.03063 19.0173 8.02644 19.0156 8.01836C19.0205 8.02676 19.0213 8.0308 19.0205 8.03071ZM19.0156 7.98164C19.0173 7.97356 19.0197 7.96937 19.0205 7.96929C19.0213 7.96921 19.0205 7.97324 19.0156 7.98164ZM11.25 15.76C8.85463 15.8238 6.72746 16.1903 5.17669 16.733C4.31781 17.0336 3.67621 17.3744 3.26399 17.7155C2.847 18.0605 2.75 18.3294 2.75 18.5C2.75 18.6706 2.847 18.9395 3.26399 19.2845C3.67621 19.6256 4.31781 19.9664 5.17669 20.267C6.88754 20.8658 9.29991 21.25 12 21.25C14.7001 21.25 17.1125 20.8658 18.8233 20.267C19.6822 19.9664 20.3238 19.6256 20.736 19.2845C21.153 18.9395 21.25 18.6706 21.25 18.5C21.25 18.3294 21.153 18.0605 20.736 17.7155C20.3238 17.3744 19.6822 17.0336 18.8233 16.733C17.2725 16.1903 15.1454 15.8238 12.75 15.76V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V15.76Z"
      fill="black"
    />
  </Svg>
);
export default SvgGolf;
