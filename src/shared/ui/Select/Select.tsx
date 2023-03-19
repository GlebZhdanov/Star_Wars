import { ChangeEvent, memo, useMemo } from 'react';
import classes from './Select.module.scss';

export interface SelectOptions {
  value: string,
  content: string,
}

interface SelectProps {
  label?: string,
  options?: SelectOptions[],
  value?: string,
  onChange?: (value: string) => void;
}

export const Select = memo((props: SelectProps) => {
  const {
    label,
    options,
    value,
    onChange,
  } = props;

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  const optionList = useMemo(() => options?.map((opt) => (
    <option
      className={classes.option}
      value={opt.value}
      key={opt.value}
    >
      {opt.content}
    </option>
  )), [options]);

  return (
    <div className={classes.select_container}>
      {label && (
        <span className={classes.label}>
          {label}
        </span>
      )}
      <></>
      <select
        className={classes.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionList}
      </select>
    </div>
  );
});
