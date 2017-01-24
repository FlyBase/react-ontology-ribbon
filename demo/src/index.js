import React, { Component } from 'react'
import {render} from 'react-dom'

import GORibbon from '../../src'

import GoSampleData from './sample_data.json';


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
    return <div>
      <h1>react-go-ribbon Demo</h1>
      <div>
        <GORibbon data={GoSampleData} />
        <GORibbon data={GoSampleData} heatLevel={20} />
        <GORibbon data={GoSampleData} heatLevel={20} baseRGB={[0,0,0]}/>
      </div>
      <div style={{clear: "both"}}>
        <GORibbon title="my title 1" data={GoSampleData} onTermClick={this.handleOnClick} />
        <GORibbon title={<span className="blah">My custom span title</span>} data={GoSampleData} heatLevel={20} baseRGB={[0,102,204]}/>
        <GORibbon title="my title 3" data={GoSampleData} heatLevel={20} baseRGB={[153,0,0]} />
      </div>
      <div style={{clear: "both"}}>
        {term && 'You clicked on ' + term.name}
      </div>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
