import { useEffect } from "react";
// import Home from 'src/views/Home';
// import Layout from 'components/Layout';

import { useRouter } from "next/router";

const IndexPage = ({ user, loading }: any) => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/home");
  }, []);
  return null;
};

export default IndexPage;
