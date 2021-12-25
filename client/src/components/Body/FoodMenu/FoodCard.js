const FoodCard = (props) => {

    return (
        <div className="card-wrapper">
            <img src={props.image} alt={props.alt} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default FoodCard
