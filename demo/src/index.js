import React, { Component } from 'react'
import {render} from 'react-dom'

import Ribbon from '../../src'

import SampleData from './sample_data.json';


class Demo extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.state = {
      term: null,
    };
  }

  handleOnClick(slimTerm) {
    console.debug(slimTerm);
    this.setState({term: slimTerm});
  }

  render() {
    const { term } = this.state;
    return(
      <div>
        <h1>react-ontology-ribbon Demo</h1>
        <div>
          <Ribbon data={SampleData} />
          <Ribbon data={SampleData} heatLevel={20} />
          <Ribbon data={SampleData} heatLevel={20} baseRGB={[0,0,0]}/>
        </div>
        <div style={{clear: "both"}}>
          <Ribbon title="my title 1" data={SampleData} onTermClick={this.handleOnClick} />
          <Ribbon
            title={<span className="blah">My custom span title</span>}
            data={SampleData}
            heatLevel={20}
            baseRGB={[0,102,204]}
            onTermClick={this.handleOnClick} 
          />
          <Ribbon
            title="my title 3"
            data={SampleData}
            heatLevel={20}
            baseRGB={[153,0,0]}
            onTermClick={this.handleOnClick} 
          />
          <Ribbon
            title="my title 3"
            data={SampleData}
            heatLevel={20}
            baseRGB={[153,0,0]}
            onTermClick={this.handleOnClick} 
            calcHeatColor={(num_terms, rgb, heat) => {
              return [0,0,0]
            }}
          />
          <Ribbon
            title="my title 3"
            data={SampleData}
            heatLevel={20}
            baseRGB={[153,0,0]}
            onTermClick={this.handleOnClick} 
            itemTitle={() => null}
          />
        </div>
        <div style={{clear: "both"}}>
          {term && 'You clicked on ' + term.name}
        </div>

        <div style={{paddingTop: "50px", clear: "both"}}>
          <Ribbon title="empty w/ string" data={null} noResults="No terms found" />
          <Ribbon title="empty w/ component" data={null} noResults={<div>No terms w/ custom element</div>} />
        </div>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
