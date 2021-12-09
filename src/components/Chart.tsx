import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

const ChartContainer = styled.div`
  color: ${(props) => props.theme.textColor};
`;

function Chart() {
  const { coinId } = useParams();
  const { data, isLoading } = useQuery("coinHistory", () =>
    fetchCoinHistory(coinId)
  );
  return isLoading ? null : (
    <ChartContainer id="chart">
      <ApexChart
        options={{
          chart: { type: "candlestick", height: 350, width: 800 },
          xaxis: { type: "datetime" },
          yaxis: { tooltip: { enabled: true } },
        }}
        series={[
          {
            data: data?.map((price: any, index: number) => {
              return {
                x: price.time_open,
                y: [
                  price.open.toFixed(2),
                  price.high.toFixed(2),
                  price.low.toFixed(2),
                  price.close.toFixed(2),
                ],
              };
            }),
          },
        ]}
        type="candlestick"
        height={350}
        width={800}
      ></ApexChart>
    </ChartContainer>
  );
}

export default Chart;
