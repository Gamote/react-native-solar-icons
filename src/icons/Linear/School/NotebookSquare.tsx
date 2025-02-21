import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNotebookSquare = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m16.557 6.022-.037-.75zM14.7 6.27l-.2-.723zm-2.178 1-.376-.65zM7.487 6.06l-.055.748zM9 6.27l-.178.728zm2.465 1.022-.349.664zm1.042 8.43.35.663zM15 14.684l-.178-.728zm1.49-.208.056.748zm-4.997 1.245-.35.664zM9 14.685l.178-.728zm-1.49-.208-.056.748zm-.76-1.566V7.496h-1.5v5.415zm12 0V7.45h-1.5v5.46zm-2.23-7.638c-.63.03-1.397.102-2.02.275l.4 1.446c.458-.127 1.09-.194 1.693-.223zm-2.02.275c-.832.23-1.798.752-2.354 1.073l.752 1.299c.55-.32 1.372-.752 2.002-.926zm-7.068 1.26c.5.037 1.007.098 1.39.191l.356-1.457c-.505-.123-1.11-.19-1.636-.23zM8.822 7c.726.178 1.682.637 2.294.958l.697-1.328c-.615-.323-1.713-.862-2.635-1.087zm4.035 9.387c.61-.321 1.583-.792 2.321-.972l-.356-1.457c-.935.228-2.054.78-2.664 1.102zm2.321-.972c.377-.092.875-.152 1.368-.19l-.112-1.495c-.52.039-1.114.106-1.612.228zm-3.336-.355c-.61-.322-1.729-.874-2.664-1.102l-.356 1.457c.738.18 1.711.65 2.321.972zm-2.664-1.102c-.498-.122-1.093-.19-1.612-.228l-.112 1.496c.493.037.99.097 1.368.189zm8.072-1.046c0 .405-.34.783-.816.818l.112 1.496c1.186-.088 2.204-1.053 2.204-2.314zm1.5-5.46c0-1.194-.958-2.24-2.23-2.178l.073 1.498c.338-.017.657.263.657.68zm-13.5 5.46c0 1.26 1.018 2.226 2.204 2.314l.112-1.496c-.476-.035-.816-.413-.816-.818zm6.908 2.148a.34.34 0 0 1-.316 0l-.699 1.327a1.84 1.84 0 0 0 1.714 0zm-.012-8.438a.35.35 0 0 1-.333.008l-.697 1.328a1.85 1.85 0 0 0 1.782-.037zm-5.396.875c0-.426.333-.713.682-.687l.11-1.496c-1.294-.095-2.292.962-2.292 2.183z"
    />
    <Path
      stroke="#000"
      strokeWidth={1.5}
      d="M12 7.585V16M2 9c0-3.771 0-5.657 1.172-6.828S6.229 1 10 1h4c3.771 0 5.657 0 6.828 1.172S22 5.229 22 9v4c0 3.771 0 5.657-1.172 6.828S17.771 21 14 21h-4c-3.771 0-5.657 0-6.828-1.172S2 16.771 2 13z"
    />
  </Svg>
);
export default SvgNotebookSquare;
