import './Banbe.css'


const images = [
    {
        src:
            'https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        name: 'N.0.A',
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            name: 'N.0.A',
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1491146179969-d674118945ff?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            name: 'N.0.A',
        height: 844,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            name: 'N.0.A',
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            name: 'N.0.A',
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            name: 'N.0.A',
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            name: 'N.0.A',
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            name: 'N.0.A',
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
            name: 'N.0.A',
        height: 1000,
    },
]
const Banbe = () => {
   
    return (
        <div className='anhwl'>
           <p>Bạn bè</p> <span>Xem tất cả</span>
        <div id="img-wrapper">
            {
                images.map((img) => {
                    return(
                    <div className='cont_img'>
                    <div className='img'><img src={img.src} /></div>
                    <span>{img.name}</span>
                    </div>
                    
                    )
                })
            }
        </div>
        </div>
    )
}
export default Banbe