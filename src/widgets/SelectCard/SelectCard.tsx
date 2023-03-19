import React from 'react';
import { EyeColor } from '../../shared/ui/Select/model/types';
import { Select } from '../../shared/ui/Select/Select';

interface CardSelectProps {
  value?: any,
  onChange?: (value: string) => void,
}

export const SelectCard = (props: CardSelectProps) => {
  const { value, onChange } = props;
  const options = [
    { value: EyeColor.all, content: EyeColor.all },
    { value: EyeColor.brown, content: EyeColor.brown },
    { value: EyeColor.blue, content: EyeColor.blue },
    { value: EyeColor.red, content: EyeColor.red },
    { value: EyeColor.white, content: EyeColor.white },
    { value: EyeColor.yellow, content: EyeColor.yellow },
    { value: EyeColor.gold, content: EyeColor.gold },
    { value: EyeColor.orange, content: EyeColor.orange },
    { value: EyeColor.hazel, content: EyeColor.hazel },
    { value: EyeColor.pink, content: EyeColor.pink },
  ];

  return (
    <Select
      options={options}
      label="color eye"
      onChange={onChange}
      value={value}
    />
  );
};
