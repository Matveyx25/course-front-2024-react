import React from 'react';
import s from './Card.module.scss'

export const Card = ({data}) => {
    return(
        <div className={s.wrapper}>
            <div className={s.imgWrap}>
                <img src={'./img/avatar.png'} alt="" />
            </div>
            <div className={s.content}>
                <span>
                    <h1 className={s.name}>{data.name + data.id}</h1>
                    <p className={s.status}>
                        <span>{data.status}</span>
                    </p>
                </span>
                <p className={s.location}>
                    <span>Last known location:</span>
                    <p>{data.location.name}</p>
                </p>
                <p className={s.episode}>
                    <span>Fist seen in:</span>
                    <p>{data.episode[0].split('/').pop()}</p>
                </p>
            </div>
        </div>
    )
}