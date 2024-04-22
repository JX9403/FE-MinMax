import { Card, Space, Typography, DatePicker, Statistic, Flex,Menu,Select,Table } from "antd";
import React, { useState } from "react";
import { DollarOutlined, FormOutlined, RiseOutlined,MinusOutlined } from "@ant-design/icons";
import { CategoryScale, Chart as ChartJS,LinearScale,BarElement} from "chart.js";
import { Bar } from "react-chartjs-2";
// import {CategoryScale} from 'chart.js'; 
const { RangePicker } = DatePicker;

ChartJS.register(CategoryScale,LinearScale,BarElement);
export default function Statistic2() {
  const [selectedOption,setselectOption]= useState('month')
const handleChange = (value) => {
  setselectOption(value)
};
const columns = [
  {
    title: "STT",
    dataIndex: "stt",
    key: "stt",
  },
  {
    title: "Mã phiếu nhập kho",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Chi phí",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Còn nợ",
    dataIndex: "debt",
    key: "debt",
  },
  {
    title: "Thao tác",
    key: "action",
    
  },
];
const data = [
  {
    key: "1",
    stt: "1",
    id: '#sdfasdf',
    price: "5000000",
    debt: "200000",
  },
];
  return (
    <div className="general-content">
      <Typography className="header-content">BÁO CÁO NHẬP HÀNG</Typography>
      <Card className="data-statistic mb-3">
        <Typography className="mb-2">Thời gian:</Typography>
        <Space>
          <RangePicker
            placeholder={"Ngày"}
            style={{ borderColor: "#A4A4A4" }}
            className="mb-3"
          />
        </Space>
        <Flex justify="space-between">
          <BigDashboardCard
            icon={
              <DollarOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 100,
                  fontSize: 24,
                  padding: 16,
                  marginRight: 8,
                }}
              />
            }
            title={"Tiền nhập kho"}
            value={150000000}
          />
          <DashboardCard
            icon={
              <FormOutlined
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 10000,
                  fontSize: 24,
                  padding: 16,
                  marginRight: 8,
                }}
              />
            }
            title={"Số phiếu nhập kho"}
            value={150000000}
          />
          <DashboardCard
            icon={
              <MinusOutlined 
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 1000,
                  fontSize: 28,
                  padding: 16,
                  marginRight: 8,
                }}
              />
            }
            title={"Tiền còn nợ"}
            value={150000000}
          />
        </Flex>
      </Card>
      <Card className="chart-statistic" >
      <Table columns={columns} dataSource={data} />;
      </Card>
    </div>
  );
}

function BigDashboardCard({ title, value, icon }) {
  return (
    <>
      <Card style={{ borderColor: "#000000", width: '38%' }}>
        <Space>
          {icon}
          <Statistic title={title} value={value} suffix="VNĐ"></Statistic>
        </Space>
      </Card>
    </>
  );
}

function DashboardCard({ title, value, icon }) {
  return (
    <>
      <Card style={{ borderColor: "#000000", width: '27%' }}>
        <Space>
          {icon}
          <Statistic title={title} value={value} suffix="VNĐ"></Statistic>
        </Space>
      </Card>
    </>
  );
}
