import React from 'react';
import New from './New';

const newsList = ({news}) => (
    <div className="row">
        {news.map((n,i) => (
            <New
                key={i}
                news={n}
            />
        ))}
    </div>
);
 
export default newsList;