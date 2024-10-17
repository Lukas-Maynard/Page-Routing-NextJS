"use client";
import { useEffect, useState } from 'react';
import Layout from '../layout';

const Entrees = () => {
  const [entreesText, setEntreesText] = useState('');

  useEffect(() => {
    const fetchEntrees = async () => {
      const response = await fetch('/entrees.txt');
      const text = await response.text();
      setEntreesText(text);
    };
    fetchEntrees();
  }, []);

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Entrees</h1>
      <pre className="bg-gray-100 p-4 rounded border border-gray-300">{entreesText}</pre>
    </Layout>
  );
};

export default Entrees;
