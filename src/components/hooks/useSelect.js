import React, { useState } from 'react';

const useSelect = (initialState, options) => {
    
    const [state, setState] = useState(initialState);

    const SelectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {options.map(o => (
                <option
                    key={o.value}
                    value={o.value}
                >
                    {o.label}
                </option>
            ))}
        </select>
    );
    return [state, SelectNews];
}
 
export default useSelect;