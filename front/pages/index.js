import Link from "next/link";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import "antd/dist/antd.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>짹짹이</title>
      </Head>
      <AppLayout>
        <Link href="/about">
          <a>about</a>
        </Link>
      </AppLayout>
    </div>
  );
};

export default Home;
