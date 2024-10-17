import Layout from '../layout';

const Appetizers = () => {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Appetizers</h1>
      <ul className="list-disc pl-5 space-y-2">
        <li className="text-lg">A hole chicken</li>
        <li className="text-lg">Mario Mushrooms</li>
        <li className="text-lg">Too many sardines</li>
        <li className="text-lg">Apples</li>
      </ul>
    </Layout>
  );
};

export default Appetizers;
