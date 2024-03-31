import React from 'react';
import Searching from '../../images/search.svg';
import PropTypes from 'prop-types';
import { LocaleConsumer } from '../context/LocaleContext';

const SearchBar = ({title,changeSearchParams }) => {
    return (
        <LocaleConsumer>
            {
                ({locale}) => {
                    return (
                        <div className="note-search">
                        <img className="image-search" src={Searching} alt="search" width="20px" height="20px" />
                        <input
                            id="search"
                            className="search-note"
                            placeholder={locale === 'id' ? 'Cari berdasarkan nama' : 'Search by name' }
                            autoComplete="off"
                            value={title}
                            onChange={(event) => changeSearchParams(event.target.value)}
            
                        />
                    </div>
                    )
                }
            }
        </LocaleConsumer>
     
    );
};

SearchBar.propTypes = {
    title: PropTypes.string.isRequired,
    changeSearchParams: PropTypes.func.isRequired,
}
export default SearchBar;
