import { PageContainer } from "@/components/common/Container";
import ApplicantTab from "@/components/common/EmployerPage/ApplicantTab";
import DataTab from "@/components/common/EmployerPage/DataTab";
import OfferedTab from "@/components/common/EmployerPage/OfferedTab";
import { Tabs, Text } from "@mantine/core";
import Head from "next/head";
import { AiOutlineUsergroupAdd, AiOutlineSolution } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";

//Pre-fetch employer data here
/* export const getServerSideProps = async () => {
  const res = await fetch(database);
  const repo: Repo = await res.json();

  return { props: { repo } };
}; */

type TProps = {
  employerData: any;
};

const EmployerPage = (props: TProps) => {
  //Fake data
  const employerData = {
    userData: {
      name: "John Doe",
      role: "hiring-manager",
    },
    applicantList: {
      caption:
        "Click Offer will open a form to create Offer for chosen applicant.",
      head: ["Name", "Job title", "Status", "Actions"],
      body: [
        ["Messi", "Fullstack developer", "Pending", "View/Offer/Delete"],
        ["Snoop Dogg", "Backend enginerr", "Pending", "View/Offer/Delete"],
        ["Odegaard", "Midfielder", "Offered", "View/Offer/Delete"],
        ["Wife", "Husband", "Married", "View/Offer/Delete"],
      ],
    },
    offeredList: {
      caption:
        "Click Share, an Email containing an URL to view the offer will be sent to chosen applicant.",
      head: ["Name", "Job title", "Status", "Actions"],
      body: [
        ["Odegaard", "Midfielder", "Offered", "View/Share"],
        ["Wife", "Husband", "Married", "View/Share"],
      ],
    },
    dataChart: {
      data1: [
        { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
        { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
        { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
        { month: "April", Smartphones: 1000, Laptops: 200, Tablets: 800 },
        { month: "May", Smartphones: 800, Laptops: 1400, Tablets: 1200 },
        { month: "June", Smartphones: 750, Laptops: 600, Tablets: 1000 },
      ],
      data2: [
        {
          product: "Apples",
          sales: 120,
        },
        {
          product: "Oranges",
          sales: 98,
        },
        {
          product: "Tomatoes",
          sales: 86,
        },
        {
          product: "Grapes",
          sales: 99,
        },
        {
          product: "Bananas",
          sales: 85,
        },
        {
          product: "Lemons",
          sales: 65,
        },
      ],
    },
  };

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
          <h1>Organization Landing Page</h1>
          <Text c="dimmed">
            There should be roles which are customizable for each organization
          </Text>
          <Text c="dimmed">E.G: Admin role can do everything.</Text>
          <Text c="dimmed">
            Hiring manager role can View and Create/Edit/Delete offers.
          </Text>
          <Text c="dimmed">
            HR team members can only view applicants and upload data for
            visualization.
          </Text>

          <Tabs defaultValue="applicant" style={{ width: "60%" }}>
            <Tabs.List>
              <Tabs.Tab
                value="applicant"
                leftSection={<AiOutlineUsergroupAdd />}
              >
                Applicant
              </Tabs.Tab>
              <Tabs.Tab value="offer" leftSection={<AiOutlineSolution />}>
                Offer
              </Tabs.Tab>
              <Tabs.Tab value="data" leftSection={<FaChartBar />}>
                Data
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="applicant">
              <ApplicantTab data={employerData.applicantList} />
            </Tabs.Panel>
            <Tabs.Panel value="offer">
              <OfferedTab data={employerData.offeredList} />
            </Tabs.Panel>
            <Tabs.Panel value="data">
              <DataTab data={employerData.dataChart} />
            </Tabs.Panel>
          </Tabs>
        </PageContainer>
      </main>
    </>
  );
};

export default EmployerPage;
