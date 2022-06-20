// import * as React from "react";
// import { useState } from "react";
// const Test = () => {
//   const initial_data = [
//     {
//       id: 1,
//       name: "john",
//       gender: "m",
//       status: false
//     },
//     {
//       id: 2,
//       name: "mary",
//       gender: "f",
//       status: false
//     },
//   ];

//   const [datas, setDatas] = useState(initial_data);
//   console.log(datas);
//   return (
//     <div>
//       danh sach chua chon
//     {datas.map((data, index) => (
//       data.status === false ?
//       <li key={index}>
//         <input
//           type="text"
//           value={data.name}
//           onChange={(e) => {
//             data.status = true;
//             setDatas([...datas]);
//           }}
//         />
//       </li>
//       :
//      ""
//     ))}
//     <br />
//       danh sach đã chon
//     {datas.map((data, index) => (
//       data.status === true ?
//       <li key={index}>
//         {data.name}
//       </li>
//       :
//      ""
//     ))}
//   </div>
//   );
// };

// export default Test;


import "antd/dist/antd.css";
import { Select } from "antd";
import { useState } from "react";
import { CloseCircleTwoTone } from '@ant-design/icons';

const Test = () => {
    const { Option } = Select;
    const initial_data = [
        {
            id: 1,
            name: "john",
            gender: "m",
            status: false
        },
        {
            id: 2,
            name: "mary",
            gender: "f",
            status: false
        },
    ];

    const [datas, setDatas] = useState(initial_data);
    const handleClear = () => {
      setDatas([]);
      alert("huhu");
    };
    return (
        <div>
            <Select
                mode="multiple"
                placeholder="Tìm kiếm ai đó"
                // defaultValue={["a10", "c12"]}
                // onChange={handleChange}
                allowClear={{clearIcon:<CloseCircleTwoTone twoToneColor="#FFFFFF"/>}}
                className="slchan"
            >
                {datas.map((data, index) => (
                    data.status === false ?
                        <Option key={index}
                        >
                            <p className="trenhet"
                            onClick={(e) => {
                                data.status = true;
                                setDatas([...datas]);
                            }
                            }
                            >{data.name}</p>
                        </Option>
                        :
                        ""
                ))}
            </Select>
            <div className='luuthaydoi chan'>
                <span onClick={handleClear}>Lưu thay đổi</span>
            </div>
            <br />
            <p className='xmt'>Danh sách bị chặn</p>
            {datas.map((data, index) => (
                data.status === true ?
                    <li key={index}>
                        {data.name} <span
                        onClick={(e) => {
                          data.status = false;
                          setDatas([...datas]);
                      }
                      }
                        >X</span>
                    </li>
                    :
                    ""
            ))}
        </div>
    );
};

export default Test;