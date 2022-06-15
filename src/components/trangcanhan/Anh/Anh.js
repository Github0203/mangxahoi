import './Anh.css'


const images = [
    {
        src:
            'https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 1500,
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 666,
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1491146179969-d674118945ff?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 1500,
        height: 844,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 1500,
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 666,
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 666,
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 666,
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 666,
        height: 1000,
    },
    {
        src:
            'https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D',
        width: 666,
        height: 1000,
    },
]
const Anh = () => {
   
    return (
        <div className='anhwl'>
           <p>Ảnh</p> <span>Xem tất cả</span>
        <div id="img-wrapper">
            {
                images.map((img) => {
                    return(
                    <div><img src={img.src} alt=''/></div>
                    )
                })
            }
        </div>
        </div>
    )
}
export default Anh