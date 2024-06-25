import React, { FC } from 'react';

import { DescriptionProps } from './types';
import { parseDescKeys } from './consts';


export const Description: FC<DescriptionProps> = ({ description }) => {
  const descJson: Record<string, boolean | number | string> = JSON.parse(description || '');
  return (
    <div>
      { Object.keys(descJson).map((key, i) => (
        descJson[key] ? <p key={ i }>{ parseDescKeys[key] }: { descJson[key] }</p> : ''
      )) }
    </div>
  );
};
