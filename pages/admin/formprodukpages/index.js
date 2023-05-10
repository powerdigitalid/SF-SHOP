import Head from 'next/head'
import React from 'react'
import AllProducts from '../../../components/admin-pages/formproduk/allproduk'
import FormInputProduct from '../../../components/admin-pages/formproduk/forminputproduk'
import Layout from '../../../components/admin-pages/utils/layout'

export default function Index() {
  return (
    <div>
        <Layout>
          <FormInputProduct />
            <AllProducts />
        </Layout>
    </div>
  )
}
