import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    };
    return (
        <div className="ui segement">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search for a Video</label>
                    <input
                        value={term}
                        type="text"
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
