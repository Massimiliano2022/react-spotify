import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const MyGallery = (props) => {

    const [albums, setAlbums] = useState([]);


    const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${props.artist}`;

    const fetchAlbums = async () => {

        if (props.artist) {

            const response = await fetch(URL);
            try {
                if (response.ok) {
                    const albums = await response.json();
                    console.log("data : ", albums);

                    const newAlbumsArr = [...albums.data].slice(0, 4);
                    setAlbums(newAlbumsArr);
                    //setLoading(false);

                } else {
                    console.log("Error fetching results");
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        fetchAlbums();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.artist]);

    return (
        <div className="p-4 m-2">
            <h3>{props.title}</h3>
            <Row className="p-0 m-0">
                {albums.map((album, index) => (
                    <Col sm={3} key={index}>
                        <Card className="bg-dark text-light" style={{ width: "200px"}}>
                            <Card.Img variant="top" src={album.album.cover_medium} className="h-100 object-fit-cover" />
                            <Card.Body>
                                <Card.Title className="text-truncate">{album.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );

}
export default MyGallery;