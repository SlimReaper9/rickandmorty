import React, { useEffect, useState,useRef } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { allCharactersApiThunk, setCurrentPage,setName } from '../../redux/CharacterSlice'
import s from './Home.module.scss'
import SingleCharBlock from '../../components/SingleCharBlock/SingleCharBlock'
import ReactPaginate from 'react-paginate'
import { Link } from 'react-router-dom'

const Home = () => {
 const dispatch = useDispatch();
 const allCharacters = useSelector(state => state.allCharacters.allChars)
 const pageCount = useSelector(state=> state.allCharacters.info.pages)
 const name = useSelector(state => state.allCharacters.name)
 const [search,setSearch] = useState(name)
 const currentPage = useSelector(state =>state.allCharacters.currentPage)
    useEffect(() => {
    const data = {
        currentPage,
        name 
    }
        dispatch(allCharactersApiThunk(data))
  }, [currentPage,name])
  const handlePageClick = (data) => {
    dispatch(setCurrentPage(data.selected + 1))
  }
    return (<>
    {Object.keys(allCharacters).length === 0 ? <div>Loading...</div> : <div className={s.container}>
    <div className={s.title} onClick={() => {dispatch(setName(''));dispatch(setCurrentPage(1));setSearch('')}}>Characters</div>
    <div className={s.searchBox}><input value={search} placeholder='Search...' onChange={(e)=> setSearch(e.target.value)}></input>
    <button onClick={() => {dispatch(setName(search));dispatch(setCurrentPage(1))}}>Search</button>
    </div>   
    <div className={s.box}>
        {allCharacters.map((elem,key) => {
            return <Link to={'/character/'+ elem.id} id={key}><SingleCharBlock {...elem}></SingleCharBlock></Link>
        })}
    </div>
 <div className={s.pagination}>
       <ReactPaginate previousLabel={'<<'}
        nextLabel={'>>'}
        breakLabel={'..'}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        marginPagesDisplayed={1}
       
        activeClassName={s.active}
       forcePage={currentPage-1}
        className={s.paginate}>
        </ReactPaginate>   
    </div>
    
  </div>}
    </>)
    
  
}

export default Home