import { useDispatch, useSelector } from "react-redux";

 function Home(){

    const counterVal =useSelector((state)=>state.counter);
    const dispatch = useDispatch();

    const add =()=>{
        dispatch({
            type:"add"
        })
    };

    const sub=()  =>{
        dispatch({
            type:"sub"
        })
    };
    return(
        <div>
            <h1>This is home component{counterVal}</h1>
            <input type="button" value="Add" onClick={add}/>
            <input type="button" value="Sub" onClick={sub}/>
        </div>
        
    );
}
export default Home;