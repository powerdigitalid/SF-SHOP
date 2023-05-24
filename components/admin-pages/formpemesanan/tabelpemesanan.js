import Link from 'next/link'
import React from 'react'

export default function Tabelpemesanan() {
    return (
        <div>
            <div className="card author-box card-primary">
                <div className="card-body">
                    <div className="col-12 mb-3">
                        <div className="">
                            <h2>Pemesanan</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div>
                            <div className="row">
                                <div className="col-12">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Alamat</th>
                                                <th scope="col">No.Hp</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Ekspedisi</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>Exampel@gmail.com</td>
                                                <td>Jl. Hasyim Asyhari, No.20, Jakarta</td>
                                                <td>0226423974</td>
                                                <td>Rp. 350.000</td>
                                                <td>JNE</td>
                                                <td>
                                                    <Link href="/admin/pemesanan/detail" className="btn btn-primary mr-1 rounded mb-1 text-white"><i className="far fa-eye" /></Link>
                                                    <button className="btn btn-success mr-1 rounded mb-1 text-white"><i className="far fa-edit" /></button>
                                                    <button className="btn btn-danger rounded mb-1 text-white"><i className="far fa-times-circle" /></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
