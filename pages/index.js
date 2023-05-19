import About from "../components/ladingpages/utils/about";
import Contactus from "../components/ladingpages/utils/contactus";
import Layout from "../components/ladingpages/utils/layout";
import Product from "../components/ladingpages/utils/product";

export default function Home() {
  return (
    <>
      <Layout>
        <Product />
        <About />
        <Contactus />
      </Layout>
    </>
  );
}
