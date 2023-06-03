import React from 'react'
import s from './SingleCharBlock.module.scss'
const SingleCharBlock = (props) => {
    return (
    <div className={s.box}>
        <div className={s.imageBox}>
            <img src={props.image}></img>
            <div className={s.status} style={props.status == 'Alive' ? {backgroundColor:'#0E8D1F'} : props.status == "Dead" ? {backgroundColor:'#BD2811'} : {backgroundColor:'#A5A5A4'}}>{props.status}</div>
        </div>
        <div className={s.name}>{props.name}</div>
        <div className={s.location}>{props.location.name}</div>
    </div>
  )
}

export default SingleCharBlock