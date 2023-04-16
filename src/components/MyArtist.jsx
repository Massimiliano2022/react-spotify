import { useState } from "react";
import { useParams } from "react-router-dom";

const MyArtist = () => {

    const [artist, setArtist] = useState(null);
    const params = useParams();

    console.log("PARAMS: ", params);

    //const URL=`https://striveschool-api.herokuapp.com/api/deezer/artist/${id}`

    return(
        <h1>My Artist</h1>
    );
}
export default MyArtist;