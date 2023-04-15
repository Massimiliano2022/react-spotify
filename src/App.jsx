import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container, Row } from "react-bootstrap";

import MyMain from "./components/MyMain";
import MyLeftBar from "./components/MyLeftBar";
import MyBottomNav from "./components/MyBottomNav";


function App() {
  return (
    <BrowserRouter>
      <Container fluid style={{background: "linear-gradient(to right, #334660, #111821)"}}>
        <Row>
          <MyLeftBar />
          <Routes>
            <Route path="/" element={<MyMain />} />
            {/*<Route path="/:company" element={<CompanySearchResults />} />
            <Route path="/favourites" element={<Favourites />} />*/}
          </Routes>
        </Row>
        <Row>
          <MyBottomNav/>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
