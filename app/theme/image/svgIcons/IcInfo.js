import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {color} from '../../Colors';
export const Info = props => {
  return (
    <Svg
      fill="#000"
      width={props.width ?? 30}
      height={props.height ?? 30}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 111.577 111.577"
      xmlSpace="preserve"
      {...props}>
      <Path
        d="M78.962 99.536l-1.559 6.373c-4.677 1.846-8.413 3.251-11.195 4.217-2.785.969-6.021 1.451-9.708 1.451-5.662 0-10.066-1.387-13.207-4.142-3.141-2.766-4.712-6.271-4.712-10.523 0-1.646.114-3.339.351-5.064.239-1.727.619-3.672 1.139-5.846l5.845-20.688c.52-1.981.962-3.858 1.316-5.633.359-1.764.532-3.387.532-4.848 0-2.642-.547-4.49-1.636-5.529-1.089-1.036-3.167-1.562-6.252-1.562-1.511 0-3.064.242-4.647.71-1.59.47-2.949.924-4.09 1.346l1.563-6.378c3.829-1.559 7.489-2.894 10.99-4.002 3.501-1.111 6.809-1.667 9.938-1.667 5.623 0 9.962 1.359 13.009 4.077 3.047 2.72 4.57 6.246 4.57 10.591 0 .899-.1 2.483-.315 4.747-.21 2.269-.601 4.348-1.171 6.239l-5.82 20.605c-.477 1.655-.906 3.547-1.279 5.676-.385 2.115-.569 3.731-.569 4.815 0 2.736.61 4.604 1.833 5.597 1.232.993 3.354 1.487 6.368 1.487 1.415 0 3.025-.251 4.814-.744 1.784-.493 3.085-.926 3.892-1.305zm1.476-86.506c0 3.59-1.353 6.656-4.072 9.177-2.712 2.53-5.98 3.796-9.803 3.796-3.835 0-7.111-1.266-9.854-3.796-2.738-2.522-4.11-5.587-4.11-9.177 0-3.583 1.372-6.654 4.11-9.207C59.447 1.274 62.729 0 66.563 0c3.822 0 7.091 1.277 9.803 3.823 2.721 2.553 4.072 5.625 4.072 9.207z"
        fill={props.fill ?? color.darkBrown}
        strokeWidth={props.strokeWidth ?? 1.5}
      />
    </Svg>
  );
};
