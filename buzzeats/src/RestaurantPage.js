import './RestaurantPage.css';
import Stars from './Stars';


function RestaurantPage(props) {
    const {data, hideCover} = props;

    
    return (
        <div className='cover' onClick={(event) => {if(event.target === event.currentTarget) {hideCover()}}}>
            <div className="restaurantPage">
                <h1 className="title">{data.name}</h1>
                <button className='closeButton' onClick={() => hideCover()}>X</button>
                <Stars className="stars" rating={data.rating}></Stars>
                <img src={data.link} alt={data.name} className="image"></img>
                <p>{data.location}</p>` `
                <img src={data.hours} alt="hours"></img>
                <button onClick={() => window.location.href = data.menu}>Menu</button>
                <p>Phone: {data.contact.phone}</p>
                <p>Email: {data.contact.email}</p>
                <p>{data.descr}</p>
            </div>
        </div>
        
    )
}

export default RestaurantPage;