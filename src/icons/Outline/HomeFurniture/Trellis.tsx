import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrellis = (props: SvgProps) => (
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
      d="M11.199 2.92c-.418.129-.957.325-1.711.6-1.066.387-2.32.763-3.42.863-.274.025-.471.042-.616.058a5 5 0 0 0-.213.027l-.013.002h-.004c-.334.077-.54.205-.673.35-.133.146-.242.363-.288.703-.01.069-.011.196-.011.614v8.113h15.5V6.137c0-.418-.002-.545-.011-.614-.046-.34-.155-.557-.288-.702-.133-.146-.339-.274-.673-.35l-.004-.001-.012-.002-.047-.007-.167-.02-.616-.058c-1.1-.1-2.354-.476-3.42-.864a42 42 0 0 0-1.71-.6c-.425-.13-.655-.17-.802-.17s-.377.04-.801.17M21.25 14.268V6.072c0-.324 0-.565-.024-.75-.078-.575-.287-1.097-.667-1.513s-.88-.671-1.447-.8c-.181-.042-.494-.07-.944-.111l-.1-.01c-.904-.081-2.013-.403-3.043-.778l-.02-.007a42 42 0 0 0-1.76-.616c-.456-.14-.863-.237-1.245-.237s-.79.096-1.244.237c-.457.141-1.031.35-1.761.616l-.02.007c-1.03.375-2.139.697-3.043.779l-.1.009c-.45.04-.763.069-.944.11-.567.13-1.067.385-1.447.801s-.589.938-.666 1.514c-.025.184-.025.425-.025.749v8.195a1.746 1.746 0 0 0-1.498 1.737c.006 1.082.032 1.983.167 2.72.14.758.404 1.403.93 1.928.52.52 1.156.784 1.901.924V22a.75.75 0 0 0 1.5 0v-.276c.64.026 1.369.026 2.195.026h8.11c.826 0 1.556 0 2.195-.026V22a.75.75 0 0 0 1.5 0v-.424c.744-.14 1.381-.404 1.902-.924.525-.525.79-1.17.929-1.928.135-.737.161-1.638.167-2.72a1.746 1.746 0 0 0-1.498-1.736m-8.5 5.982H16c1.435 0 2.436-.002 3.192-.103.734-.099 1.122-.28 1.399-.556.243-.244.41-.572.515-1.138.108-.589.136-1.364.142-2.457A.247.247 0 0 0 21 15.75h-8.25zm-1.5-4.5v4.5H8c-1.435 0-2.437-.002-3.192-.103-.734-.099-1.122-.28-1.399-.556-.243-.244-.41-.572-.515-1.138-.108-.589-.136-1.364-.142-2.457-.001-.133.108-.246.248-.246zm-.22-9.28a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0m3 1a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0m1 3a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0M6.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H7a.75.75 0 0 1-.75-.75m8 0a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgTrellis;
