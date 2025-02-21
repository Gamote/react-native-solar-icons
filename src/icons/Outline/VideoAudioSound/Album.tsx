import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlbum = (props: SvgProps) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.69943 1.25001C8.71311 1.25001 8.72698 1.25001 8.74107 1.25001H15.2588C15.2729 1.25001 15.2868 1.25001 15.3005 1.25001C15.5203 1.24995 15.6889 1.2499 15.8362 1.26571C17.1904 1.41104 18.2269 2.52305 18.2898 3.87008C19.5325 4.24111 20.4025 5.4249 20.3417 6.75728C20.7402 6.93704 21.093 7.18502 21.3949 7.5298C22.0113 8.23385 22.1995 9.09539 22.2067 10.1006C22.2137 11.0723 22.0498 12.3015 21.8455 13.8337L21.431 16.9422C21.2713 18.1401 21.1421 19.1096 20.9411 19.8688C20.7319 20.659 20.4231 21.3141 19.8437 21.8215C19.2642 22.3288 18.574 22.5483 17.7631 22.6512C16.984 22.75 16.0059 22.75 14.7975 22.75H9.20257C7.99411 22.75 7.01601 22.75 6.23695 22.6512C5.42602 22.5483 4.7358 22.3288 4.15634 21.8215C3.57688 21.3141 3.26808 20.659 3.0589 19.8688C2.85795 19.1096 2.7287 18.1401 2.569 16.9422L2.15453 13.8337C1.95022 12.3015 1.7863 11.0723 1.79327 10.1006C1.80049 9.09539 1.98871 8.23385 2.60512 7.5298C2.90698 7.18502 3.25985 6.93703 3.65829 6.75728C3.59756 5.42494 4.46746 4.24117 5.71013 3.87011C5.77301 2.52306 6.8095 1.41104 8.16367 1.26571C8.31102 1.2499 8.47958 1.24995 8.69943 1.25001ZM7.23218 3.75001H16.7677C16.6612 3.22633 16.2264 2.8162 15.6762 2.75715C15.6199 2.75111 15.5397 2.75001 15.2588 2.75001H8.74107C8.46021 2.75001 8.38001 2.75111 8.32373 2.75715C7.77352 2.8162 7.3387 3.22633 7.23218 3.75001ZM5.18092 6.36744C6.12326 6.24998 7.31969 6.24999 8.79419 6.25001H15.2058C16.6803 6.24999 17.8768 6.24998 18.8191 6.36744C18.697 5.74074 18.1453 5.25001 17.4619 5.25001H6.5381C5.85473 5.25001 5.303 5.74074 5.18092 6.36744ZM5.25502 7.87068C4.43063 7.98663 4.01366 8.19811 3.7337 8.51788C3.45373 8.83766 3.29921 9.27892 3.29324 10.1114C3.28711 10.9652 3.43527 12.0897 3.64916 13.6939L3.70588 14.1192L4.1273 13.814C5.21478 13.0264 6.82154 13.0652 7.85572 13.9212L11.6939 17.0981C12.0566 17.3983 12.6817 17.4544 13.1328 17.192L13.3996 17.0368C14.6758 16.2944 16.3863 16.3727 17.5638 17.25L19.6414 18.7976C19.7438 18.2419 19.8356 17.5586 19.9509 16.6939L20.3509 13.6939C20.5648 12.0897 20.7129 10.9652 20.7068 10.1114C20.7008 9.27892 20.5463 8.83766 20.2663 8.51788C19.9864 8.19811 19.5694 7.98663 18.745 7.87068C17.8995 7.75177 16.7653 7.75001 15.1469 7.75001H8.85311C7.23473 7.75001 6.10051 7.75177 5.25502 7.87068ZM19.1678 20.3153L16.6677 18.4529C15.9851 17.9444 14.9253 17.8847 14.1539 18.3334L13.8871 18.4886C12.9153 19.0539 11.6045 18.9712 10.7375 18.2536L6.89928 15.0767C6.40129 14.6645 5.55036 14.6355 5.00714 15.0289L3.93108 15.8082L4.04916 16.6939C4.21715 17.9538 4.3352 18.8285 4.50896 19.4849C4.6773 20.1209 4.87542 20.4574 5.14443 20.6929C5.41344 20.9284 5.77316 21.0803 6.42577 21.1631C7.09941 21.2486 7.98203 21.25 9.25311 21.25H14.7469C16.018 21.25 16.9006 21.2486 17.5743 21.1631C18.2269 21.0803 18.5866 20.9284 18.8556 20.6929C18.9718 20.5912 19.0747 20.4706 19.1678 20.3153ZM16.5 10.75C16.0858 10.75 15.75 11.0858 15.75 11.5C15.75 11.9142 16.0858 12.25 16.5 12.25C16.9142 12.25 17.25 11.9142 17.25 11.5C17.25 11.0858 16.9142 10.75 16.5 10.75ZM14.25 11.5C14.25 10.2574 15.2574 9.25001 16.5 9.25001C17.7427 9.25001 18.75 10.2574 18.75 11.5C18.75 12.7427 17.7427 13.75 16.5 13.75C15.2574 13.75 14.25 12.7427 14.25 11.5Z"
      fill="black"
    />
  </Svg>
);
export default SvgAlbum;
