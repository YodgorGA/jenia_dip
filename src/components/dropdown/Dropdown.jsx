import React from 'react';
import { adreses } from '../../helpers/adreses';
import { useState } from 'react';
const Dropdown = (props) => {
    const [currentAdres,setCurrentAdres] = useState(adreses[0]);
    const [dropdownState,setDropdownState] = useState();
    const toggleVisible = () =>{
        dropdownState === 'hidden' ? setDropdownState('') : setDropdownState('hidden') ;
    }
    const handleClick = (evt) =>{
        setCurrentAdres(evt.target.innerHTML);
        props.getAdres(evt.target.innerHTML);
        toggleVisible();
    }
    return (
        <div className={`dropdown_${props.parent}`}>
            <div className="dropdown_container">
                <div className="dropdown-top" onClick={toggleVisible}>{currentAdres}</div>
                <div className={`dropdown-elements ${dropdownState}`}>
                    {adreses.map((adr)=>
                        {
                            return <div 
                                    key={adreses.indexOf(adr)} 
                                    className="dropdown-element"
                                    onClick={handleClick}
                                    >
                                   
                                        {adr}
                                    </div>
                        })}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;