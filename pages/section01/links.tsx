// import Link from 'next/link';

// export default function Links() {
//   <main>
//     <h1>Links</h1>
//     <Link href="/section1/getStaticProps">getStaticProps-</Link>
//   </main>;
// }

import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Links() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/section1/getStaticProps');
  }, []);
  return (
    <main>
      <h1>Links</h1>
      <button
        onClick={() => {
          router.push('/section1/getStaticProps');
        }}
      >
        이동
      </button>
    </main>
  );
}
