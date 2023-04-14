import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyMain from "./components/MyMain";
import MyLeftBar from "./components/MyLeftBar";
import { Container, Row } from "react-bootstrap";


function App() {
  return (
    <BrowserRouter>
      <Container fluid className="ps-0" style={{background:'black'}}>
        <Row>
          <MyLeftBar />
          <Routes>
            <Route path="/" element={<MyMain />} />
            {/*<Route path="/:company" element={<CompanySearchResults />} />
            <Route path="/favourites" element={<Favourites />} />*/}
          </Routes>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
