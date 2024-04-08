import { Divider, Paper, Table, Text, Tooltip } from "@mantine/core";

type TProps = {
  data: any;
};

const OfferTab = (props: TProps) => {
  const { data } = props;

  return (
    <>
      <h1>List of offers.</h1>

      <Table data={data} />

      <Divider my="md" />

      <Text c="dimmed">Hover to to see its clarification.</Text>
      <Text c="dimmed">
        Call API to check if there is new comments every ~10 ~15 seconds, just
        like Bitbucket.
      </Text>
      <br />
      <Paper style={{ backgroundColor: "#f7f7f7" }}>
        <Tooltip label="Net pay yearly">
          <Text>Salary: 200.000 USD yearly</Text>
        </Tooltip>

        <Tooltip label="Stock">
          <Text>Equity: 20.000</Text>
        </Tooltip>

        <Tooltip label="Courses">
          <Text>Learning: 20.000 USD for courses</Text>
        </Tooltip>
      </Paper>
    </>
  );
};

export default OfferTab;
