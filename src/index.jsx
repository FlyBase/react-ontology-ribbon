import React from 'react'
import PropTypes from 'prop-types'

import Strip from './components/Strip'

function Ribbon({ noResults, data = [], ...rest }) {
  if (data && data.length > 0) {
    return <Strip data={data} {...rest} />
  } else {
    return <div>{noResults}</div>
  }
}

Ribbon.propTypes = {
  heatLevels: PropTypes.number,
  baseRGB: PropTypes.arrayOf(PropTypes.number),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      descendant_terms: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
        })
      ),
    })
  ),
  noResults: PropTypes.any,
  title: PropTypes.any,
  itemTitle: PropTypes.any,
  onTermClick: PropTypes.func,
  calcHeatColor: PropTypes.func,
}

Ribbon.defaultProps = {
  heatLevels: 8,
  baseRGB: [0, 96, 96],
  data: [],
  noResults: 'No ribbon data found',
}

export default Ribbon
