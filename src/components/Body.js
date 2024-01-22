import ResturantCard from "./ResturantCard"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

const Body = () =>{

    const [listOfRestuarants,setListOfRestuarants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredList, setFilteredList] = useState([])

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async() =>{
        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D17.4520253%26lng%3D78.3742678%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        const json = await data.json();

        setListOfRestuarants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }


    return listOfRestuarants.length === 0 ?
    (<Shimmer/>) : (
      <div className="body">
        <div className="filter-container">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)}
                    }/>
                <button className="search-btn" onClick={()=>{
                    let afterFilter = listOfRestuarants.filter((res)=>{
                       return res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
                    })
                    setFilteredList(afterFilter);
                }}>Search</button>
            </div>
            <button
                className="filter-btn"
                onClick={() => {
                   let filteredList = listOfRestuarants.filter((res) => {
                    return res.info.avgRating > 4.2
                   })
                   setFilteredList(filteredList);
                }}
            >
                Top Rated Restaurant
            </button>
        </div>
        <div className="res-container">
         {
            filteredList.map((resdata) => {
              return <ResturantCard key={resdata.info.id} resdata={resdata}/>
            })
         }
        </div>
      </div>
    )
  }

  export default Body