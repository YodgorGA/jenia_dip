import React from 'react';

const PaginationButton = (props) => {
    return (
        <button onClick={props.handleclick}
        className='pagination-number' 
        type='button'>
            {props.content}
        </button>
    );
};

export default PaginationButton;