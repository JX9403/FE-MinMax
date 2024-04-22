import {
  Card,
  Space,
  Typography,
  DatePicker,
  Statistic,
  Flex,
  Menu,
  Select,
  Input,
  Button,
  Table,
  Form,
} from "antd";
import React, { useState } from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
// import {CategoryScale} from 'chart.js';
const { RangePicker } = DatePicker;

export default function Provider() {
  const [formAdd, setFormAdd] = useState(false);
  const [formEdit, setFormEdit] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const addAction = () => {
    setFormAdd(!formAdd);
  };
  const editAction = () => {
    setFormEdit(!formEdit);
  };
  const deleteAction = () => {
    setConfirmDelete(!confirmDelete);
  };

  const deleteConfirm = () => {};
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Tên nhà cung cấp ",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Số điện thoại ",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Nợ",
      dataIndex: "debt",
      key: "debt",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>
            <FiEdit />
          </a>
          <a>
            <ImBin />
          </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      stt: "1",
      name: "John Brown",
      phone: "ABCD",
      email: 3000000,
      address: "xxx",
      debt: "xxxxxx",
    },
  ];
  return (
    <>
      <div className="general-content">
        {!formAdd && (
          <>
            <Typography className="header-content mb-3">
              QUẢN LÝ NHÀ CUNG CẤP{" "}
            </Typography>
            <Card className="data-statistic mb-3 pb-5">
              <Typography style={{ fontSize: 16, fontWeight: 500 }}>
                Tìm kiếm:{" "}
              </Typography>
              <Space className="my-3 ">
                <Input
                  className="me-4"
                  placeholder="Nhập nhà cung cấp..."
                  style={{ width: 800 }}
                />
                <Button
                  className="me-4"
                  style={{ background: "#5EB600", color: "#fff" }}
                >
                  Tìm kiếm
                </Button>
              </Space>
            </Card>
            <Card className="chart-statistic">
              <Flex justify="space-between">
                <Typography style={{ fontWeight: 500, fontSize: 16 }}>
                  Danh sách nhà cung cấp
                </Typography>
                <button
                  onClick={addAction}
                  style={{ background: "transparent", border: "none" }}
                >
                  <PlusCircleOutlined
                    type="button"
                    style={{ fontSize: 28, color: "#46B91D" }}
                  />
                </button>
              </Flex>
              <Table columns={columns} dataSource={data} />;
            </Card>
          </>
        )}
        {formAdd && (
          <div  className="container-confirm d-flex align-items-center justify-content-center">
            <Card
              className=""
              style={{ background: "#fff", minHeight: 400, width: 400 }}
            >
              <Typography
                className="mb-4"
                style={{ fontWeight: 500, fontSize: 20 }}
              >
                Thêm nhà cung cấp{" "}
              </Typography>
              <Form layout="vertical">
                <Form.Item
                  name={["user", "name"]}
                  label="Tên nhà cung cấp"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item name={["user", "phone"]} label="Số điện thoại">
                  <Input />
                </Form.Item>
                <Form.Item name={["user", "introduction"]} label="Ghi chú">
                  <Input.TextArea />
                </Form.Item>
                <Flex justify="end" horizontal>
                <Form.Item
                >
                  <Button style={{background:'transparent', marginRight:8}} onClick={addAction}>
                    Hủy
                  </Button>
                </Form.Item>
                <Form.Item
                >
                  <Button style={{background:'#AFE970'}} htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
                </Flex>
              </Form>
            </Card>
          </div>
        )}
      </div>
    </>
  );
}
