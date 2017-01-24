# react-ontology-ribbon

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

A React component for generating a heatmap type display for Ontology slims.

## Getting started

In your React project, add `react-ontology-ribbon` via npm.

`npm install react-ontology-ribbon`

Then you can use it in a React component such as.

```JSX
import React from 'react';
import {render} from 'react-dom';

import Ribbon from 'react-ontology-ribbon';

class MyClass extends Component {
  constructor() {
    super(props);
    this.state = {
      data: [
        { id: 'GO:12345',
        name: 'a_go_slim_term_name',
        descendant_terms: [
          { id: 'GO:33333', name:'a_descendant_term_1'},
          { id: 'GO:33334', name:'a_descendant_term_2'},
          { id: 'GO:33335', name:'a_descendant_term_3'},
        ]
        }
      ] 
    };

  }

  render() {
    return (
      <div>
        <Ribbon data={this.state.data} />
      </div>
    );
  }
}

render(<MyClass />, document.querySelector('#root'));

```

## Demo

Steps to running the demo locally

```bash
git clone https://github.com/FlyBase/react-ontology-ribbon.git
cd react-ontology-ribbon
npm install
npm run start
```
Browse to whatever URL is indicated on your screen.

## Properties

The Ribbon component takes the following properties.


| Name | Description | Type |  Default |
|:-----|:------------|------|:--------|
| data | The slim terms (see below) | Array of objects |  | 
| heatLevels | The number of gradients to use in the heatmap | number | 8 |
| baseRGB | The RGB values that the gradient is based on. | Array of RGB numbers | [0,96,96] |
| noResults | Content to display if no data is supplied | String or custom compoment|  | 
| title | Label to appear underneath the ribbon | String or custom component | |
| onTermClick | Callback called when the term is clicked | Function | |

## onTermClick callback

This callback is called when the block or text label for the block is clicked.
It is passed the object that represents the slim term as the first argument
and the event object as the second.

```JSX

const handleOnClick = (term, evt) => {
  console.log("Term ID " + term.id);
  console.log("Term name " + term.name);
  console.log("# Descendant terms " + term.descendant_terms.length);
}

## Data object structure.

The data property takes an array of objects that describes the ontology slim that we are 
generating a ribbon for.  Each object has 3 properties, an `id`, a `name`, and `descendant_terms`.
The first two properties are strings while `descendant_terms` is an array of terms contained by
this slim term.  The objects in the `descendant_terms` array must contain an `id` and `name` field as well.

```JSON
[
  {
    "id": "GO:0023052",
    "name": "signaling",
    "descendant_terms": [
      {
        "id": "GO:0007179",
        "name": "transforming growth factor beta receptor signaling pathway"
      },
      {
        "id": "GO:0030509",
        "name": "BMP signaling pathway"
      },
      {
        "id": "GO:0061353",
        "name": "BMP signaling pathway involved in Malpighian tubule cell chemotaxis"
      }
    ]
  },
  {
    "id": "GO:0019538",
    "name": "protein metabolism",
    "descendant_terms": []
  },
  {
    "id": "GO:0050896",
		"name": "response to stimulus",
		"descendant_terms": [
			{
				"id": "GO:0016055",
				"name": "Wnt signaling pathway"
			}
		]
	}
]
```

[build-badge]: https://img.shields.io/travis/FlyBase/react-ontology-ribbon/master.png?style=flat-square
[build]: https://travis-ci.org/FlyBase/react-ontology-ribbon

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-ontology-ribbon

[coveralls-badge]: https://img.shields.io/coveralls/FlyBase/react-ontology-ribbon/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/FlyBase/react-ontology-ribbon
