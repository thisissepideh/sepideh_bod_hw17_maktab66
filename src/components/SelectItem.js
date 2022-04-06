import React from 'react';
import PropTypes from 'prop-types';

function SelectItem({title}) {
 
    return (
        <div>
            {title}
        </div>
    );
}

SelectItem.propTypes = {
    title: PropTypes.string
  }
export default SelectItem;