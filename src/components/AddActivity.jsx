import { useState } from "react"
import ActivityList from "./ActivityList"

function AddActivity() {
    const [activity, setActivity] = useState("")
    const [addactiv, setaddactiv] = useState([
        { id: 1, item: "Go for a walk" },
        {
            id: 2,
            item: "Read books daily"
        }])

    function handleChange(evt) {
        setActivity(evt.target.value)
    }
    function addActivityItem() {
        setaddactiv(addactiv => [
            ...addactiv, { id: addactiv.length + 1, item: activity, },
        ]);
        console.log(addactiv);
        setActivity("");
    }
    return (
        <div className="flex gap-5 py-5">
            <div >
                <h1 className="text-2xl font-bold py-5">Manage Activities</h1>
                <input type='text' value={activity} onChange={handleChange} className="border-2 p-2 border-black"></input>
                <button onClick={addActivityItem} className="bg-black p-2 border-2 text-white">Add</button>
            </div>
            <ActivityList id={addactiv.id}activity={activity} setActivity={setActivity} addactiv={addactiv} setaddactiv={setaddactiv}/>
        </div>
    )

}
export default AddActivity