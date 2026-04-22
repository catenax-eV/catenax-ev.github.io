import React from 'react';
import Layout from '@theme/Layout';
import StandardsGraph from '@site/src/components/StandardsGraph/StandardsGraph';

export default function StandardsGraphPage() {
  return (
    <Layout
      title="Standards Graph"
      description="Interactive visualization of dependencies between Catena-X Standards"
    >
      <main style={{ padding: 0, margin: 0, width: '100%', height: 'calc(100vh - 60px)' }}>
        <StandardsGraph />
      </main>
    </Layout>
  );
}
