import CardList from "./components/CardList"
import AddActivity from "./components/AddActivity";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";
function App() {

const data=useLocation();
const name=data.state.user

  return (
    <div className="bg-black p-10">
      <div className="bg-white p-5 rounded-md">
        <Header uname={name}>
        </Header>

        <div className="flex  justify-between gap-5 flex-wrap">
          <CardList color={"#8272da"} firstT={"23"} subT={"Chennai"} />
          <CardList color={"#fd6663"} firstT={"December"} subT={"14.03.34"} />
          <CardList color={"#fca201"} firstT={"Build Using"} subT={"React"} />

        </div>
        <AddActivity />
      </div>
    </div>);
}

export default App;
