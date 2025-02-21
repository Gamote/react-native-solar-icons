import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFigma = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.66665 1.25C6.41148 1.25 4.58331 3.07817 4.58331 5.33333C4.58331 6.70965 5.26424 7.92693 6.30758 8.66667C5.26424 9.4064 4.58331 10.6237 4.58331 12C4.58331 13.3763 5.26424 14.5936 6.30759 15.3333C5.26424 16.0731 4.58331 17.2903 4.58331 18.6667C4.58331 20.9218 6.41148 22.75 8.66665 22.75C10.9218 22.75 12.75 20.9218 12.75 18.6667V15.1624C13.4538 15.738 14.3532 16.0833 15.3333 16.0833C17.5885 16.0833 19.4166 14.2552 19.4166 12C19.4166 10.6237 18.7357 9.4064 17.6924 8.66666C18.7357 7.92693 19.4166 6.70965 19.4166 5.33333C19.4166 3.07817 17.5885 1.25 15.3333 1.25H8.66665ZM11.25 14.5833H8.66665C7.23991 14.5833 6.08331 13.4267 6.08331 12C6.08331 10.5733 7.23991 9.41666 8.66665 9.41667L11.25 9.41666L11.25 12L11.25 14.5833ZM8.66665 7.91667H11.25V2.75H8.66665C7.23991 2.75 6.08331 3.9066 6.08331 5.33333C6.08331 6.76007 7.23991 7.91667 8.66665 7.91667ZM17.9166 5.33333C17.9166 6.75914 16.7615 7.91517 15.3361 7.91667L14.043 7.91666L12.75 7.91666L12.75 2.75H15.3333C16.76 2.75 17.9166 3.9066 17.9166 5.33333ZM12.75 11.9968C12.7517 10.5726 13.9059 9.41838 15.3301 9.41667L15.3358 9.41667C16.7614 9.41801 17.9166 10.5741 17.9166 12C17.9166 13.4267 16.76 14.5833 15.3333 14.5833C13.9076 14.5833 12.7517 13.4284 12.75 12.0032V11.9968ZM8.66665 16.0833C7.23991 16.0833 6.08331 17.2399 6.08331 18.6667C6.08331 20.0934 7.23991 21.25 8.66665 21.25C10.0934 21.25 11.25 20.0934 11.25 18.6667V16.0833H8.66665Z"
      fill={props.primaryColor}
    />
  </Svg>
);
export default SvgFigma;
