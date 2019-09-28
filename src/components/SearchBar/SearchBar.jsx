import React, { Component } from 'react';
import Image from '../Image/Image';

import logo from '../../images/logo.png';
import '../../styles/searchBar.css';


const SearchBar = ({onInputChange, onSubmit, term}) => {
    
 
        return ( 
            <div className="searchBarWrapper">
             <form onSubmit={onSubmit} className="form">
                  <div className="logoWrapper">
                      <Image src={logo} alt="Logo" />
                  </div>
                 <div className="fieldWrapper">
                 
                 <input type="text" value={term} placeholder="Search" onChange={ onInputChange } className="inputField" />
                 </div>
             </form>
            </div>
         );
    
}

 
export default SearchBar;