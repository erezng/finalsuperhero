import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { IconContext } from "react-icons";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { toggleFavorite } from '../../features/superhero/superheroSlice';
import css from "./CardDetails.module.scss"
const CardDetails = () => {
  const {id}=useParams();
  const navigate=useNavigate();
  // const card=useAppSelector((state)=>state.cards.cards.find((a)=>a.id===id));
  const cards=useAppSelector((state)=>state.cards.cards);
  const dispatch=useAppDispatch();
  const card=cards.find((c)=>c.id===id);

  if(!card)
  {
    return <Navigate to="/"/>;
  }
  const {superhero, publisher,alter_ego,first_appearance,characters,
  img,isfavorite}=card;

  <IconContext.Provider value={{color:'red', size: '100px'}}>
       <button>{isfavorite&& <FaHeart/>}</button>
       <FaRegHeart/>
  </IconContext.Provider>


return (
    <div className="d-flex text-center justify-content-around ">
      <div className='card shadow p-3 mb-5 bg-white'>
      <h1 className={css.title}> {superhero}</h1>
      <button className={css.btn} onClick={()=>dispatch(toggleFavorite(card.id))}>
           {isfavorite&&<FaHeart/>}
           {!isfavorite&&<FaRegHeart/>}
      </button>
    <div className="row">
    <div className="col-sm">
        Publisher:  {publisher}
    </div>
    <div className="col-sm">
         Alter_ego: {alter_ego}
    </div>
    
    <div className="col-sm">
        First_appearance:  {first_appearance}
              </div>

    <div className="col-sm">
       Characters:   {characters}
      </div>

  </div>
        <img src={img} alt="" />

         <button className="btn btn-primary shadow p-3  rounded" 
        onClick={() => {navigate(-1);
        }}>
        <h3>back</h3>
        </button>
      </div>
    </div>





  )
}

export default CardDetails