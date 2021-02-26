import React from 'react';
import MapSwitcher from "./comps/MapSwitcher";
import MapContent from "./comps/MapContent";

const App = () => {
    const mapLevels = {
        mapLevelsNames: ['Схема товарищества', 'Оплата взносов', 'Участки на продажу', 'Подключение к ЛЭП',],
        mapLevelsSelect: 1,
    }
    return (
        <div className="wrapper">
            <MapSwitcher mapLevels={mapLevels}/>
            <MapContent mapLevelsSelect={mapLevels.mapLevelsSelect}/>
        </div>
    );
};

export default App;