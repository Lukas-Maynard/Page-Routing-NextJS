import Layout from './layout';
import Link from 'next/link';

const HomePage = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Protein Palace</h1>
      <p>Select a category:</p>
      <Link href="/appetizers">Appetizers</Link>
      <br />
      <Link href="/entrees">Entrees</Link>
    </Layout>
  );
};

export default HomePage;