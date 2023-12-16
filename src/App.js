import {ReviewProvider} from "./context/reviewContext";
import React from "react";
import {Reviews} from "./containers/Reviews/Reviews";
import {Filter} from "./containers/Filter/Filter";

const App = () => (
<ReviewProvider>
    <Filter/>
    <Reviews/>
</ReviewProvider>
);

export default App;
