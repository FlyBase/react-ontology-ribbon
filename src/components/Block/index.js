import React from 'react'
import PropTypes from 'prop-types'

function defaultColorAdjustment({numTerms=0, baseRGB=[], heatLevels=0} = {}) {
  // return 'white' if numTerms==0 
  if (numTerms == 0) return '#fff'

  // Returns an array of adjusted colors
  return baseRGB.map(color => {
    // logarithmic heatmap (with cutoff)
    if (numTerms < heatLevels) {
      // instead of just (256-rgb[i])/(Math.pow(2,heat)), which divides space from
      // 'white' (255) down to target color level in halves, this starts at 3/4
      const heatCoef = (3 * (256 - color)) / Math.pow(2, numTerms + 1)
      return Math.round(color + heatCoef)
    }
    return color
  })
}

/*
  Converts an array of RGB values into a value that you can use
  as a CSS value.
*/
function RBGToCssColor(rgb=[]) {
  if (rgb.length === 3) {
    return `rgb(${rgb.join(',')})`
  }
}

function Block({ data, baseRGB = [0,0,0], heatLevels, onTermClick, calcHeatColor = defaultColorAdjustment, itemTitle }) {
  function handleOnClick(evt) {
    if (onTermClick) {
      onTermClick(data, evt)
    }
  }


  const blockTitle = data.name
  const tileStrength = data.descendant_terms.length
  const s = tileStrength == 1 ? '' : 's'
  const blockTitleClass =
    tileStrength > 0 ? 'ribbonBlockTitleTerm bold' : 'ribbonBlockTitleTerm'
  const color = tileStrength ? RBGToCssColor(calcHeatColor({ numTerms:tileStrength, baseRGB: baseRGB, heatLevels: heatLevels, itemData: data})) : ''

  const defaultItemTitle = `${blockTitle}:\n${tileStrength} term${s}`

  return (
    <div className="ribbonBlock" onClick={handleOnClick}>
      <div className={blockTitleClass}>{blockTitle}</div>
      <div
        className="ribbonTile"
        title={itemTitle ? itemTitle(data) : defaultItemTitle}
        style={{ backgroundColor: color }}
      />
    </div>
  )
}

Block.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    descendant_terms: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ),
    url: PropTypes.string,
  }).isRequired,
  baseRGB: PropTypes.arrayOf(
    (propValue, key, componentName, location, propFullName) => {
      if (propValue.length != 3) {
        return new Error(
          `Invalid prop ${propFullName} supplied to ${componentName}.  An array of 3 integers is required.`
        )
      }
    }
  ).isRequired,
  heatLevels: PropTypes.number.isRequired,
  onTermClick: PropTypes.func,
  calcHeatColor: PropTypes.func,
  itemTitle: PropTypes.any
}

export default Block
