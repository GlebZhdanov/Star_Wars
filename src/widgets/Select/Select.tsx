import Select from 'react-select';
import { EyeColor } from 'widgets/Select/model/types';
import './Select.scss';

export const SelectCard = ({ onChange }: any) => {
  const onChangeHandler = (newValue: any) => {
    if (onChange) {
      onChange(newValue.value);
    }
  };
  const options = [
    { value: EyeColor.all, label: EyeColor.all },
    { value: EyeColor.brown, label: EyeColor.brown },
    { value: EyeColor.blue, label: EyeColor.blue },
    { value: EyeColor.red, label: EyeColor.red },
    { value: EyeColor.white, label: EyeColor.white },
    { value: EyeColor.yellow, label: EyeColor.yellow },
    { value: EyeColor.gold, label: EyeColor.gold },
    { value: EyeColor.orange, label: EyeColor.orange },
    { value: EyeColor.hazel, label: EyeColor.hazel },
    { value: EyeColor.pink, label: EyeColor.pink },
  ];

  return (
    <div className="content">
      <span className="span">color eye</span>
      <Select
        onChange={onChangeHandler}
        options={options}
        classNamePrefix="select-custom"
        placeholder="All"
      />
    </div>
  );
};
