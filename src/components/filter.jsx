import React, { Component } from 'react';
import Data from '../data.json'
import FilteredMultiSelect from 'react-filtered-multiselect'
const BOOTSTRAP_CLASSES = {
    filter: 'form-control',
    select: 'form-control',
    button: 'btn btn btn-block btn-default',
    buttonActive: 'btn btn btn-block btn-primary',
  }

class Filter extends React.Component {
    state = {selectedConditions: []}
// for the x button removed selection
handleDeselect(index) {
    let selectedConditions = this.state.selectedConditions.slice()
    selectedConditions.splice(index, 1)
    this.setState({selectedConditions})
  }
 //use to select new element when
  handleSelectionChange = (selectedConditions) => {
    this.setState({selectedConditions})
  }
 //from data.json file
  render() {
    let {selectedConditions} = this.state
    return <div>
      <FilteredMultiSelect
        onChange={this.handleSelectionChange}
        options={Data}
        selectedOptions={selectedConditions}
        textProp="condition"
        valueProp="id"
        classNames={BOOTSTRAP_CLASSES}
       />
    //renders nothing is selected
      {selectedConditions.length === 0 && <p>(nothing selected yet)</p>}
      {selectedConditions.length > 0 && <ul>
        {selectedConditions.map((condition, i) => <li key={condition.id}>
          {`${condition.condition} `}
          <button type="button" onClick={() => this.handleDeselect(i)}>
            &times;
          </button>
        </li>)}
      </ul>}
    </div>
  }
}

export default Filter