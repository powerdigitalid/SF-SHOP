import Head from 'next/head'
import React from 'react'
import EditProduct from '../../../components/admin-pages/formproduk/editproduk'
import Layout from '../../../components/admin-pages/utils/layout'

export default function Editproduk() {
  return (
    <div>
        <Layout>
        <EditProduct />
        </Layout>
    </div>
  )
}
