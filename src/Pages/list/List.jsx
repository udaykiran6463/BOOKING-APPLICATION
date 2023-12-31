import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import format from "date-fns/format"
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem";


const List = () => {
  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false);
  const [options,setOptions] = useState(location.state.options)

 
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input type="text"/>
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate &&( 
              <DateRange
              onChange={item=>setDate([item.selection])}
              minDate={new date()}
              ranges={date}
              />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionsItem">
                <span className="lsOptionsText">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput"></input>  
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionsText">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput"></input>  
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionsText">
                  Adult
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.adult}></input>  
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionsText">
                 Children 
                </span>
                <input type="number" min={0} className="lsOptionInput" placeholder={options.children}></input>  
              </div>
              <div className="lsOptionsItem">
                <span className="lsOptionsText">
                  Room 
                </span>
                <input type="number" min={1} className="lsOptionInput" placeholder={options.room}></input>  
              </div>
            </div>
            </div>
            <button>Search</button>
          </div>
          <div className="listResult">
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;