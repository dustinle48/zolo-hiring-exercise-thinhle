import { Table } from "@mantine/core";

type TProps = {
  data: any;
};

const ApplicantTab = (props: TProps) => {
  const { data } = props;

  return (
    <>
      <h1>List of applicants.</h1>

      <Table data={data} />
    </>
  );
};

export default ApplicantTab;
