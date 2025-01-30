import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
import {color} from '../../Colors';
export const Search = props => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M21 21l-4.35-4.35M19 11a8 8 0 11-16 0 8 8 0 0116 0z"
        stroke="#1A1A1A"
        // strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.strokeWidth ?? 1.5}
      />
    </Svg>
  );
};
