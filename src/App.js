import React from 'react';
import MapSwitcher from "./comps/MapSwitcher";
import MapContent from "./comps/MapContent";

const App = () => {
    const mapLevels = ['Схема товарищества', 'Оплата взносов', 'Участки на продажу', 'Подключение к ЛЭП',];
    return (
        <div className="wrapper">
            <MapSwitcher mapLevels={mapLevels}/>
            <MapContent mapLevels={mapLevels}/>
        </div>
    );
};

export default App;