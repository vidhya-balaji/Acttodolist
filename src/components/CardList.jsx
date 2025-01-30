function CardList(props) {
    return (
            <div style={{backgroundColor:props.color}} className='border rounded-md p-5 flex-grow'>
                <p className="text-3xl text-black font-bold">{props.firstT}</p>
                <p>{props.subT}</p>
            </div>

    )
}
export default CardList;