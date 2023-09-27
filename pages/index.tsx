import Head from 'next/head';
import Navbar from '../components/NavBar';

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Navbar />
    </>
  );
};

export default HomePage;
