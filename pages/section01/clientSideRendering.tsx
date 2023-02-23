import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

const Example: NextPage = () => {
  const [data, setData] = useState(0);

  useEffect(() => {
    const delayInSeconds = 2;
    new Promise<number>((resolve) =>
      setTimeout(() => resolve(Math.random()), delayInSeconds * 1000)
    ).then((res) => setData(res));
  }, []);
  return (
    <main>
      <h1>클라이언트</h1>
      <p>값: {data}</p>
    </main>
  );
};
export default Example;
