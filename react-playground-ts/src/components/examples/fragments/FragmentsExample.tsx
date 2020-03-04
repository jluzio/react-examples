/* eslint-disable react/destructuring-assignment */
import React from 'react'

// <> is equal to React.Fragment

function Glossary(props: any) {
  return (
    <dl>
      {props.items.map((item: any) => (
        // Without the `key`, React will fire a key warning
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}

const FragmentsExample: React.FC = () => {
  const items = [
    { id: 'id1', term: 'term1', description: 'description1' },
    { id: 'id2', term: 'term1', description: 'description2' },
    { id: 'id3', term: 'term1', description: 'description3' }
  ]
  return (
    <>
      <div>line1</div>
      <div>line2</div>
      <div>line3</div>
      <Glossary items={items} />
    </>
  )
}
export default FragmentsExample
