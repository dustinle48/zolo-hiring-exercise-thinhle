import { PageContainer } from "@/components/common/Container";
import Head from "next/head";

const EmployerPage = () => {
  return (
    <>
      <Head>
        <title>Employer page - ZOLOMART</title>
        <meta name="description" content="Employer page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageContainer>
          <h1>Employer Page</h1>
        </PageContainer>
      </main>
    </>
  );
};

export default EmployerPage;
