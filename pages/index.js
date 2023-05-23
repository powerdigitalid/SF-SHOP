import Product from "../components/ladingpages/product/product";
import About from "../components/ladingpages/utils/about";
import Banner from "../components/ladingpages/utils/banner";
import Contactus from "../components/ladingpages/utils/contactus";
import Layout from "../components/ladingpages/utils/layout";


export default function Home() {
  return (
    <>
      <Layout>
        <Banner />
        <Product />
        <About />
        <Contactus />
      </Layout>
    </>
  );
}
