import { useState } from "react"
 
import { getTicket, sum } from "./helper";
import Button from "./Button";
import Ticket from "../Ticket";


export default function Lottery({n=3, winCondition }) {
    let [ticket,setTicket] = useState(getTicket(n));
    let isWinning = winCondition(ticket);

    let buyTicket = ()=> {
        setTicket(getTicket(n))
    }

    return ( 
        <div>
            <h1>Lottery game</h1>
            <Ticket ticket={ticket}/>   
            <Button action ={buyTicket}/>
            <h3>{isWinning && "Congratulations, you won!"}</h3>
        </div>
    )
}