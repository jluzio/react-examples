/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.css'

export default class ExampleList extends React.Component {
  render() {
    return (
      <div>
        <h2>Examples</h2>
        <Tabs id="tabs" variant="pills">
          <Tab eventKey="tab1" title="Tab1">
            ...Tab1...
          </Tab>
          <Tab eventKey="tab2" title="Tab2">
            ...Tab2...
          </Tab>
        </Tabs>
      </div>
    )
  }
}
