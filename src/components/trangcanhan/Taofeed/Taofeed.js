
import iconhinhtaofeed1 from './img/iconhinhtaofeed1.png';
import iconhinhtaofeed2 from './img/iconhinhtaofeed2.png';
import iconhinhtaofeed3 from './img/iconhinhtaofeed3.png';
import anhdaidientaofeed from './img/anhdaidientaofeed.png';
import './Taofeed.css';

const Taofeed = () => {
    return (
        <div className='khungtaofeed'>
            <div className='khungtaofeedtop'>
                <div className='avarta_khung'>
                    <img src={anhdaidientaofeed} alt='' />
                </div>
                <div className='bandangnghigi'>
                    <input type='text' placeholder='Bạn đang nghĩ gì?' />
                </div>
            </div>
            <hr />
            <div className='khungtaofeedbottom'>
            <div className='relativediv'>
            <div className='khungtaofeedbottom1'>
                    <div className='avarta_khung'>
                        <img src={iconhinhtaofeed1} alt='' />
                    </div>
                    <div className='title_khung'>
                        <span>Ảnh/Video</span>
                    </div>
                </div>
            </div>
               
            <div className='relativediv'>
                <div className='khungtaofeedbottom1'>
                    <div className='avarta_khung'>
                    <img src={iconhinhtaofeed2} alt='' />
                    </div>
                    <div className='title_khung'>
                        <span>Cảm xúc/Hoạt động</span>
                    </div>
                </div>
                </div>
                <div className='relativediv'>
                <div className='khungtaofeedbottom1'>
                    <div className='avarta_khung'>
                    <img src={iconhinhtaofeed3} alt='' />
                    </div>
                    <div className='title_khung'>
                        <span>Check in</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Taofeed