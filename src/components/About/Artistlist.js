import React from 'react';
import { Link } from 'react-router-dom';

const Artistlist = (props) =>{
    //console.log(props.myartists.SearchedArtistList);
    console.log(props);
    return (
        <div className="artist_container">
            { props.myartists && props.myartists.length > 0 ?
                props.myartists.map( item => (
                 <Link to={`/detailspage/${item.id}`} key={item.id} className="artist_item" >
                   
                    <div className="cover" style={{
                            background:`url(${item.cover})`
                        }}>
                       <div>
                           {item.name}
                       </div>
                    </div>
                </Link>
                )) : null
            }
    
        </div>
    )
}

export default Artistlist;