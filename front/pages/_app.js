import AppLayout from "../components/AppLayout";
import Head from "next/head";

const _app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>짹짹이</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default _app;
