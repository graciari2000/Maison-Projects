import React from "react";
import HelloWorld from "./HelloWorld"
import "./App.css";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import YoutubeEmbed from "./YoutubeEmbed";
import Footer from "./footer";
import CardGrid from "./card";
import "./HelloWorld.module.css";


function App() {
  return (
    <div className="App">
      <HelloWorld />
      <YoutubeEmbed embedId="z5qlCFkPpXo" />
      
      <CardGrid />
      <Footer />
    </div>
  );
}

export default App;
