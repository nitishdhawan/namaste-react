import { CDN_URL } from "../utils/constants"

const ResturantCard = (props) =>{
    const {name, cuisines, avgRating, sla, cloudinaryImageId} = props?.resdata?.info
    return(
      <div className="res-card">
        <div className="res-logo-container">
          <img className="res-logo" src={CDN_URL+cloudinaryImageId}/>
        </div>
        <h3 className="res-name">{name}</h3>
        <h3 className="cusine">{cuisines.join(", ")}</h3>
        <h3 className="rating">{avgRating} stars</h3>
        <h3 className="delivery-time">{sla?.deliveryTime} mins</h3>
      </div>
    )
  }

  export default ResturantCard