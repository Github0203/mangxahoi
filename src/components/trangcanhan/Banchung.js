import anhdaidien from '../../img/anhdaidien.png';

const Banchung = () =>{
    return (
        <div className="tieudebanchung">
            <h3>N.0.A</h3>
            <span>29 bạn chung</span>
            <div className="listbanchunghinh">
                <img src={anhdaidien} alt="" />
                <img src={anhdaidien} alt="" />
                <img src={anhdaidien} alt="" />
            </div>
        </div>
    )
}

export default Banchung