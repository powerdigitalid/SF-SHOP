import React from 'react'
import Layout from '../../components/admin-pages/utils/layout'
import Head from 'next/head'
import Dashboard from '../../components/admin-pages/dashboard/dashboard'
import {useEffect} from 'react'
import {getCookie, validateToken} from '../../libs/cookie.lib'

export default function Index() {
  useEffect(() => {
    if(getCookie('token') === "" && getCookie("username") === ""){
      window.location.href = "/login";
    }else{
      validateToken(getCookie('token')) ? null : window.location.href = "/login";
    }
  }, [])
  return (
    <div>
      <Layout>
      <Head>
          <title>Dashboard</title>
        </Head>
        <div>
          <div className="section-header">
            <h1>Dashboard</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active"><a href="#">Home</a></div>
              <div className="breadcrumb-item"><a href="#">Dashboard</a></div>
            </div>
          </div>
          <div className="section-body">
            <Dashboard />
          </div>
        </div>
      </Layout>
    </div>
  )
}
