import React from 'react';

export default function Checkbox({ name, value, handleChange, id, className }) {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ');
      }
  return (
    <input
      type="checkbox"
      id={id}
      name={name}
      value={value}
      className={classNames(
        ' border-seamlessCyan-600 text-sky-700  focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 w-[19px] h-[19px]',
        className
      )}
      onChange={e => handleChange(e)}
      checked={value}
    />
  );
}
