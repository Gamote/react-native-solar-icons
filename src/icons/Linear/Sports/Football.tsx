import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFootball = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="m9.198 11.958.716-.221zm.348-1.09-.456-.595zm.373 3.427-.717.221zm4.139 0-.717-.221zm.373-3.427-.455.596zm.348 1.09.717.221zm-2.184-2.494.455-.596zm-1.213 0 .456.595zm8.803 8.286a.75.75 0 0 0 0-1.5zm-5.406 1.985-.711-.237zm-1.299 1.528a.75.75 0 1 0 1.423.474zM3.998 16.25a.75.75 0 0 0 0 1.5zm5.405 3.485.712-.237zm-.124 2.002a.75.75 0 0 0 1.423-.474zm-1.058-4.36-.44.609zM5.556 5.46a.75.75 0 0 0-1.449.388zM5.25 7.215l-.725.194zM3.592 11.59l-.414-.626zm-1.965.399a.75.75 0 1 0 .828 1.251zm18.307-6.14a.75.75 0 0 0-1.449-.388zm-1.143 1.367-.724-.194zm1.658 4.374-.413.625zm1.137 1.65a.75.75 0 0 0 .828-1.251zM16.09 3.836a.75.75 0 0 0-.864-1.226zm-1.752.319.432.612zm-4.672-.051-.446.603zm-1.05-1.707a.75.75 0 1 0-.891 1.206zm6.163 8.97-.716.222zm-5.581 0 .716.222zM21.227 12c0 5.11-4.137 9.25-9.238 9.25v1.5c5.931 0 10.738-4.814 10.738-10.75zm-9.238 9.25c-5.102 0-9.239-4.14-9.239-9.25h-1.5c0 5.936 4.807 10.75 10.739 10.75zM2.75 12c0-5.11 4.137-9.25 9.239-9.25v-1.5C6.057 1.25 1.25 6.064 1.25 12zm9.239-9.25c5.1 0 9.238 4.14 9.238 9.25h1.5c0-5.936-4.807-10.75-10.738-10.75zm.15 7.31 1.837 1.404.911-1.191-1.837-1.405zm1.924 1.677-.722 2.337 1.434.442.72-2.337zm-.96 2.513h-2.23v1.5h2.23zm-2.467-.176-.722-2.337-1.433.442.721 2.337zM10 11.464l1.837-1.405-.911-1.191-1.837 1.405zm10.184 4.786H18.57v1.5h1.615zm-6.117 3.248-.588 1.765 1.423.474.588-1.765zm4.502-3.248c-.678 0-1.25-.001-1.715.052-.484.055-.928.176-1.332.467l.878 1.217c.12-.087.284-.155.625-.194.36-.04.831-.042 1.544-.042zm-3.08 3.722c.226-.676.376-1.124.53-1.453.144-.312.26-.447.38-.533l-.877-1.217c-.404.292-.659.675-.864 1.118-.198.425-.377.968-.591 1.611zM3.999 17.75h1.615v-1.5H3.998zm4.694 2.222.587 1.765 1.423-.474-.587-1.765zm-3.08-2.222c.713 0 1.184.001 1.545.042.34.04.505.107.625.194l.878-1.217c-.404-.29-.849-.412-1.333-.467-.465-.053-1.037-.052-1.714-.052zm4.503 1.748c-.215-.643-.394-1.186-.592-1.611-.205-.442-.46-.826-.863-1.118l-.878 1.217c.12.086.236.22.381.533.153.33.303.777.529 1.453zM4.107 5.848l.418 1.561 1.449-.388-.418-1.562zm-.929 5.115-1.55 1.025.827 1.251 1.55-1.025zm1.347-3.554c.184.689.305 1.145.359 1.504.05.34.027.518-.025.656l1.403.532c.176-.466.177-.926.105-1.409-.069-.463-.218-1.015-.393-1.67zm-.52 4.805c.566-.374 1.043-.688 1.402-.989.374-.313.678-.659.855-1.124l-1.403-.532c-.052.138-.152.286-.416.507-.278.233-.67.494-1.265.887zm14.48-6.754-.418 1.561 1.449.388.418-1.562zm1.55 6.754 1.551 1.025.828-1.251-1.551-1.025zm-1.968-5.193c-.175.656-.324 1.208-.393 1.671-.072.483-.071.944.105 1.409l1.403-.532c-.052-.138-.075-.315-.025-.656.054-.36.175-.815.359-1.504zm2.796 3.942c-.594-.393-.987-.654-1.265-.887-.264-.22-.364-.369-.416-.507l-1.403.532c.177.465.481.811.855 1.124.359.301.836.616 1.402.99zM15.226 2.61l-1.32.932.864 1.225 1.32-.93zm-5.115.89L8.615 2.398l-.89 1.206L9.22 4.707zm3.794.042c-.582.41-.968.681-1.286.855-.302.165-.475.204-.622.203l-.017 1.5c.498.005.93-.153 1.359-.387.41-.225.877-.555 1.43-.946zM9.22 4.707c.546.403 1.005.743 1.41.977.423.243.853.41 1.35.416l.017-1.5c-.148-.002-.32-.045-.618-.216-.315-.181-.695-.46-1.268-.883zm4.756 6.757a.25.25 0 0 1 .087.125l1.433-.443a1.75 1.75 0 0 0-.609-.873zm.087.125a.25.25 0 0 1 0 .148l1.433.442a1.75 1.75 0 0 0 0-1.033zm4.13-2.447-3.7 1.533.573 1.386 3.702-1.533zm-5.143-.274a1.75 1.75 0 0 0-1.062-.36v1.5c.054 0 .107.017.151.052zm-1.062-.36c-.373 0-.748.12-1.061.36l.91 1.191a.25.25 0 0 1 .152-.05zm.75.75V5.35h-1.5v3.908zm.603 4.816a.25.25 0 0 1-.084.123l.928 1.178c.272-.214.482-.51.59-.859zm-.084.123a.25.25 0 0 1-.153.053v1.5c.402 0 .78-.138 1.081-.375zm3.272 2.69-2.24-2.592-1.135.982 2.24 2.591zm-5.656-2.637a.25.25 0 0 1-.153-.053l-.928 1.178c.3.237.679.375 1.081.375zm-.153-.053a.25.25 0 0 1-.084-.123l-1.434.442c.108.349.317.645.59.86zM8.81 17.84l2.036-2.592-1.18-.926-2.035 2.591zm1.104-6.104a.25.25 0 0 1 0-.148l-1.433-.443a1.75 1.75 0 0 0 0 1.033zm0-.148a.25.25 0 0 1 .087-.125l-.911-1.191a1.75 1.75 0 0 0-.609.874zm-.425-.912L5.852 9.144l-.583 1.382 3.637 1.533z"
    />
  </Svg>
);
export default SvgFootball;
