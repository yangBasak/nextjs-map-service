import React from 'react';
import Link from 'next/link';
import styles from '../../styles/header.module.scss';
import Image from 'next/image';
interface Props {
  rightElements?: React.ReactElement[];
}

const HeaderComponent = ({ rightElements }: Props) => {
  return (
    <header className={styles.header}>
      <div className={styles.flexItems}>
        <Link href="/" className={styles.box}>
          <Image
            src="/inflearn.png"
            alt="인프런 로고"
            width={110}
            height={20}
          />
        </Link>
      </div>
      <div>
        {rightElements && (
          <div className={styles.flexItems}>{rightElements}</div>
        )}
      </div>
    </header>
  );
};

export default HeaderComponent;
