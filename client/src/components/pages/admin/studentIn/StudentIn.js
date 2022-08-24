import React, { useRef, useState } from "react";
import { Select, Button, Input, Space, Table } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import MenuAdmin from "../MenuAdmin";

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
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

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
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
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1890ff" : undefined,
        }}
      />
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
        <h
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
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
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
                <div className="row">
                  <div className="col-sm-6" style={{ marginBottom: "1rem" }}>
                    <label>มหาวิทยาลัย</label>
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
                  
                  <div className="col-sm-6">

                    <label>ปีการศึกษา</label>
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
                    </Select><br />
                    
                    
                    
                  </div>
                </div>
                <Table columns={columns} dataSource={data} />;
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentIn;
