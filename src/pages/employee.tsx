import { PageContainer } from "@/components/common/Container";
import JobTab from "@/components/common/EmployeePage/JobTab";
import OfferTab from "@/components/common/EmployeePage/OfferTab";
import { Tabs } from "@mantine/core";
import Head from "next/head";
import { AiOutlineContainer, AiOutlineHolder } from "react-icons/ai";

//Pre-fetch employee data here
/* export const getServerSideProps = async () => {
  const res = await fetch(database);
  const repo: Repo = await res.json();

  return { props: { repo } };
}; */

type TProps = {
  employeeData: any;
};

const EmployeePage = (props: TProps) => {
  //Fake data
  const employeeData = {
    userData: {
      name: "John Doe",
      job: "Developer",
    },
    jobList: {
      caption: "Click on any item would redirect to that company job portal.",
      head: ["Company", "Job title", "Status"],
      body: [
        ["Apple", "Fullstack developer", "Pending"],
        ["SpaceX", "Backend enginerr", "Pending"],
        ["Arsenal", "Midfielder", "Offered"],
        ["Wife", "Husband", "Married"],
      ],
    },
    offerList: {
      caption:
        "Click on any item would show the text component display the offer just like Code in Github or Bitbucket where user could comment inline for requesting clarification",
      head: ["Company", "Job title", "Status"],
      body: [
        ["Arsenal", "Midfielder", "Offered"],
        ["Wife", "Husband", "Married"],
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Employee page - ZOLOMART</title>
        <meta name="description" content="Employee page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PageContainer>
          <h1>Employee Page</h1>

          <Tabs defaultValue="job" style={{ width: "60%" }}>
            <Tabs.List>
              <Tabs.Tab value="job" leftSection={<AiOutlineHolder />}>
                Job
              </Tabs.Tab>
              <Tabs.Tab value="offer" leftSection={<AiOutlineContainer />}>
                Offer
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="job">
              <JobTab data={employeeData.jobList} />
            </Tabs.Panel>
            <Tabs.Panel value="offer">
              <OfferTab data={employeeData.offerList} />
            </Tabs.Panel>
          </Tabs>
        </PageContainer>
      </main>
    </>
  );
};

export default EmployeePage;
