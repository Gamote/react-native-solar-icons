import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBagMusic = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M14.868 10.412a1 1 0 0 1 .11-.043.25.25 0 0 1 .254.157 1 1 0 0 1 .011.117c.007.118.007.277.007.528a7 7 0 0 1-.005.259.25.25 0 0 1-.093.15l-.038.022c-.04.023-.095.05-.191.098l-1.317.658c-.224.113-.366.183-.474.23a1 1 0 0 1-.11.043.25.25 0 0 1-.254-.157 1 1 0 0 1-.012-.117 11 11 0 0 1-.006-.528 7 7 0 0 1 .005-.259.25.25 0 0 1 .093-.15l.038-.022c.04-.023.095-.05.191-.098l1.317-.658c.224-.113.366-.183.474-.23M10 15.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
    />
    <Path
      fill="#000"
      fillRule="evenodd"
      d="M8.25 6.015V5a3.75 3.75 0 1 1 7.5 0v1.015c1.287.039 2.075.177 2.676.676.833.692 1.053 1.862 1.492 4.203l.75 4c.617 3.292.925 4.938.026 6.022C19.794 22 18.119 22 14.77 22H9.23c-3.35 0-5.024 0-5.924-1.084s-.59-2.73.026-6.022l.75-4c.44-2.34.659-3.511 1.492-4.203.601-.499 1.389-.637 2.676-.676M9.75 5a2.25 2.25 0 0 1 4.5 0v1h-4.5zM10 19.75A2.75 2.75 0 0 0 12.75 17v-2.886q.222.032.453.006c.198-.023.377-.09.528-.156.149-.065.326-.154.53-.256l1.37-.685a2.6 2.6 0 0 0 .432-.25 1.75 1.75 0 0 0 .656-1.062c.031-.166.031-.338.031-.5v-.059c0-.227 0-.426-.009-.587a1.9 1.9 0 0 0-.096-.543 1.75 1.75 0 0 0-1.848-1.142c-.198.023-.377.09-.528.156-.149.065-.326.154-.53.256l-1.37.685a2.6 2.6 0 0 0-.432.25 1.75 1.75 0 0 0-.656 1.062c-.032.166-.031.378-.031.54v2.72a2.75 2.75 0 1 0-1.25 5.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBagMusic;
