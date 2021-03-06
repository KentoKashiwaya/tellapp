import React, { Component } from "react";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
  Legend,
  Line,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import "../css/Trend.css";

class IndustryChart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let industry_A_appointmentlength = 0;
    let industry_B_appointmentlength = 0;
    let industry_C_appointmentlength = 0;
    let industry_D_appointmentlength = 0;
    let industry_E_appointmentlength = 0;
    let industry_F_appointmentlength = 0;
    let industry_G_appointmentlength = 0;
    let industry_H_appointmentlength = 0;
    let industry_I_appointmentlength = 0;

    //業種ごとに取得アポ数をカウント・それぞれ変数を加算
    this.props.all.map((item) => {
      if (item.industry === "イベント" && item.status === "アポ取得") {
        industry_A_appointmentlength++;
      } else if (item.industry === "飲食" && item.status === "アポ取得") {
        industry_B_appointmentlength++;
      } else if (item.industry === "受付" && item.status === "アポ取得") {
        industry_C_appointmentlength++;
      } else if (item.industry === "教育" && item.status === "アポ取得") {
        industry_D_appointmentlength++;
      } else if (item.industry === "軽作業" && item.status === "アポ取得") {
        industry_E_appointmentlength++;
      } else if (item.industry === "警備" && item.status === "アポ取得") {
        industry_F_appointmentlength++;
      } else if (item.industry === "清掃" && item.status === "アポ取得") {
        industry_G_appointmentlength++;
      } else if (item.industry === "ドライバー" && item.status === "アポ取得") {
        industry_H_appointmentlength++;
      } else if (item.industry === "販売" && item.status === "アポ取得") {
        industry_I_appointmentlength++;
      }
    });

    //アポ取得率を少数第一位までの表記に変換
    const notationRate = (aplength, total) => {
      return Math.floor((aplength / total) * 100 * 10) / 10;
    };

    //グラフ表示用の業種ごとデータ(リスト数・アポ取得数・アポ取得率)を配列で用意
    const data = [
      {
        name: "全体",
        リスト数: this.props.charger.length,
        アポ取得数: this.props.appointmentLength,
        アポ取得率: notationRate(
          this.props.appointmentLength,
          this.props.charger.length
        ),
      },
      {
        name: "イベント",
        リスト数: this.props.industry_A_Length,
        アポ取得数: industry_A_appointmentlength,
        アポ取得率: notationRate(
          industry_A_appointmentlength,
          this.props.industry_A_Length
        ),
      },
      {
        name: "飲食",
        リスト数: this.props.industry_B_Length,
        アポ取得数: industry_B_appointmentlength,
        アポ取得率: notationRate(
          industry_B_appointmentlength,
          this.props.industry_B_Length
        ),
      },
      {
        name: "受付",
        リスト数: this.props.industry_C_Length,
        アポ取得数: industry_C_appointmentlength,
        アポ取得率: notationRate(
          industry_C_appointmentlength,
          this.props.industry_C_Length
        ),
      },
      {
        name: "教育",
        リスト数: this.props.industry_D_Length,
        アポ取得数: industry_D_appointmentlength,
        アポ取得率: notationRate(
          industry_D_appointmentlength,
          this.props.industry_D_Length
        ),
      },
      {
        name: "軽作業",
        リスト数: this.props.industry_E_Length,
        アポ取得数: industry_E_appointmentlength,
        アポ取得率: notationRate(
          industry_E_appointmentlength,
          this.props.industry_E_Length
        ),
      },
      {
        name: "警備",
        リスト数: this.props.industry_F_Length,
        アポ取得数: industry_F_appointmentlength,
        アポ取得率: notationRate(
          industry_F_appointmentlength,
          this.props.industry_F_Length
        ),
      },
      {
        name: "清掃",
        リスト数: this.props.industry_G_Length,
        アポ取得数: industry_G_appointmentlength,
        アポ取得率: notationRate(
          industry_G_appointmentlength,
          this.props.industry_G_Length
        ),
      },
      {
        name: "ドライバー",
        リスト数: this.props.industry_H_Length,
        アポ取得数: industry_H_appointmentlength,
        アポ取得率: notationRate(
          industry_H_appointmentlength,
          this.props.industry_H_Length
        ),
      },
      {
        name: "販売",
        リスト数: this.props.industry_I_Length,
        アポ取得数: industry_I_appointmentlength,
        アポ取得率: notationRate(
          industry_I_appointmentlength,
          this.props.industry_I_Length
        ),
      },
    ];

    //レーダーチャート用に全データ(配列)から「全体」を除外
    const data2 = data.filter((item) => item.name !== "全体");

    return (
      <div>
        <ComposedChart width={730} height={250} data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip /> 
          <Legend />
          <CartesianGrid stroke="#f5f5f5" />
          <Bar dataKey="リスト数" barSize={20} fill="#003366" />
          <Bar dataKey="アポ取得数" barSize={20} fill="#ff4500" />
          <Line type="monotone" dataKey="アポ取得率" stroke="#33CC33" unit="%" />
        </ComposedChart>

        <RadarChart outerRadius={90} width={730} height={250} data={data2}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, "dataMax"]} />
          <Radar
            name="アポ取得数"
            dataKey="アポ取得数"
            stroke="#ff4500"
            fill="#ff4500"
            fillOpacity={0.6}
          />
          <Tooltip />
          <Legend />
        </RadarChart>
      </div>
    );
  }
}
export default IndustryChart;
