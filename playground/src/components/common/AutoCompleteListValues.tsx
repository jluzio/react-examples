import { AutoComplete } from 'antd'
import React, { useState } from 'react'
import _ from 'lodash'

export type Option = {
  label?: string
  value: string
}

type Props = {
  values: Option[]
  defaultValue?: Option | null
  onSelect: (selected: Option | null) => void
  style?: React.CSSProperties
  placeholder?: string
}

const AutoCompleteListValues: React.FC<Props> = ({
  values,
  defaultValue,
  onSelect,
  style,
  placeholder
}: Props) => {
  const [currentValue, setCurrentValue] = useState(
    defaultValue?.label ?? defaultValue?.value
  )
  const [options, setOptions] = useState<Option[]>([])

  const handleSearch = (searchText: string) => {
    if (!searchText) {
      setOptions([])
    }
    const finalSearchText = searchText.toLowerCase()
    setOptions(
      values.filter(o => {
        const value = o.value.toLowerCase()
        const label = o.label?.toLowerCase()
        return (
          _.includes(value, finalSearchText) ||
          _.includes(label, finalSearchText)
        )
      })
    )
  }

  const handleSelect = (value: string, option: Option | null) => {
    onSelect(option)
    setCurrentValue(option?.label ?? option?.value)
  }

  const handleChange = (value: string) => {
    // const option = values.find(o => o.value === value) ?? null
    setCurrentValue(value)
  }

  const interfaceHandleSelect = (value: string, option: any) => {
    handleSelect(value, option as Option)
  }

  return (
    <AutoComplete
      value={currentValue}
      options={options}
      style={style}
      onSelect={interfaceHandleSelect}
      onSearch={handleSearch}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

export default AutoCompleteListValues
