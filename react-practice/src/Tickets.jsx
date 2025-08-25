import LotteryNum from "./LotteryNum";


export default function Ticket({tickets}){
    return (
        <div className="tick">
            <h4>Ticket</h4>
        { tickets.map((num,idx)=>
        (
            <LotteryNum num={num} key={idx} />
        )
        )}
        </div>
    )
}