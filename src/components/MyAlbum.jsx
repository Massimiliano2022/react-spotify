import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyAlbum = () => {
    
    const [albumId, setAlbumId] = useState(null);
    const params = useParams();

    useEffect(() => {
        console.log("PARAMS: ", params.albumId);
        setAlbumId(params.albumId);
    }, [params.albumId]); 

    const URL= `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`;

    return(
        <h1>My Album</h1>
    );
}
export default MyAlbum;