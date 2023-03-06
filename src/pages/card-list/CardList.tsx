import { useAppSelector } from "../../app/hooks"
import CardItem from "../card-item/CardItem"
import css from "./CardList.module.scss"
const CardList = () => {
  const cards= useAppSelector((s)=>s.cards.cards)
  return (
    <div className="container" style={{backgroundColor:""}}>
    <div className="d-flex text-center flex-wrap justify-content-around margin-bottom">
      {
        cards.map((card)=>(
            <CardItem {...card} key={card.id}/>
        ))
      }
      </div>
     </div>
  )
}

export default CardList;