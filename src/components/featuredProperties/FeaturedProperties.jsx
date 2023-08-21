import "./featuredProperties.css"

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" 
            alt="" className="fpImg" />
            <span className="fpName">Aparthotel Store Miasto</span>
            <span className="fpCity">Hyderabad</span>
            <span className="fpPrice">Starting from 4000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" 
            alt="" className="fpImg" />
            <span className="fpName">Comfort Suites Airport</span>
            <span className="fpCity">Bangalore</span>
            <span className="fpPrice">Starting from 6000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" 
            alt="" className="fpImg" />
            <span className="fpName">Four Seasons Hotel</span>
            <span className="fpCity">Mumbai</span>
            <span className="fpPrice">Starting from 5000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
        <div className="fpItem">
            <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" 
            alt="" className="fpImg" />
            <span className="fpName">Hilton Garden Inn</span>
            <span className="fpCity">Delhi</span>
            <span className="fpPrice">Starting from 3000</span>
            <div className="fpRating">
                <button>8.9</button>
                <span>Excellent</span>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProperties