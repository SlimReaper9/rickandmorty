import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { deleteCharacterDetail, getSingleCharacterDetail } from '../../redux/CharacterSlice'
import s from './CharacterPage.module.scss'
const CharacterPage = () => {
 const {id} = useParams()
  const dispatch = useDispatch();
  const characterDetail = useSelector(state => state.allCharacters.characterDetail) 
  useEffect(() => {
    dispatch(getSingleCharacterDetail(id))
  
    return () => {
      dispatch(deleteCharacterDetail())
    }
  }, [])
  
    return (
    <div className={s.container}>
        {Object.keys(characterDetail).length === 0 ? <div>Loading....</div> : <><div><img src={characterDetail.image}></img></div>
        <div className={s.name}>{characterDetail.name}</div>
        <div className={s.status}  style={characterDetail.status == 'Alive' ? {backgroundColor:'#0E8D1F'} : characterDetail.status == "Dead" ? {backgroundColor:'#BD2811'} : {backgroundColor:'#A5A5A4'}}>{characterDetail.status}</div>
        <div><span>Location :</span>{characterDetail.location.name}</div>
        <div><span>Gender :</span>{characterDetail.gender}</div>
        <div><span>Species :</span>{characterDetail.species}</div>
        <div><span>Origin :</span>{characterDetail.origin.name}</div></>}
    </div>
  )
}

export default CharacterPage