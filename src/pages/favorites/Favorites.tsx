import { useAppSelector } from "../../app/hooks"
import CardItem from "../card-item/CardItem";

const Favorites = () => {
    const cards=useAppSelector((state)=>state.cards.cards);
    const favoriteCards=cards.filter((a)=>a.isfavorite);
    return (
        <div className="container" style={{backgroundColor:""}}>
                  <h1>Favorite:</h1>

    <div className="d-flex text-center flex-wrap justify-content-around margin-bottom">
        {
        favoriteCards.map((a)=>(
          <CardItem key={a.id}{...a}/>
       ))
       }
      </div>
      </div>
  )
}

export default Favorites;


