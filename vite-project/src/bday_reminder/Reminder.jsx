import React, { useState} from 'react';
import SingleBirthday from './SingleBirthday';
import { data } from './data';

const Reminder = () => {
    const [people, setPeople] = useState(data);
    const removeAll = () => {
        setPeople([]);
    };
    const restoreAll = () => {
        setPeople(data);
    };
    const removePerson = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setPeople(newPeople);
    };

    return (
        <>
            <div className="container col-lg-6 m-auto card p-2">
                <h1 className="display-4 text-center">
                    {people.length} Birthdays Today
                </h1>
                {people.map((birthdays) => {
                    return <SingleBirthday {...birthdays} rem = {removePerson} />;
                })}
                <div className="my-4 btn btn-dark" onClick={removeAll}>
                    Remove All
                </div>
                <div className="my-4 btn btn-success" onClick={restoreAll}>
                    Restore 
                </div>
            </div>
        </>
    );
};

export default Reminder;