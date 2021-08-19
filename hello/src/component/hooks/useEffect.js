import React from 'react'
//import "./style.css";

const UseEffect = () => {
    //const initialData = 0;
    const [myNum, setMyNum] = React.useState(0);


    React.useEffect(() => {
       // console.log("Hii")
        document.title = `Chat(${myNum})`;
    })
    return (
        <>
            <div className="">
                <p>{myNum}</p>
                <div class="button2" onClick={() => setMyNum(myNum + 1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                
                <div class="button2" onClick={() => (myNum >0 ? setMyNum(myNum - 1) : setMyNum(0))} >
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>

            </div>
        </>
    )
}

export default UseEffect
