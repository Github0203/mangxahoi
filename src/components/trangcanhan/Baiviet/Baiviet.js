import boloc from '../../../img/boloc.png';
import './Baiviet.css';
import { FaEllipsisV } from 'react-icons/fa';
import Comment from '../Taofeed/comment/Comment';
// FaHandHoldingHeart, FaHandHoldingMedical, FaHandHoldingUsd, FaHandHoldingWater, FaHandLizard, FaHandMiddleFinger, FaHandPaper, FaHandPeace, FaHandPointDown, FaHandPointLeft, FaHandPointRight, FaHandPointUp, FaHandPointer, FaHandRock, FaHandScissors, FaHandSparkles, FaHandSpock, FaHands, FaHandsHelping, FaHandsWash, FaHandshake, FaHandshakeAltSlash, FaHandshakeSlash, 
const Baiviet = () => {
    return(
        <div className="baiviet">
            <div className="boloc khungtaofeed  ">
                <p>Bộ lọc</p>
                <img src={boloc} />
            </div>
            <div className='cont_baiviet'>
            <div className="post-bar khungtaofeed">
<div className="post_topbar">
<div className="usy-dt">
<img src="https://gambolthemes.net/workwise-new/images/resources/us-pic.png" alt="" />
<div className="usy-name">
<h3>John Doe</h3>
<span><img src="images/clock.png" alt="" />3 min ago</span>
</div>
</div>
<div className="ed-opts">
<a href="#" title="" className="ed-opts-open"><FaEllipsisV /></a>
</div>
</div>
<div className="job_descp">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet... <a href="#" title="">Xem thêm</a></p>

</div>
<div className="job-status-bar">
<ul className="like-com">
<li>
<a href="#"><i className="fas fa-heart"></i> Like</a>
<img src="https://gambolthemes.net/workwise-new/images/liked-img.png" alt="" />
<span>25</span>
</li>
<li><a href="#" className="com"><i className="fas fa-comment-alt"></i> Bình luận 15</a></li>
<li><a href="#" className="com"><i className="fas fa-eye"></i> Xem 50</a></li>
<li><a href="#" className="com"><i className="fas fa-eye"></i> Chia sẽ</a></li>
</ul>



</div>
<div className='noicmt'>
 <Comment />
</div>
</div>
            </div>
        </div>
    )
}

export default Baiviet