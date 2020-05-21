import { AutoComplete } from 'antd'
import React, { useState } from 'react'

type Props = {
  values: Option[]
}

export type Option = {
  label: string
  value: string
}

const AutoCompleteFixedValues: React.FC<Props> = ({ values }: Props) => {
  const [value, setValue] = useState('')
  const [options, setOptions] = useState<Option[]>([])

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : values.filter(o => o.label.includes(searchText))
    )
  }
  const onSelect = (data: string) => {
    console.log('onSelect', data)
  }
  const onChange = (data: string) => {
    setValue(data)
  }

  return (
    <AutoComplete
      value={value}
      options={options}
      style={{ width: 200 }}
      onSelect={onSelect}
      onSearch={onSearch}
      onChange={onChange}
      placeholder="control mode"
    />
  )
}

export default AutoCompleteFixedValues
