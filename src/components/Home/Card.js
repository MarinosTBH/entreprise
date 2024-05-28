import React from 'react';
import { Link } from 'react-router-dom';
import { FcServices, FcConferenceCall, FcReading, FcStatistics, FcCalendar, FcPodiumWithSpeaker } from "react-icons/fc";


const course = [
    {
        title: 'Administrateur',
        icon: <FcServices />,
        link: '/Administrateur'
    },
    {
        title: 'RH-Event',
        icon: <FcConferenceCall />,
        link: '/RH'
    },
    {
        title: 'E-learning',
        icon: <FcReading />,
        link: '/E-learning'
    },
    {
        title: 'Gestion projet',
        icon: <FcStatistics />,
        link: '/Projet'
    },
    {
        title: 'Calendrier événement',
        icon: <FcCalendar />,
        link: '/Evenment'
    },
    {
        title: 'Réservation salle',
        icon: <FcPodiumWithSpeaker />,
        link: '/Reservation-salle'
    },
];


function Card() {
    return (
        <div>
            <div className="card--container">
                {course.map((item, index) => (
                    <Link key={index} to={item.link}>
                        <div className='card'>
                            <div className="card--cover">{item.icon}</div>
                            <div className='card--title'>
                                <h2 className="card--title-text">{item.title}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Card;
