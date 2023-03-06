import {useState} from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {Card, editCard } from '../../features/superhero/superheroSlice';

const EditCard = () => {
  const {id}= useParams();
  const nav=useNavigate();
  const cards=useAppSelector((state)=>state.cards.cards);
  const dispatch=useAppDispatch();
  const cardToEdit=cards.find((c)=>c.id===id);
  const [superhero,setSuperhero]=useState(cardToEdit?.superhero??"");
  const[publisher,setPublisher]=useState(cardToEdit?.publisher??"");
  const[alter_ego,setAlter_ego]=useState(cardToEdit?.alter_ego??"");
  const[first_appearance,setFirst_appearance]=useState(cardToEdit?.first_appearance??"");
  const[characters,setCharacters]=useState(cardToEdit?.characters??"");
  const[img,setImg]=useState(cardToEdit?.img??"");

  if(cardToEdit===undefined){
  return <Navigate to="/" />;
  }

  return (
    <>
    <div dir='rtl' className='d-flex card p-3 m-2'>
    <h3>Edit</h3>
    <div className='label-input d-flex flex-column'>
      <label htmlFor="name">Name</label>
      <input id="name"
      value={superhero}
      onChange={(e)=>{setSuperhero(e.currentTarget.value)}}
      placeholder="name"
      />
    </div>

      <div className='label-input d-flex flex-column'>
      <label htmlFor="publisher">Publisher</label>
      <input id="publisher"
      value={publisher}
      onChange={(e)=>{setPublisher(e.currentTarget.value)}}
      placeholder="publisher"
      />
    </div>

      <div className='label-input d-flex flex-column'>
      <label htmlFor="alter_ego">Alter_ego</label>
      <input id="alter_ego"
      value={alter_ego}
      onChange={(e)=>{setAlter_ego(e.currentTarget.value)}}
      placeholder="alter_ego"
      />
    </div>

      <div className='label-input d-flex flex-column'>
      <label htmlFor="first_appearance">First_appearance</label>
      <input id="first_appearance"
      value={first_appearance}
      onChange={(e)=>{setFirst_appearance(e.currentTarget.value)}}
      placeholder="first_appearance"
      />

    </div>
      <div className='label-input d-flex flex-column'>
      <label htmlFor="characters">characters</label>
      <input id="characters"
      value={characters}
      onChange={(e)=>{setCharacters(e.currentTarget.value)}}
      placeholder="characters"
      />

    </div>
          <div className='label-input d-flex flex-column'>
      <label htmlFor="img">Img</label>
      <input id="img"
      value={img}
      onChange={(e)=>{setImg(e.currentTarget.value)}}
      placeholder="img"
      />
    </div>
 <button className='btn btn-success'
  onClick={()=>{
    const card:Card={
      id:cardToEdit.id,
      superhero:superhero,
      publisher:publisher,
      alter_ego:alter_ego,
      first_appearance:first_appearance,
      characters:characters,
      img:img,
      isfavorite:false
    };
    dispatch(editCard(card));
    nav(-1);
    }}
  >
  Save
  </button>
  </div>
  </>
  )
}

export default EditCard;