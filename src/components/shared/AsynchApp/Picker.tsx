import React from 'react'

interface Props {
  value: string
  onChange: (nextSubReddit: string) => any
  options: string[]
}

export const Picker: React.FC<Props> = ({ value, onChange, options }) => (
  <span>
    <h1>{value}</h1>
    <select
      name="picker"
      id="picker"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option: any) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  </span>
)
