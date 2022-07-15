

import React from 'react' 
import './App.css';

import { DataContext } from './Context';


export class AppWithContext extends React.Component{


  render(){
   return <>
  
    <DataContext.Consumer> 
	    {({items, albumsCount, featuredAlbums, changeCount, handleForm}) => {
        const albumsToShow = !featuredAlbums.length ? items : featuredAlbums
          return (
            <>
            <form onSubmit={handleForm}>
              <input value={albumsCount} onChange={changeCount}></input>
              <button>Show</button>
            </form>
            <div>
              
              {albumsToShow.map((album) => (
                <div key={album.id}>
                  {album.id} ----- {album.title}
                </div>
                )
              )}
            </div>
            </>
          )
        // }

      }}
    </DataContext.Consumer>

    </>
  };

}


// export default App;
