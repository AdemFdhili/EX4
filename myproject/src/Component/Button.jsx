import './Button.css'

function Buttons({value,bgcolor,txtcolor,bgborder}){
return (
<button style={{background:bgcolor,color:txtcolor,border:bgborder}}>{value}</button>
)};



export default Buttons;