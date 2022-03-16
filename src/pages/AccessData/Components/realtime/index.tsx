import {
    TooltipFormatterContextObject,
    XrangePointOptionsObject,
} from "highcharts";
import HCMore from "highcharts/highcharts-more"; // module
import Highcharts from "highcharts/highstock";
import Chart from "../../../../components/Chart";

import CustomChartTitle from "../../../../components/CustomChartTitle";

import { AnalyticsColors } from "../../../../constants";
import * as S from "./styles";

HCMore(Highcharts); // init module

const realtime = () => {
    const options: Highcharts.Options = {
        chart: {
            type: "spline",
            marginRight: 10,
            events: {
                load() {
                    // set up the updating of the chart each second
                    const series = this.series[0];
                    setInterval(function () {
                        const x = new Date().getTime(); // current time
                        const y = Math.random();
                        series.addPoint([x, y], true, true);
                    }, 1000);
                },
            },
        },
        title: {
            text: "",
        },
        xAxis: {
            type: "datetime",
            tickPixelInterval: 150,
        },
        yAxis: {
            title: {
                text: "Value",
            },
            plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: "#808080",
                },
            ],
        },

        legend: {
            enabled: false,
        },
        exporting: {
            enabled: true,
        },
        series: [
            {
                name: "Random data",
                data: ((): XrangePointOptionsObject[] => {
                    // generate an array of random data
                    const data: XrangePointOptionsObject[] = [];
                    const time = new Date().getTime();
                    let i;

                    for (i = -999; i <= 0; i += 1) {
                        data.push({
                            x: time + i * 1000,
                            y: Math.round(Math.random() * 100),
                        });
                    }
                    return data;
                })(),
                type: "line",
                color: AnalyticsColors.purple,
                borderWidth: 1,
            },
        ],

        tooltip: {
            useHTML: true,

            formatter() {
                const self: TooltipFormatterContextObject = this;

                return `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 10px; z-index: 1">

                <h1 style="font-size: 30px; font-family: Inter; color: ${AnalyticsColors.black}; margin: 0px;"> ${self.point.y}</h1>

                <span style="font-size: 16px; font-weight: 500; font-style: normal; color: ${AnalyticsColors.darkGray}"> Online(s)</span>

                </div>`;
            },
        },
    };

    return (
        <S.Wrapper>
            <CustomChartTitle
                description="Simulação de atualização de dados em tempo real."
                title="Live random data"
            />

            <Chart options={options} />
        </S.Wrapper>
    );
};

export default realtime;
