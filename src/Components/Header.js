import React from "react";
import CurrentDate  from "./CurDate"

function Header(){
    return(
        <header className="navbar">
        <h1>NBA Stats Tonight</h1>
        <h6>{CurrentDate} </h6> {/*Current Date JS component*/}
        </header>
        
    )
}

export default Header
 