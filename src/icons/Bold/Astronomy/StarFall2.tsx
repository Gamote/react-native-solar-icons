import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStarFall2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M11.58 4.776c.695-1.77 1.042-2.656 1.769-2.765.726-.11 1.35.63 2.6 2.109l.323.382c.355.42.532.63.773.75s.52.137 1.075.17l.506.029c1.955.114 2.932.172 3.271.81.34.64-.184 1.438-1.232 3.033l-.27.413c-.298.453-.447.68-.487.939s.032.52.178 1.043l.133.477c.514 1.842.77 2.762.254 3.266-.517.505-1.465.258-3.361-.235l-.491-.127c-.539-.14-.808-.21-1.074-.17-.267.04-.5.185-.965.476l-.423.265c-1.638 1.024-2.457 1.536-3.115 1.208-.659-.327-.721-1.277-.846-3.177l-.032-.492c-.035-.54-.053-.81-.177-1.044s-.341-.406-.775-.75l-.394-.312C7.294 9.865 6.53 9.26 6.64 8.554s1.02-1.047 2.839-1.729l.47-.176c.517-.194.776-.29.965-.475.19-.185.288-.437.486-.94zM5.31 9.592C2.873 11.921 1.275 15.805 2.331 22c.943-2.604 3.526-4.76 6.581-6.048-.106-.592-.154-1.316-.204-2.08l-.039-.594a22 22 0 0 0-.032-.43l-.086-.072c-.072-.059-.157-.126-.268-.214l-.475-.377c-.694-.549-1.34-1.06-1.783-1.532-.253-.269-.536-.623-.715-1.06"
    />
    <Path fill="#000" d="m10.347 15.423-.015-.115.056.102z" />
  </Svg>
);
export default SvgStarFall2;
