import ResturantCard from "./ResturantCard"
import resObj from "../utils/mockData"
import { useState } from "react"

const Body = () =>{

    let [listOfRestuarants,setListOfRestuarants] = useState(resObj);

    return(
      <div className="body">
        <div className="filter-container">
            <button
                className="filter-btn"
                onClick={() => {
                   let filteredList = listOfRestuarants.filter((res) => {
                    return res.info.avgRating > 4.2
                   })
                   setListOfRestuarants(filteredList);
                }}
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
         {
            listOfRestuarants.map((resdata) => {
              return <ResturantCard key={resdata.info.id} resdata={resdata}/>
            })
         }
        </div>
      </div>
    )
  }

  export default Body