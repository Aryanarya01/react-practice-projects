function handleClick() {
    console.log("Hello!");
}

function handleMouseOver() {
    console.log("Bye!");
} 

function handleDblClick(){
       console.log("You Doubled Clicked Me!");
}

export default function Button(){
    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
            <p onMouseOver={handleMouseOver}>Lorem ipsum dolor sit amet consectetur adipisicing elit. In cumque accusantium corrupti, est corporis voluptatum voluptas rem voluptatem exercitationem sint dolorem quis inventore laborum vero quo molestias minima neque sunt.</p>
            <button onDoubleClick={handleDblClick}>Double Click</button>
        </div>
    )
}