import { Card, Space, Typography, DatePicker, Statistic, Flex,Menu,Select } from "antd";
import React, { useState } from "react";
import "./GeneralM.scss";
import { DollarOutlined, FormOutlined, RiseOutlined } from "@ant-design/icons";
import { CategoryScale, Chart as ChartJS,LinearScale,BarElement} from "chart.js";
import { Bar } from "react-chartjs-2";
// import {CategoryScale} from 'chart.js'; 
const { RangePicker } = DatePicker;

ChartJS.register(CategoryScale,LinearScale,BarElement);
export default function General() {
  const [selectedOption,setselectOption]= useState('month')
const handleChange = (value) => {
  setselectOption(value)
};
  return (
    <div className="general-content">
      <Typography className="header-content">BÁO CÁO TỔNG QUAN</Typography>
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
            title={"Tổng quan doanh thu"}
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
            title={"Số đơn hàng"}
            value={150000000}
          />
          <DashboardCard
            icon={
              <RiseOutlined
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
            title={"Lợi nhuận"}
            value={150000000}
          />
        </Flex>
      </Card>
      <Card className="chart-statistic" >
        <Menu mode="horizontal" style={{width:'100%', overflowX:'auto'}} >
          <Menu.Item style={{width:'50%', textAlign:'center',padding:0,border:0}}
            key="1"
          >
            Thông kê doanh thu
          </Menu.Item>
          <Menu.Item style={{width:'50%', textAlign:'center',padding:0,border:0}}
            key="2"
          >
            Thống kê tăng trưởng 
          </Menu.Item>
        </Menu>
        <Flex className="mb-3" justify="space-between" style={{width: '50%'}}>
          <Typography>Thống kê theo</Typography>
          <Select
      defaultValue="month"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'month',
          label: 'Tháng',
        },
        {
          value: 'day',
          label: 'Ngày',
        },
        {
          value: 'year',
          label: 'Năm',
        },
        
      ]}
    />
          {`Chọn theo ${selectedOption}`}
          <DatePicker picker={selectedOption} />
        </Flex>
        <Card style={{borderColor:'#000'}}>
        <Typography style={{color:'#5EB600',fontSize:16,fontWeight:500}}>BIỂU ĐỒ THỐNG KÊ DOANH THU</Typography>
        <div className="chart">
        <Bar 
        data={{
          labels :["A","B","C"],
          datasets: [
            {
              label:"revenue",
              data: [200,300,400],
            }
          ]
        }}/>
        
        </div>
        </Card>
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
