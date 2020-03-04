import React from 'react'
import { Input } from 'antd'
import { logProps } from './LogProps'

interface Props {
  term: string
  onTermChange: (term: string) => void
}

const SearchInput: React.FC<Props> = (props: Props) => {
  const { term, onTermChange } = props
  return <Input value={term} onChange={e => onTermChange(e.target.value)} />
}

export default logProps(SearchInput)
