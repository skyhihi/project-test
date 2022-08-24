import React from 'react'

const StudentInf = () => {
  return (
    <>
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
              </Select>
              </div>
              </div>
            </div>
          </div>
          <br />
          </>
  )
}

export default StudentInf