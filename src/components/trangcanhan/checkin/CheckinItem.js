import Popup from "reactjs-popup";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const CheckinItem = () => {
    return(
        <div className="checkin">
            <img src='https://www.vietnambooking.com/wp-content/uploads/2017/06/hoang-hon-sunset-sanato-1.jpg' alt='' />
            <h3 className="checkinh3">
                Thành phố Hồ Chí Minh
            </h3>
            <Popup
        modal
        trigger={<div className="bacham"><MoreHorizIcon /></div>}
        // position="center center"
      >
        {
            <div className="thechung">
                <span>Xem trên Map</span>
            </div>
        }
      </Popup>
        </div>
    )
}

export default CheckinItem