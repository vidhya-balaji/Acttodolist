function ActivityList(props) {

    var arraylen=props.addactiv.length;
    const imagesource=process.env.PUBLIC_URL + './src/assets/bin.png';
    console.log("imagesrc :"+imagesource);
    

    function removelist(id) {
        
        var temp = props.addactiv.filter((item) => {
            if (item.id === id) {
                return false;
            }
            else {
                return true;
            }
        })
        props.setaddactiv(temp);

    }

    return (
        <div className="p-5 bg-[#aa9df6] rounded-md flex-grow">
            <h1 className="text-2xl font-bold py-5">Today's Activity</h1>
            {(arraylen===0?<p className="text-red-600">You haven't added anything</p>:"")}

            <div>
                {
                    props.addactiv.map(function (temp) {
                        return (
                            <div className="flex justify-between">
                                <p>{temp.id}. {temp.item}</p>
                                <button onClick={() => removelist(temp.id)} className="bg-red-400 text-black p-2 m-1 border-none">Delete</button>

                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
export default ActivityList