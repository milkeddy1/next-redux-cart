import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps, data }) {
  console.log(data);

  return <Component {...pageProps} data={data} />;
}

export default MyApp;

MyApp.getInitialProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return { data: data };
};
