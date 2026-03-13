export default function PhotoCard({photo,isFavorite,toggleFavorite}){

  return(

    <div style={{
      border:"1px solid #ddd",
      borderRadius:"8px",
      padding:"10px"
    }}>

      <img
        src={photo.download_url}
        alt={photo.author}
        style={{
          width:"100%",
          height:"200px",
          objectFit:"cover"
        }}
      />

      <div style={{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"10px"
      }}>

        <span>{photo.author} #{photo.id}</span>

        <button
          onClick={()=>toggleFavorite(photo.id)}
          style={{
            border:"none",
            background:"none",
            fontSize:"18px",
            cursor:"pointer"
          }}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

      </div>

    </div>

  );

}