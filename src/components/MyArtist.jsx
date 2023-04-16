import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MyArtist = () => {

    const [artistId, setArtistId] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        console.log('PARAMS:'+ params);
        setArtistId(params.artistId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.artistId]);    

    const URL=`https://striveschool-api.herokuapp.com/api/deezer/artist/${artistId}`;

    return(
        <h1>My Artist</h1>
    );
}
export default MyArtist;