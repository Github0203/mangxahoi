import react, { useState } from 'react';

const Moiban = () => {
    const [themban, setThemban] = useState(false);
    return (
        <div className="moiban">
            <div className="moi">
                {
                    themban ?
                    <button onClick={() => setThemban(!themban)} className="btn btn-2 hover-slide-right huy">
                    <span>Hủy lời mời</span>
                </button>
                        :
                        <button onClick={() => setThemban(!themban)} className="btn btn-2 hover-slide-right">
                            <span>Thêm bạn</span>
                        </button>
                }
                <button className="btn btn-2 hover-slide-right">
                            <span>Tin nhắn</span>
                        </button>
                <button className="btn btn-2 hover-slide-right">
                            <span>Thêm vào tin</span>
                        </button>
                <button className="btn btn-2 hover-slide-right">
                            <span>Chỉnh sửa trang cá nhân</span>
                        </button>

            </div>
        </div>
    )
}
export default Moiban