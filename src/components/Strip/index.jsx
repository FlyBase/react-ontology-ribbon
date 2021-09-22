import React from 'react'
import PropTypes from 'prop-types'
import Block from '../Block'

import classes from './index.module.css'

const Strip = ({ data, title, ...props }) => {
  // Generate a strip of blocks.
  const StripOfBlocks = data.map((goSlimItem, i) => {
    return <Block data={goSlimItem} key={goSlimItem.id + '_' + i} {...props} />
  })

  return (
    <div className={classes.ribbonStrip}>
      <div>{StripOfBlocks}</div>
      {title && <div className={classes.stripTitle}>{title}</div>}
    </div>
  )
}

Strip.propTypes = {
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
      url: PropTypes.string,
    })
  ).isRequired,
}

export default Strip
