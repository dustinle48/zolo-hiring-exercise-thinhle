import { BarChart, RadarChart } from "@mantine/charts";
import { Box, Button } from "@mantine/core";

type TProps = {
  data: any;
};

const DataTab = (props: TProps) => {
  const { data } = props;

  const handleUpload = async () => {
    // await upload
  };

  return (
    <>
      <h1>Data visualization</h1>

      <Button onClick={handleUpload}>Upload CSV/JSON file.</Button>

      <Box style={{ marginTop: 10 }}>
        <BarChart
          h={300}
          data={data.data1}
          dataKey="month"
          type="stacked"
          series={[
            { name: "Smartphones", color: "violet.6" },
            { name: "Laptops", color: "blue.6" },
            { name: "Tablets", color: "teal.6" },
          ]}
        />

        <RadarChart
          h={300}
          data={data.data2}
          dataKey="product"
          withPolarRadiusAxis
          series={[{ name: "sales", color: "blue.4", opacity: 0.2 }]}
        />
      </Box>
    </>
  );
};

export default DataTab;
