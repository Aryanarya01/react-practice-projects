import { useState } from "react"
import {addTicket, sum} from "./helper"
import Ticket from "./Tickets";
import Button from "../../react-states-class2/src/Button";

export default function Lottery2({n=4, winCond}){

    let [tickets, setTickets] = useState(addTicket(n));
    let isWinning = winCond(tickets)

    let buyTick = ()=>{
        setTickets(addTicket(n))
    }

return(
    <div>
        <h1>Lottery game</h1>
         <Ticket tickets={tickets} />
            <div>
                <h2>{isWinning && "Congratulations You won!"}</h2>
                 <Button  action={buyTick}  />
            </div>
    </div>
)

}