import Star from './star.svg';

function Stars(props) {
    let stars = [];
    for (let i = 0; i < parseInt(props.rating); i++) {
        stars.push(<img src={Star} alt="Star" className="star" key={i}></img>);
    }
    stars.push(<b key={parseInt(props.rating)}>&nbsp;5.0</b>)

    return (<div style={{margin: "auto", display:"flex", alignItems:"center"}}>{stars}</div>)
}

export default Stars;