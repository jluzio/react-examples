import React from 'react'
import {
  Code as ContentLoader,
  IContentLoaderProps
} from 'react-content-loader'
import { defaultProps } from './content-loader'

const CodeContentLoader: React.FC<IContentLoaderProps> = (
  props: IContentLoaderProps
) => {
  const resolvedProps: IContentLoaderProps = { ...defaultProps, ...props }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ContentLoader {...resolvedProps} />
}

export default CodeContentLoader
