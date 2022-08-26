import React, { useRef, useState } from "react";
import { Select, Input, Table } from "antd";
import MenuAdmin from "../MenuAdmin";
import Highlighter from "react-highlight-words";

const { Option } = Select;

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

const General = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
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
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns = [
    {
      title: "รหัสนักศึกษา",
      dataIndex: "ID",
      key: "ID",
      width: "10%",
      ...getColumnSearchProps("ID"),
    },
    {
      title: "ชื่อ นามสกุล",
      dataIndex: "name",
      key: "name",
      width: "10%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "มหาวิทยาลัย",
      dataIndex: "uni",
      key: "uni",
      width: "10%",
      ...getColumnSearchProps("uni"),
    },
    {
      title: "ปีการศึกษา",
      dataIndex: "year",
      key: "year",
      ...getColumnSearchProps("year"),
    },
    {
      title: "e",
      dataIndex: "e",
      key: "e",
      width: "10%",
      ...getColumnSearchProps("e"),
    },
    {
      title: "i",
      dataIndex: "i",
      key: "i",
      width: "10%",
      ...getColumnSearchProps("i"),
    },
    {
      title: "b",
      dataIndex: "b",
      key: "b",
      width: "10%",
      ...getColumnSearchProps("b"),
    },
    {
      title: "p",
      dataIndex: "p",
      key: "p",
      width: "10%",
      ...getColumnSearchProps("p"),
    },
    {
      title: "t",
      dataIndex: "t",
      key: "t",
      width: "10%",
      ...getColumnSearchProps("t"),
    },
    {
      title: "d",
      dataIndex: "d",
      key: "d",
      width: "10%",
      ...getColumnSearchProps("d"),
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
              </div>
              <h5>ข้อมูลทั้งหมด</h5>
              <div className="col-sm-5" style={{ marginBottom: "1rem" }}>
                
                <Select
                  defaultValue="มหาวิทยาลัย"
                  style={{
                    fontSize: "18px",
                    width: "100%",
                  }}
                  onChange={handleChange}
                >
                  <Option value="jack" style={{ fontSize: "18px" }}>
                    มหาวิทยาลัยมหิดล
                  </Option>
                  <Option value="lucy" style={{ fontSize: "18px" }}>
                    มหาวิทยาลัย...
                  </Option>
                </Select>
              </div>
              <div className="col-sm-5">
                
                <Select
                  defaultValue="ปีการศึกษา"
                  style={{
                    fontSize: "18px",
                    width: "100%",
                  }}
                >
                  <Option value="lucy" style={{ fontSize: "18px" }}>
                    2565
                  </Option>
                  <Option value="lucy" style={{ fontSize: "18px" }}>
                    2564
                  </Option>
                  <Option value="lucy" style={{ fontSize: "18px" }}>
                    2563
                  </Option>
                </Select>
                
                
              </div>
              <div className="col-lg-2">
                  <button className="btn btn-outline-success btn-sm"><i class="bi bi-file-earmark-arrow-down"></i> ดาวน์โหลดเอกสาร</button>
                </div>
            </div>
            
            <Table
              columns={columns}
              dataSource={data}
              scroll={{
                x: 1300,
              }}
            />
            
          </div>
        </div>
      </div>
    </>
  );
};

export default General;
