import React from 'react';
import MapSwitcher from "./comps/MapSwitcher";
import MapContent from "./comps/MapContent";

const App = () => {
    return (
        <div className="wrapper">
            <MapSwitcher/>
            <MapContent/>
        </div>
    );
};

export default App;