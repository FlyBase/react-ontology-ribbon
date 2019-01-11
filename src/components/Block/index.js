import React from 'react'
import PropTypes from 'prop-types'

function heatColor(heat, rgb, levels) {
  // return 'white' if heat==0 (which should never happen)
  if (heat == 0) return '#fff'
  const c = [0, 0, 0] // [r,g,b]
  for (let i = 0; i < 3; i++) {
    // logarithmic heatmap (with cutoff)
    if (heat < levels) {
      // instead of just (256-rgb[i])/(Math.pow(2,heat)), which divides space from
      // 'white' (255) down to target color level in halves, this starts at 3/4
      const heatCoef = (3 * (256 - rgb[i])) / Math.pow(2, heat + 1)
      c[i] = Math.round(rgb[i] + heatCoef)
    } else {
      c[i] = rgb[i]
    }
  }
  return `rgb(${c.join(',')})`
}

function Block({ data, baseRGB, heatLevels, onTermClick }) {
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
  const color = tileStrength ? heatColor(tileStrength, baseRGB, heatLevels) : ''

  return (
    <div className="ribbonBlock" onClick={handleOnClick}>
      <div className={blockTitleClass}>{blockTitle}</div>
      <div
        className="ribbonTile"
        title={`${blockTitle}:\n${tileStrength} term ${s}`}
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
}

export default Block
