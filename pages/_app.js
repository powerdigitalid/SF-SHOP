import "../styles/globals.css";
import "../public/dist/css/main.css";
import "../public/dist/css/tiny-slider.css";
import "../public/dist/css/glightbox.css";
import "../public/dist/css/lineicons.css";

//admin pages
import "../public/dist/css/all.min.css";
import "../public/dist/css/bootstrap.min.css";
import "../public/dist/css/components.css";
import "../public/dist/css/jqvmap.min.css";
import "../public/dist/css/style.css";
import "../public/dist/css/summernote-bs4.css";
import "../public/dist/css/weather-icons-wind.min.css";
import "../public/dist/css/weather-icons.min.css";
import "../public/dist/css/datatables.css";
import "../public/dist/css/datatablesbs.css";
import "../public/dist/css/datatablesbsselect.css";

//lading pages
import "../public/dist/css/ladingpage/flex-slider.css";
import "../public/dist/css/ladingpage/fontawesome.css";
import "../public/dist/css/ladingpage/owl.css";
import "../public/dist/css/ladingpage/templatemo-sixteen.css";

import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
