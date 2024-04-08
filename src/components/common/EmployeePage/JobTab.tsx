import { Table } from "@mantine/core";

type TProps = {
  data: any;
};

const JobTab = (props: TProps) => {
  const { data } = props;

  return (
    <>
      <h1>List of applied jobs.</h1>

      <Table data={data} />
    </>
  );
};

export default JobTab;
