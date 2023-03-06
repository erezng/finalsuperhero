import {useState} from 'react';
import Modal from "react-modal";
import Swal from 'sweetalert2';
import { v4 } from "uuid";
import { addCard } from '../../features/superhero/superheroSlice';
import { useAppDispatch } from '../../app/hooks';
import { Card } from '../../features/superhero/superheroSlice';
import css from "./AddCard.module.scss"

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // background-color: '#800D0D',

  },
};
const AddCard = () => {
  const [superhero,setSuperhero]=useState("");
  const[publisher,setPublisher]=useState("");
  const[alter_ego,setAlter_ego]=useState("");
  const[first_appearance,setFirst_appearance]=useState("");
  const[characters,setCharacters]=useState("");
  const[img,setImg]=useState("");
  const dispatch=useAppDispatch();
  const [isOpen,setOpen]=useState(false);
  Modal.setAppElement('#root');
  const closeModal=()=>{
    setOpen(false);
  };
  const openModal=()=>{
    setOpen(true);
  };

  return (
  <>
  <div className={css.modal}>
    <button onClick={openModal} className={css.btn}>
      Add Hero
    </button>
    <Modal onRequestClose={closeModal} isOpen={isOpen} style={customStyles}>

      <form className={css.modal}>
      <div className="form-group">
      <label>Name:</label> 
      <input className="form-control" placeholder="Enter name" value={superhero} id="name" onChange={(e)=>setSuperhero(e.currentTarget.value)}/>
      Publisher:
      <input className="form-control" placeholder="Enter publisher" value={publisher} onChange={(e)=>setPublisher(e.currentTarget.value)}  />      
      Alter_ego:
      <input className="form-control" placeholder="Enter Alter_ego" value={alter_ego} onChange={(e)=>setAlter_ego(e.currentTarget.value)}  />
      First_appearance:
      <input className="form-control" placeholder="Enter First_appearance" value={first_appearance} onChange={(e)=>setFirst_appearance(e.currentTarget.value)}/>      
      Characters:
      <input className="form-control" placeholder="Enter Characters" value={characters} onChange={(e)=>setCharacters(e.currentTarget.value)}  />
      Image-link:
      <input className="form-control" placeholder="Enter image" value={img} onChange={(e)=>setImg(e.currentTarget.value)}  />
    
    <button className='btn btn-success' onClick={()=>{
      const card: Card={
        id:v4(),
        superhero:superhero,
        publisher:publisher,
        alter_ego:alter_ego,
        first_appearance:first_appearance,
        characters:characters,
        img:img,      
        isfavorite:false

      }
      if(superhero){
      dispatch(addCard(card));
      console.log(card);
      Swal.fire("Add successfully","Add successfully")
      closeModal();
      Swal.fire("please enter name","please enter name")
      
    }}
   } >
      Save
    </button>
        <button onClick={closeModal} className="btn btn-danger">
      Close
      </button>
  </div>
    
 </form>

</Modal>
  </div> 
  </>
  )
}

export default AddCard
