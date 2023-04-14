import { Col } from "react-bootstrap";
import MyGallery from "./MyGallery";
import { useEffect, useState } from "react";

const MyMain = () => {

    const rockArtists = ['queen','u2','thepolice','eagles','thedoors','oasis','thewho','bonjovi'];
    const popArtists = ['maroon5','coldplay','onerepublic','jamesblunt','katyperry','arianagrande'];
    const hipHopArtists = ['eminem','snoopdogg','lilwayne','drake','kanyewest'];

    const [rockArtist , setRockArtist] = useState("");
    const [popArtist , setPopArtist] = useState("");
    const [hipHopArtist , sethipHopArtist] = useState("");

    useEffect(() => {
        setRockArtist(rockArtists[Math.floor(Math.random() * rockArtists.length)]);
        setPopArtist(popArtists[Math.floor(Math.random() * popArtists.length)]);
        sethipHopArtist(hipHopArtists[Math.floor(Math.random() * hipHopArtists.length)]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return(
        <Col sm={10} className="text-light" style={{marginLeft:"16.66667%"}}>

            <MyGallery title={"Rock Classics"} artist={rockArtist}/>
            <MyGallery title={"Pop Culture"} artist={popArtist}/>
            <MyGallery title={"Hip Hop"} artist={hipHopArtist}/>

        </Col>
    );
}
export default MyMain;