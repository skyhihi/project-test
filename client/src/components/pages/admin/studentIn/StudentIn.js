import React, { useRef, useState } from "react";
import { Input, Table } from "antd";
//import { SearchOutlined } from "@ant-design/icons";
import Highlighter from "react-highlight-words";

import MenuAdmin from "../MenuAdmin";

const data = [
  {
    key: "1",
    name: "ชวมนต์",
    ID: "6203051613204",
    year: "2562",
    uni: "Mahidol",
  },
  {
    key: "2",
    name: "ปาณิสรา",
    ID: "6203051613212",
    year: "2562",
    uni: "Mahidol",
  },
  {
    key: "3",
    name: "วริศรา",
    ID: "6203051613212",
    year: "2562",
    uni: "Mahidol",
  },
  {
    key: "4",
    name: "ปุณรัตน์",
    ID: "6203051613212",
    year: "2562",
    uni: "Mahidol",
  },
];

const StudentIn = () => {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };


  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      //clearFilters,
    }) => (
      <div
        style={{
          padding: 8,
        }}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        
        
      </div>
    ),
   
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          //highlightStyle={{
           // backgroundColor: '#ffc069',
           // padding: 0,
         // }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "ชื่อ นามสกุล",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "รหัสนักศึกษา",
      dataIndex: "ID",
      key: "ID",
      width: "20%",
      ...getColumnSearchProps("ID"),
    },
    {
      title: "ปีการศึกษา",
      dataIndex: "year",
      key: "year",
      ...getColumnSearchProps("year"),
    },
    {
      title: "มหาวิทยาลัย",
      dataIndex: "uni",
      key: "uni",
      width: "20%",
      ...getColumnSearchProps("uni"),
    },
  ];

  return (
    <>
    
      <MenuAdmin />
      <div style={{ paddingLeft: "200px" }}>
        <div class="card">
          <div class="card-body">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-8">
                <div className="row"></div>
                
              </div><h5>ข้อมูลนักศึกษา</h5><br /><br />
              
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentIn;
