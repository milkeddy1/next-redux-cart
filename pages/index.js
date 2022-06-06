import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useDispatch } from "react-redux";
import Layout from "../components/Layout/Layout";
import SingleItem from "../components/SingleItem";

function Home({ data }) {
  return (
    <Layout>
      <div className={styles.data}>
        {data.map((product) => (
          <SingleItem key={product.id} data={product} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
