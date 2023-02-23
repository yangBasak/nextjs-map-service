import Header from '../components/common/Header';
import styles from '../styles/header.module.scss';
import Link from 'next/link';
import { AiOutlineShareAlt, VscFeedback } from 'react-icons/all';

export default function Home() {
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
      <main></main>
    </>
  );
}
