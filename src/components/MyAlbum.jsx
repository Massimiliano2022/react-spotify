import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Star, StarFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MyAlbum = () => {

    const [albumId, setAlbumId] = useState("");
    const params = useParams();

    const favourites = useSelector(state => state.favourite.list);
    const dispatch = useDispatch();

    const isFav = favourites.includes(params.albumId);

    useEffect(() => {
        console.log("PARAMS: ", params);
        setAlbumId(params.albumId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.albumId]);

    const URL = `https://striveschool-api.herokuapp.com/api/deezer/album/${albumId}`;

    return (
        <Col sm={10} className="text-light" style={{marginLeft:"16.66667%", paddingBottom:"6rem"}}>
            {isFav ? (
                <StarFill
                    color="gold"
                    size={22}
                    className="me-2 my-auto"
                    onClick={() =>
                        dispatch({
                            type: "REMOVE_FROM_FAVOURITE",
                            payload: albumId
                        })
                    }
                />
            ) : (
                <Star
                    color="gold"
                    size={22}
                    className="me-2 my-auto"
                    onClick={() =>
                        dispatch({
                            type: "ADD_TO_FAVOURITE",
                            payload: albumId
                        })
                    }
                />
                )}

            {/*<Star color="gold" size={22} className="me-2 my-auto" />*/}

        </Col>
    );
}
export default MyAlbum;