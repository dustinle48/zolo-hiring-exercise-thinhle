import Head from "next/head";
import { Button, Center } from "@mantine/core";
import { PageContainer } from "@/components/common/Container";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page - ZOLOMART</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageContainer>
          <h1>Welcome to ZOLOMART</h1>
          <Center style={{ gap: "10px" }}>
            <Link href="/employer">
              <Button>Employer</Button>
            </Link>
            <Link href="/employee">
              <Button>Employee</Button>
            </Link>
          </Center>
        </PageContainer>
      </main>
    </>
  );
}
