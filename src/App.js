import React, {useState} from "react";
import './App.css';
import PlayerCard from "./components/PlayerCard";
import arsenal_logo from "./img/logo.png";

function App() {
    const [players, setPlayers] = useState([
        {name: 'Ray Parlour', born: '1973', position: 'Midfielder', caps: 339, seasons: '1992-2004', clubs:'Hull City\nWembley'},
        {name: 'Lee Dixon', born: '1964', position: 'Right-back', caps: 458, seasons: '1988-2002', clubs:'Stoke City\nChester City'},
        {name: 'Paul Merson', born: '1968', position: 'Attacking midfielder', caps: 200, seasons: '1985-1997', clubs:'Middlesborough\nPortsmouth\nHanworth Villa'},
        {name: 'Ian Wright', born: '1963', position: 'Forward', caps: 225, seasons: '1991-1998', clubs:'Crystal Palace\nBurnley\nNottingham Forest'},
        {name: 'Tony Adams', born: '1966', position: 'Center-back', caps: 504, seasons: '1983-2002', clubs:''},
        {name: 'Liam Brady', born: '1956', position: 'Attacking midfielder', caps: 235, seasons: '1973-1980', clubs:'Juventus\nAscoli\nInter\nWest Ham United'},
        {name: 'Nicolas Anelka', born: '1979', position: 'Forward', caps: 65, seasons: '1997-1999', clubs:'PSG\nReal Madrid\nLiverpool\nFenerbahce\nChelsea\nShangai Shenhua\nMumbai city'}
    ]);
    const [formData, setFormData] = useState({name: "", position: "", caps: "", seasons: "", clubs: ""});

    const handleChange = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const addPlayer = () => {
        if (!formData.name || !formData.position || !formData.caps || !formData.seasons || !formData.born) return;
        setPlayers([...players, formData]);
        setFormData({name: "", position: "", caps: "", seasons: "", born: "", clubs : ""});
    };

    const updatePlayer = (index, updatedPlayer) => {
        const updatedPlayers = [...players];
        updatedPlayers[index] = updatedPlayer;
        setPlayers(updatedPlayers);
    };

    const deletePlayer = (index) => {
        setPlayers(players.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <img src={arsenal_logo} alt="logo van Arsenal" height={"283px"} width={"412px"} />
            <h1 className='scale'>The Gunners</h1>
            <h2>Legends</h2>
            <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                name="born"
                value={formData.born}
                onChange={handleChange}
                placeholder="Year of birth"
            />
            <input
                name="position"
                value={formData.position}
                onChange={handleChange}
                placeholder="Position"
            />
            <input
                name="caps"
                value={formData.caps}
                onChange={handleChange}
                placeholder="Caps"
                type="number"
            />
            <input
                name="seasons"
                value={formData.seasons}
                onChange={handleChange}
                placeholder="Seasons from to"
            />
            <textarea
                name="clubs"
                value={formData.clubs}
                onChange={handleChange}
                placeholder="Clubs"
                rows="5"
                cols="40"
            />

            <button className="add" onClick={addPlayer}>Add Player</button>

            <div className="player-grid">
                {players.map((player, index) => (
                    <PlayerCard
                        key={index}
                        player={player}
                        onUpdate={(updatedPlayer) => updatePlayer(index, updatedPlayer)}
                        onDelete={() => deletePlayer(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
