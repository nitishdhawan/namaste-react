import ResturantCard from "./ResturantCard"
import resObj from "../utils/mockData"

const Body = () =>{
    return(
      <div className="body">
        <div className="search"> Search</div>
        <div className="res-container">
         {
            resObj.map((resdata) => {
              return <ResturantCard key={resdata.info.id} resdata={resdata}/>
            })
         }


        </div>
      </div>
    )
  }

  export default Body