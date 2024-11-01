import Head from "next/head";
import CytoscapeGraph from "../components/GraphRenderer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cytoscape.js with Next.js</title>
        <meta name="description" content="this is just the beginning" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{ padding: "20px" }}>
        <h1>this is just the beginning</h1>
        <CytoscapeGraph />
      </main>
    </div>
  );
}
