import Header from '../components/common/Header';
import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { VscFeedback } from 'react-icons/vsc';
import { AiOutlineShareAlt } from 'react-icons/ai';
import MapSection from '../components/home/MapSection';
import { useEffect } from 'react';
import { Store } from '../types/store';
import useStores from '../hooks/useStores';
import { NextPage } from 'next';

interface Props {
  stores: Store[];
}

const Home: NextPage<Props> = ({ stores }) => {
  const { initializeStores } = useStores();
  useEffect(() => {
    initializeStores(stores);
  }, [initializeStores, stores]);

  return (
    <>
      <Header
        rightElements={[
          <button
            className={styles.box}
            style={{ marginRight: 8 }}
            onClick={() => {
              alert('복ㅋ사');
            }}
            key="btn"
          >
            <AiOutlineShareAlt size={20} />
          </button>,
          <Link href="/feedback" className={styles.box} key="link">
            <VscFeedback size={20} />
          </Link>,
        ]}
      />
      <main style={{ width: '100%', height: '100%' }}>
        <MapSection />
      </main>
    </>
  );
};
export default Home;

export async function getStaticProps() {
  const stores = (await import('../public/stores.json')).default;
  return {
    props: { stores },
    revalidate: 60 * 60, //바뀔 가능성이 적으므로 1시간으로 줌. 매장데이터는 거의 안바뀌니 아예 주지 않아도 무방
  };
}
