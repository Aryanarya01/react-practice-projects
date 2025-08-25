import "./product.css";
import Price from "./price";

function Product({ title, idx }) {
  let oldPrice =["12,400","21,000","32,000","12,000"];
  let newPrice = ["10,000","18,000","28,000","9,000"];
  let description = [["8,000 DPI","5 Programmable buttons"],["designed for iPad Pro","intutive surface"],["intutive surface","designed for iPad Pro"],["RGB lighting","designed for iPad Pro"]];
   return (
     <div className="Product">
      <h4>{title}</h4>
       <p>{description[idx][0]}</p>
       <p>{description[idx][1]}</p>
       <p><Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} /></p>
     </div>
   );
 }
 export default Product;