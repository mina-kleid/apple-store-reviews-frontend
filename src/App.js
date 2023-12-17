import {ReviewProvider} from "./context/reviewContext";
import React from "react";
import {Reviews} from "./containers/Reviews/Reviews";
import {Header} from "./containers/Header/Header";

const App = () => (
<ReviewProvider>
    <Header/>
    <Reviews/>
</ReviewProvider>
);

export default App;
