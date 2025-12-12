import React, { useState } from "react";

function PlayerCard({ player, onUpdate, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(player);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        onUpdate(formData);
        setIsEditing(false);
    };

    return (
        <div className="player-card">
            {isEditing ? (
                <div>
                    <input name="name" value={formData.name} onChange={handleChange} />
                    <input name="born" value={formData.born} onChange={handleChange} />
                    <input name="position" value={formData.position} onChange={handleChange} />
                    <input name="caps" value={formData.caps} onChange={handleChange} type="number" />
                    <input name="seasons" value={formData.seasons} onChange={handleChange}  />
                    <div>
                        <button className="save" onClick={handleSave}>Save</button>
                        <button className="cancel" onClick={() => setIsEditing(false)}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div>
                    <p><strong>Name:</strong> {player.name}</p>
                    <p><strong>Year of birth:</strong> {player.born}</p>
                    <p><strong>Position:</strong> {player.position}</p>
                    <p><strong>Caps:</strong> {player.caps}</p>
                    <p><strong>Seasons:</strong> {player.seasons}</p>
                    <div>
                        <button className="edit" onClick={() => setIsEditing(true)}>Edit</button>
                        <button className="delete" onClick={onDelete}>Delete</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PlayerCard;
