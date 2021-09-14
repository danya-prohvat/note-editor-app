import React from 'react';
import './App.scss';
import LeftSection from "./components/LeftSection/LeftSection";
import RightSection from "./components/RightSection/RightSection";

const App: React.FC = () => {
    return (
        <div className="App">
            <LeftSection/>
            <RightSection/>

        </div>
    );
}

export default App;
