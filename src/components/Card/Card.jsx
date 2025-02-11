import React from 'react';
import s from './Card.module.scss'
import { NavLink } from 'react-router-dom';

export const Card = ({data}) => {
    return(
        <NavLink className={s.wrapper} to={'/character/' + data.id}>
            <div className={s.imgWrap}>
                <img src={data.image} alt="" />
            </div>
            <div className={s.content}>
                <span>
                    <h1 className={s.name}>{data.name}</h1>
                    <p className={s.status}>
                        <span>{data.status}</span>
                    </p>
                </span>
                <p className={s.location}>
                    <span>Last known location:</span>
                    <NavLink to={"/location/" + data.location.url.split('/').pop()}>{data.location.name}</NavLink>
                </p>
                <p className={s.episode}>
                    <span>Fist seen in:</span>
                    <p>{data.episode[0].split('/').pop()}</p>
                </p>
            </div>
        </NavLink>
    )
}