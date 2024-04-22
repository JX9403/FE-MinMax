import {
  Card,
  Space,
  Typography,
  DatePicker,
  Table,
  Button,
  Input,
  Select,
  Flex,
  Divider,
  Form,
  Upload,
} from "antd";
import React, { useState } from "react";
import "./ProductM.scss";
import {
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  BarElement,
} from "chart.js";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import {
  PlusCircleOutlined,
  PlusOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { Container } from "react-bootstrap";
// import {CategoryScale} from 'chart.js';
const { RangePicker } = DatePicker;

ChartJS.register(CategoryScale, LinearScale, BarElement);

// import { Bar } from 'react-chartjs-2'
export default function ProductM() {
  const [formAdd, setFormAdd] = useState(false);
  const [formEdit, setFormEdit] = useState(false);
  const [confirmDelete,setConfirmDelete]=useState(false)
  const addAction = () => {
    
    setFormAdd(!formAdd);}
  const editAction = () => {
    
    setFormEdit(!formEdit);
  };
  const deleteAction = () => {
    
    setConfirmDelete(!confirmDelete);
  };

  const deleteConfirm =() => {

  }
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phân loại",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Giá bán",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <FiEdit onClick={editAction} />
          </a>
          <a>
            <ImBin onClick={deleteAction} />
          </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      stt: "John Brown",
      name: 32,
      category: "New York No. 1 Lake Park",
      price: "200000",
    },
  ];
  const [selectedOption, setselectOption] = useState("month");
  const handleChange = (value) => {
    setselectOption(value);
  };

 
  return (
    <>
      <div className="general-content">
        {!formAdd && !formEdit && (
          <div>
            <Typography className="header-content mb-3">SẢN PHẨM</Typography>
            <Card className="data-statistic mb-3">
              <Typography className="mb-2" style={{ fontSize: 16 }}>
                Lọc và tìm kiếm:
              </Typography>
              <Space className="mb-3">
                <Input
                  placeholder="Nhập tên sản phẩm..."
                  style={{ width: 800 }}
                />
                <Button style={{ background: "#5EB600", color: "#fff" }}>
                  Tìm kiếm
                </Button>
              </Space>
              <Select
                placeholder="Nhóm sản phẩm"
                style={{
                  width: 400,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "month",
                    label: "Tháng",
                  },
                  {
                    value: "day",
                    label: "Ngày",
                  },
                  {
                    value: "year",
                    label: "Năm",
                  },
                ]}
              />
            </Card>
            <Card className="chart-statistic">
              <Flex justify="space-between">
                <Typography style={{ fontWeight: 500, fontSize: 16 }}>
                  Danh sách sản phẩm
                </Typography>
                <button
                  style={{ background: "transparent", border: "none" }}
                  onClick={addAction}
                >
                  <PlusCircleOutlined
                    type="button"
                    style={{ fontSize: 28, color: "#46B91D" }}
                  />
                </button>
              </Flex>
              <Table columns={columns} dataSource={data} />;
            </Card>
          </div>
        )}
        {formAdd && !formEdit && <FormAdd onClose={addAction} />}
        {formEdit && !formAdd && <FormEdit onClose={editAction} />}
        {confirmDelete && (
        <div className="container-confirm d-flex align-items-center justify-content-center">
          <Card className="frmConfirm text-center" style={{background:'#fff', width:400,height:200}}>
            <Typography className="mb-4" style={{fontWeight:500}}>Xác nhận xóa</Typography>
            <Flex >
              <Button className="me-4" onClick={deleteAction}>Hủy</Button>
              <Button style={{background :'#AFE970'}} onClick={deleteConfirm}>
              Xác nhận
          </Button>
            </Flex>
          </Card>
        </div>
        )}
      </div>
    </>
  );
}




function FormAdd({ onClose }) {
  return (
    <div className="px-5">
      <Flex justify="space-between">
        <Typography style={{ fontSize: 16, fontWeight: 500 }}>
          Thêm mới sản phẩm
        </Typography>
        <CloseOutlined style={{ fontSize: 24 }} onClick={onClose} />
      </Flex>
      <Divider />
      <Form
        layout="vertical"
        name="addForm"
        // onFinish={onFinish}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="productName"
          rules={[
            {
              required: true,
              message: "Hãy nhập tên sản phẩm",
            },
          ]}
        >
          <Input placeholder="Tên sản phẩm" />
        </Form.Item>
        <Form.Item
          label="Giá sản phẩm"
          name="productPrice"
          rules={[
            {
              required: true,
              message: "Nhập giá sản phẩm",
            },
          ]}
        >
          <Input placeholder="Giá sản phẩm" />
        </Form.Item>
        <Form.Item label="Nhóm sản phẩm">
          <Select defaultValue="Nhóm sản phảm">
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label=" ">
          <Button style={{background :'#AFE970'}} htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

function FormEdit({ onClose }) {
  return (
    <div className="px-5">
      <Flex justify="space-between">
        <Typography style={{ fontSize: 16, fontWeight: 500 }}>
          Sửa thông tin sản phẩm
        </Typography>
        <CloseOutlined style={{ fontSize: 24 }} onClick={onClose} />
      </Flex>
      <Divider />
      <Form
        layout="vertical"
        name="addForm"
        // onFinish={onFinish}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="productName"
          
        >
          <Input placeholder="Tên sản phẩm" />
        </Form.Item>
        <Form.Item
          label="Giá sản phẩm"
          name="productPrice"
          
        >
          <Input placeholder="Giá sản phẩm" />
        </Form.Item>
        <Form.Item label="Nhóm sản phẩm">
          <Select defaultValue="Nhóm sản phảm">
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
            <button
              style={{
                border: 0,
                background: "none",
              }}
              type="button"
            >
              <PlusOutlined />
              <div
                style={{
                  marginTop: 8,
                }}
              >
                Upload
              </div>
            </button>
          </Upload>
        </Form.Item>
        <Form.Item label=" ">
          <Button style={{background :'#AFE970'}} htmlType="submit">
            Lưu
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
