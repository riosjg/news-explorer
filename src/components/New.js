import React from 'react';

const New = ({news}) => {
    const {image, title, url, source, publishedAt} = news;
    return ( 
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                <img src={image} alt={title}/>
                </div>
                <div className="card-content">
                    <h4>{title}</h4>
                    <p>{source.name} - {publishedAt}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >See full news</a>
                </div>
            </div>
        </div> );
}
 
export default New;