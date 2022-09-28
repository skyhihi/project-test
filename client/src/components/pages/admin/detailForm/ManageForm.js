import React, { useState, useEffect } from "react";
import MenuAdmin from "../MenuAdmin";
import { Input, Popconfirm, Button, message, Modal } from "antd";
import { FontSizeOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import {
  listYears,
  createYear,
  editYear as pushYear,
  deleteYear,
} from "../../../functions/year";
import {
  listUniversity,
  createUniversity,
  editUniversity as pushUniversity,
  deleteUniversity,
} from "../../../functions/university";
import {
  listFaculty,
  createFaculty,
  editFaculty as pushFaculty,
  deleteFaculty,
} from "../../../functions/faculty";

const ManageForm = () => {
  const [years, setYears] = useState([]);
  const [university, setUniversity] = useState([]);
  const [faculty, setFaculty] = useState([]);

  const loadData = () => {
    listYears()
      .then((res) => {
        setYears(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    listUniversity()
      .then((res) => {
        setUniversity(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    listFaculty()
      .then((res) => {
        setFaculty(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line
  }, []);

  //==========add university=============
  const [valueUniversity, setValueUniversity] = useState({
    university: "",
  });

  const onChangeUniversity = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setValueUniversity({
      ...valueUniversity,
      [e.target.name]: e.target.value,
    });
    //console.log(value);
  };
  const onClickAddUni = (e) => {
    e.preventDefault(); //
    //console.log(value);

    createUniversity(valueUniversity)
      .then((res) => {
        //console.log(res.data);
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  //==========add year=============

  const [valueYear, setValueYear] = useState({
    year: "",
  });

  const onChangeYear = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setValueYear({
      ...valueYear,
      [e.target.name]: e.target.value,
    });
    //console.log(value);
  };
  const onClickAddYear = (e) => {
    e.preventDefault(); //
    //console.log(value);

    createYear(valueYear)
      .then((res) => {
        //console.log(res.data);
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  //==========add Faculty=============
  const [valueFaculty, setValueFaculty] = useState({
    faculty: "",
  });

  const onChangeFaculty = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setValueFaculty({
      ...valueFaculty,
      [e.target.name]: e.target.value,
    });
    //console.log(value);
  };
  const onClickAddFaculty = (e) => {
    e.preventDefault(); //
    //console.log(value);

    createFaculty(valueFaculty)
      .then((res) => {
        //console.log(res.data);
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  //==========edit university=============
  const [editUniversity, setEditUniversity] = useState({
    id: "",
    university: "",
  });
  const [universityOld, setUniversityOld] = useState();

  const [isModalOpenU, setIsModalOpenU] = useState(false);

  const showModalUniversity = (id, year) => {
    //console.log(id);
    setIsModalOpenU(true);
    setEditUniversity({ ...editUniversity, id: id });
    setUniversityOld(year);
  };

  const handleCancelU = () => {
    setIsModalOpenU(false);
  };
  const handleChangeUniversity = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setEditUniversity({ ...editUniversity, [e.target.name]: e.target.value });
  };

  const handleSubmitUniversity = () => {
    //console.log(editDetail);
    pushUniversity(editUniversity)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
        loadData();

        setIsModalOpenU(false);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  //==========edit year=============

  const [editYear, setEditYear] = useState({
    id: "",
    year: "",
  });
  const [yearOld, setYearOld] = useState();

  const [isModalOpenY, setIsModalOpenY] = useState(false);

  const showModalYear = (id, year) => {
    //console.log(id);
    setIsModalOpenY(true);
    setEditYear({ ...editYear, id: id });
    setYearOld(year);
  };

  const handleCancelY = () => {
    setIsModalOpenY(false);
  };
  const handleChangeYear = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setEditYear({ ...editYear, [e.target.name]: e.target.value });
  };

  const handleSubmitYear = () => {
    //console.log(editDetail);
    pushYear(editYear)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
        loadData();

        setIsModalOpenY(false);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  //==========edit Faculty=============

  const [editFaculty, setEditFaculty] = useState({
    id: "",
    faculty: "",
  });
  const [facultyOld, setFacultyOld] = useState();

  const [isModalOpenF, setIsModalOpenF] = useState(false);

  const showModalFaculty = (id, faculty) => {
    //console.log(id);
    setIsModalOpenF(true);
    setEditFaculty({ ...editFaculty, id: id });
    setFacultyOld(faculty);
  };

  const handleCancelF = () => {
    setIsModalOpenF(false);
  };
  const handleChangeFaculty = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    setEditFaculty({ ...editFaculty, [e.target.name]: e.target.value });
  };

  const handleSubmitFaculty = () => {
    //console.log(editDetail);
    pushFaculty(editFaculty)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
        loadData();

        setIsModalOpenF(false);
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };

  //==========delete university===============
  const confirmUniversity = (id) => {
    //console.log(e);
    //message.success("Click on Yes");
    deleteUniversity(id)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };
  const cancelUniversity = (e) => {
    //console.log(e);
    message.error("Click on No");
  };
  //==========delete year===============
  const confirmYear = (id) => {
    //console.log(e);
    //message.success("Click on Yes");
    deleteYear(id)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };
  const cancelYear = (e) => {
    //console.log(e);
    message.error("Click on No");
  };
  //==========delete Faculty===============
  const confirmFaculty = (id) => {
    //console.log(e);
    //message.success("Click on Yes");
    deleteFaculty(id)
      .then((res) => {
        //console.log(res.data.status);
        toast.success(res.data.status);
        loadData();
      })
      .catch((err) => {
        //console.log(err.response.data.error);
        toast.error(err.response.data.error);
      });
  };
  const cancelFaculty = (e) => {
    //console.log(e);
    message.error("Click on No");
  };

  return (
    <>
      <MenuAdmin />
      <div style={{ paddingLeft: "200px" }}>
        <div class="card">
          <div class="card-body">
            <div className="row">
              <h5 style={{ textAlign: "center" }}>รายละเอียดฟอร์ม</h5>
              <br />
              <br />
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4>
                      <span className="badge rounded-pill bg-primary">
                        มหาวิทยาลัย
                      </span>
                    </h4>
                    <hr />

                    <div className="row">
                      <div className="col-md-10">
                        <Input
                          type="text"
                          name="university"
                          //size="large"
                          placeholder=" เพิ่มมหาลัย"
                          allowClear
                          onChange={onChangeUniversity}
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          class="btn btn-success btn-sm"
                          onClick={onClickAddUni}
                        >
                          <i class="bi bi-plus-square me-2"></i>
                          เพิ่ม
                        </button>
                      </div>
                      {/**==============table============= */}
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">ชื่อมหาวิทยาลัย</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {university.map((item, index) => (
                            <>
                              <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.university}</td>
                                <td>
                                  <Button
                                    type="primary"
                                    style={{
                                      marginRight: "1rem",
                                      backgroundColor: "#ffe71a",
                                      borderStyle: "none",
                                      color: "black",
                                    }}
                                    onClick={() =>
                                      showModalUniversity(
                                        item.id,
                                        item.university
                                      )
                                    }
                                  >
                                    แก้ไข
                                  </Button>
                                  <Popconfirm
                                    placement="topRight"
                                    title="Are you sure?"
                                    onConfirm={() => confirmUniversity(item.id)}
                                    onCancel={cancelUniversity}
                                    okText="Yes"
                                    cancelText="No"
                                  >
                                    <button
                                      className="btn btn-danger btn-sm"
                                      //onClick={() => handleRemove(item.id)}
                                    >
                                      ลบ
                                    </button>
                                  </Popconfirm>
                                </td>
                              </tr>
                            </>
                          ))}
                        </tbody>
                      </table>
                      <Modal
                        title="แก้ไขมหาวิทยาลัย"
                        open={isModalOpenU}
                        footer={null}
                        onCancel={handleCancelU}
                      >
                        <label>
                          <b>มหาวิทยาลัย : {universityOld}</b>
                        </label>
                        <br />
                        <br />
                        <Input
                          type="text"
                          name="university"
                          placeholder={" แก้ไขมหาวิทยาลัย"}
                          onChange={handleChangeUniversity}
                          prefix={
                            <FontSizeOutlined className="site-form-item-icon" />
                          }
                        />
                        <Button
                          type="primary"
                          style={{ marginTop: "0.5rem" }}
                          onClick={handleSubmitUniversity}
                        >
                          เปลี่ยน
                        </Button>
                        <br />
                        <br />
                        <hr />
                      </Modal>
                    </div>
                  </div>
                </div>
                <br />
              </div>

              {/**==============ปีการศึกษา============= */}
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4>
                      <span className="badge rounded-pill bg-secondary">
                        ปีการศึกษา
                      </span>
                    </h4>
                    <hr />

                    <div className="row">
                      <div className="col-md-10">
                        <Input
                          type="Number"
                          name="year"
                          //size="large"
                          allowClear
                          placeholder=" เพิ่มปีการศึกษา(ตัวเลข)"
                          onChange={onChangeYear}
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          class="btn btn-success btn-sm"
                          onClick={onClickAddYear}
                        >
                          <i class="bi bi-plus-square me-2"></i>
                          เพิ่ม
                        </button>
                      </div>
                    </div>
                    {/**==============table============= */}
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">ปีการศึกษา</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {years.map((item, index) => (
                          <>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.year}</td>
                              <td>
                                <Button
                                  type="primary"
                                  style={{
                                    marginRight: "1rem",
                                    backgroundColor: "#ffe71a",
                                    borderStyle: "none",
                                    color: "black",
                                  }}
                                  onClick={() =>
                                    showModalYear(item.id, item.year)
                                  }
                                >
                                  แก้ไข
                                </Button>
                                <Popconfirm
                                  placement="topRight"
                                  title="Are you sure?"
                                  onConfirm={() => confirmYear(item.id)}
                                  onCancel={cancelYear}
                                  okText="Yes"
                                  cancelText="No"
                                >
                                  <button
                                    className="btn btn-danger btn-sm"
                                    //onClick={() => handleRemove(item.id)}
                                  >
                                    ลบ
                                  </button>
                                </Popconfirm>
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                    <Modal
                      title="แก้ไขคำถาม"
                      open={isModalOpenY}
                      footer={null}
                      onCancel={handleCancelY}
                    >
                      <label>
                        <b>ปีการศึกษา : {yearOld}</b>
                      </label>
                      <br />
                      <br />
                      <Input
                        type="number"
                        name="year"
                        placeholder={" แก้ไขปีการศึกษา(ตัวเลข)"}
                        onChange={handleChangeYear}
                        prefix={
                          <FontSizeOutlined className="site-form-item-icon" />
                        }
                      />
                      <Button
                        type="primary"
                        style={{ marginTop: "0.5rem" }}
                        onClick={handleSubmitYear}
                      >
                        เปลี่ยน
                      </Button>
                      <br />
                      <br />
                      <hr />
                    </Modal>
                  </div>
                </div>
                <br />
              </div>

              {/**==============คณะ============= */}
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-body">
                    <h4>คณะ</h4>
                    <hr />

                    <div className="row">
                      <div className="col-md-10">
                        <Input
                          type="text"
                          name="faculty"
                          //size="large"
                          allowClear
                          placeholder=" เพิ่มคณะ"
                          onChange={onChangeFaculty}
                        />
                      </div>
                      <div className="col-md-2">
                        <button
                          type="button"
                          class="btn btn-success btn-sm"
                          onClick={onClickAddFaculty}
                        >
                          <i class="bi bi-plus-square me-2"></i>
                          เพิ่ม
                        </button>
                      </div>
                    </div>

                    {/**==============table============= */}

                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">คณะ</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        {faculty.map((item, index) => (
                          <>
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>{item.faculty}</td>
                              <td>
                                <Button
                                  type="primary"
                                  style={{
                                    marginRight: "1rem",
                                    backgroundColor: "#ffe71a",
                                    borderStyle: "none",
                                    color: "black",
                                  }}
                                  onClick={() =>
                                    showModalFaculty(item.id, item.faculty)
                                  }
                                >
                                  แก้ไข
                                </Button>
                                <Popconfirm
                                  placement="topRight"
                                  title="Are you sure?"
                                  onConfirm={() => confirmFaculty(item.id)}
                                  onCancel={cancelFaculty}
                                  okText="Yes"
                                  cancelText="No"
                                >
                                  <button
                                    className="btn btn-danger btn-sm"
                                    //onClick={() => handleRemove(item.id)}
                                  >
                                    ลบ
                                  </button>
                                </Popconfirm>
                              </td>
                            </tr>
                          </>
                        ))}
                      </tbody>
                    </table>
                    <Modal
                      title="แก้ไข"
                      open={isModalOpenF}
                      footer={null}
                      onCancel={handleCancelF}
                    >
                      <label>
                        <b>คณะ : {facultyOld}</b>
                      </label>
                      <br />
                      <br />
                      <Input
                        type="text"
                        name="faculty"
                        placeholder={" แก้ไขคณะ"}
                        onChange={handleChangeFaculty}
                        prefix={
                          <FontSizeOutlined className="site-form-item-icon" />
                        }
                      />
                      <Button
                        type="primary"
                        style={{ marginTop: "0.5rem" }}
                        onClick={handleSubmitFaculty}
                      >
                        เปลี่ยน
                      </Button>
                      <br />
                      <br />
                      <hr />
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default ManageForm;
