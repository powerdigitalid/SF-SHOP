import Product from "../components/ladingpages/product/product";
import About from "../components/ladingpages/utils/about";
import Banner from "../components/ladingpages/utils/banner";
import Contactus from "../components/ladingpages/utils/contactus";
import Layout from "../components/ladingpages/utils/layout";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";

export default function Home() {
  const { data: session, status } = useSession();

  if (session) {
    return (
      <>
        <Head>
          <title>Welcome {session.user.name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Banner />
          <Product />
          <About />
          <Contactus />
        </Layout>
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Home Not Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Layout>
          <Banner />
          <Product />
          <About />
          <Contactus />
        </Layout>
      </>
    );
  }
}
