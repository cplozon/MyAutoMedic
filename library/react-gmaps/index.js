import React from "react";
import ReactDOM from "react-dom";
import Map from "./components/map";

ReactDOM.render(
    <Map initialPosition={{lat:35.900151, lng: -79.012806}} />,
    document.getElementById("root")
);