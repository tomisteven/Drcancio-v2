import React from 'react';
import './Card.scss'
import user from '../../../assets/icons/user.svg'
import bed from '../../../assets/icons/bed.svg'
import bath from '../../../assets/icons/bathroom.svg'
import area from '../../../assets/icons/area.svg'


const Card = ({pic, data, link, desc}) => {
    return (
        <div className="card">
            <div className="blue-shadow"></div>
            <img className="card-image" src={pic} alt="Bath"/>
            <div className="card-body">
                <div className="card-content">
                    <a href="!#">
                        <img src={user} alt="user"/>
                        <span>Dr Jorge Cancio</span>
                    </a>
                    <h4><a className="card-title" href="!#">{data}</a></h4>
                    <p>{desc}</p>

            </div>
            <a href={link}>Ver</a>
            </div>
        </div>
     );
}

export default Card;