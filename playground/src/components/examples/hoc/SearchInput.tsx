import React from 'react'
import { Input } from 'antd'
import { logProps } from './LogProps'
import { withLog, LogProps } from './WithLog'
import makeCounter, { InjectedCounterProps } from './MakeCounter'

interface Props extends InjectedCounterProps, LogProps {
  term: string
  onTermChange: (term: string) => void
}

const SearchInput: React.FC<Props> = (props: Props) => {
  const { term, onTermChange, onIncrement, value: counterValue, log } = props
  const onChange = (v: string) => {
    log.log(`onChange[${counterValue}]: ${v}`)
    onTermChange(v)
    onIncrement()
  }
  return <Input value={term} onChange={e => onChange(e.target.value)} />
}
export default logProps(withLog(makeCounter(SearchInput)))
