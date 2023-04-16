import { useState } from "react";
import { useParams } from "react-router-dom";

const MyAlbum = () => {
    
    const [album, setAlbum] = useState(null);
    const params = useParams();

    console.log("PARAMS: ", params);

    //const URL= `https://striveschool-api.herokuapp.com/api/deezer/album/${id}`;

    return(
        <h1>My Album</h1>
    );
}
export default MyAlbum;