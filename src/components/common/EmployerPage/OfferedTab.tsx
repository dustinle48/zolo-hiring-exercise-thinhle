import { Table } from "@mantine/core";

type TProps = {
  data: any;
};

const OfferedTab = (props: TProps) => {
  const { data } = props;

  return (
    <>
      <h1>List of created offers.</h1>

      <Table data={data} />
    </>
  );
};

export default OfferedTab;
