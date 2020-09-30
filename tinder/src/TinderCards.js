import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import './TinderCards.css';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url:"https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
        }, {
            name: "Maharsh Hetal Gheewala",
            url:"https://i1.rgstatic.net/ii/profile.image/610169692123136-1522487199639_Q512/Maharsh_Gheewala.jpg"
        }
    ]);

    const swiped = (nameToDelete) => {
        console.log("Removing" + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + "Left the screen!");
    }

    return (
        <div className="TinderCards">
            <div className="tinderCars_cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen ={() => outOfFrame(person.name)}
                    >
                        <div className="card" style={{ backgroundImage: `url(${person.url})`}}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
