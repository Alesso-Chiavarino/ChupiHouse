import Item from '../Item/Item'

const ListItem = ({nombre, img}) => {
    return(
        <li style={{listStyle: "none", margin:"20px"}} >
            <Item nombre = {nombre} img = {img} />
        </li>
    )
} 
export default ListItem;

// rafc