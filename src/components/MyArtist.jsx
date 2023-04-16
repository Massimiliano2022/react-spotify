import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyArtist = () => {

    const [artistId, setArtistId] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        console.log('PARAMS:'+ params.artistId);
        setArtistId(params.artistId);
    }, [params.artistId]);    

    const URL=`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`;

    return(
        <h1>My Artist</h1>
    );
}
export default MyArtist;