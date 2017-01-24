import React, { PropTypes } from 'react'
import Block from '../Block';

function Strip({data, title, ...props}) {

  // Generate a strip of blocks.
  const StripOfBlocks = data.map((goSlimItem,i) => {
    return <Block data={goSlimItem} key={goSlimItem.id + '_' + i} {...props} />;
  });

  return(
    <div className="ribbonStrip">
      <div className="blockBacker">
        {StripOfBlocks}
      </div>
      <div className="stripTitle">{title}</div>
    </div>
  );
}


Strip.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
    "id": PropTypes.string.isRequired,
    "name": PropTypes.string.isRequired,
    "descendant_terms": PropTypes.arrayOf(
      PropTypes.shape({
      "id": PropTypes.string.isRequired,
      "name": PropTypes.string.isRequired,
    })),
    "url": PropTypes.string,
  })
  ).isRequired,
};

export default Strip;
