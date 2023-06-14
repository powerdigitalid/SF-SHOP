import React from "react";
import {useState, useEffect} from 'react'
import Swal from 'sweetalert2'

export default function Tabeluser() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  
  const handleUser = () => {
    fetch('/api/user/all', {
      method: "GET",
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          setData(res.data);
        } else {
          setData([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(err);
      });
  };

  useEffect(() => {
    handleUser();
  }, []);

  const handleDeleteData = (id) => {
    fetch(`/api/user/delete?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          Swal.fire({
            icon: "success",
            title: "Data berhasil dihapus",
            showConfirmButton: false,
            timer: 1500,
          });
          handleUser();
        }
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Data gagal dihapus",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className='container-fluid'>
      <div className="card author-box card-primary mt-2">
        <div className="card-body">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">
                  Data User
                </h6>
              </div>
              <div className="table-responsive p-3">
                <div
                  id="dataTable_wrapper"
                  className="dataTables_wrapper dt-bootstrap4"
                >
                  <div className="row">
                    <div className="col-sm-12">
                      <table
                        className="table align-items-center table-flush dataTable"
                        id="dataTable"
                        role="grid"
                        aria-describedby="dataTable_info"
                      >
                        <thead className="thead-light">
                          <tr role="row">
                            <th
                              className="sorting_asc"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-sort="ascending"
                              aria-label="Name: activate to sort column descending"
                              style={{ width: "148.781px" }}
                            >
                              Name
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Position: activate to sort column ascending"
                              style={{ width: "238.031px" }}
                            >
                              Email
                            </th>
                            <th
                              className="sorting"
                              tabIndex={0}
                              aria-controls="dataTable"
                              rowSpan={1}
                              colSpan={1}
                              aria-label="Office: activate to sort column ascending"
                              style={{ width: "108.953px" }}
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                        {data.length > 0 ? data.map((users, index) => (
                          <tr role="row" className="odd" key={index}>
                            <td className="sorting_1">{users.username}</td>
                            <td>{users.password}</td>
                            <td><button className="btn btn-danger" onClick= {() => handleDeleteData(users.id)}>Delete</button></td>
                          </tr>
                          )) : (
                            <tr>
                                <td colSpan="3" className="text-center">No Data</td>
                            </tr>
                        )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
