import { useState, useReducer, useMemo, useCallback } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos";
import PhotoCard from "./components/PhotoCard";
import { favoritesReducer, initialState } from "./reducers/favoritesReducer";

export default function App(){

  const {photos,loading,error} = useFetchPhotos();

  const [search,setSearch] = useState("");

  const [favorites,dispatch] = useReducer(
    favoritesReducer,
    initialState
  );

  const toggleFavorite = useCallback((id)=>{
    dispatch({
      type:"TOGGLE",
      payload:id
    });
  },[]);

  const filteredPhotos = useMemo(() => {
  return photos.filter(photo => {
    const label = `${photo.author} #${photo.id}`.toLowerCase();
    return label.includes(search.toLowerCase());
  });
}, [photos, search]);

  if(loading){
    return <h2>Loading Photos...</h2>
  }

  if(error){
    return <h2>Error: {error}</h2>
  }

  return(

    <div style={{maxWidth:"1000px",margin:"auto"}}>

      <h1>Photo Gallery</h1>

      <input
        type="text"
        placeholder="Search by author..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        style={{
          width:"100%",
          padding:"10px",
          marginBottom:"20px"
        }}
      />

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))",
        gap:"20px"
      }}>

        {filteredPhotos.map(photo => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            isFavorite={favorites.includes(photo.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}

      </div>

    </div>

  );

}