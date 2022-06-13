import React from 'react';
import PaginationButton from './PaginationButton';

const Pagination = (props) => {
    const handlePaginationClick = ()=>{

    }
    return (
        <div className='pagination_container'>
            <div className='pagination-body'>
                <div className='pagination-buttons'>                    
                    <button onClick={props.prev} className='pagination-prev'>Назад</button>
                    <PaginationButton handleclick={props.handleclick} content='1'/>
                    <PaginationButton handleclick={props.handleclick} content='2'/>
                    <button onClick={props.next} className='pagination-next'>Вперед</button>
                </div>                  
            </div>
        </div>
    );
};

export default Pagination;