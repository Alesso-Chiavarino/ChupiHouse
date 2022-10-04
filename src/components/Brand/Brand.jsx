import './Brand.css'
// alt={title + ' icon'}
const Brand = ( {img, title} ) => {
    return (
        <div className='contIcono'>
            <img className='icono' src={img}  /><h3 className='brand'> {title} </h3>
        </div>
    );
};

export default Brand;