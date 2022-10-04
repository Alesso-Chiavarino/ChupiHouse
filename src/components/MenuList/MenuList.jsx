import './MenuList.css'

const MenuList = ({categoria}) => {
    return(
        <li style={{listStyle: "none",color: "#fff"}}>
            <button className="hola" >{categoria}</button>
        </li>
    )
}
export default MenuList;