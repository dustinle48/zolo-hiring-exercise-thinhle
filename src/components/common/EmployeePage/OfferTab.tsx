import { Table } from "@mantine/core";

type TProps = {
  data: any;
};

const OfferTab = (props: TProps) => {
  const { data } = props;

  return (
    <>
      <h1>List of offers.</h1>

      <Table data={data} />
    </>
  );
};

export default OfferTab;
