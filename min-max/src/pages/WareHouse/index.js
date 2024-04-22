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
import { PlusCircleOutlined, LeftOutlined } from "@ant-design/icons";
import { ImBin } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import "./WareHouse.scss";
// import {CategoryScale} from 'chart.js';
const { RangePicker } = DatePicker;

export default function WareHouse() {
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
      title: "Mã phiếu ",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Đơn giá ",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Thời gian nhập hàng",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Nhân viên bàn giao",
      dataIndex: "receiver",
      key: "receiver",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
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
      id: "ABCD",
      value: 3000000,
      date: "xxx",
      receiver: "New York No. 1 Lake Park",
      status: "Đã xác nhận",
    },
  ];
  return (
    <>
      <div className="general-content">
        {!formAdd && !formEdit  && (
          <div>
            <Typography className="header-content mb-3">
              QUẢN LÝ NHẬP KHO
            </Typography>
            <Card className="data-statistic mb-3">
              <Typography className="mb-2">Thời gian:</Typography>
              <Space>
                <RangePicker
                  placeholder={"Ngày"}
                  style={{ borderColor: "#A4A4A4" }}
                  className="mb-3"
                />
              </Space>
              <Space className="mb-3">
                <Input
                  className="me-4"
                  placeholder="Nhập mã phiếu..."
                  style={{ width: 600 }}
                />
                <Button
                  className="me-4"
                  style={{ background: "#5EB600", color: "#fff" }}
                >
                  Tìm kiếm
                </Button>
                <Select
                  className="me-4"
                  placeholder="Trạng thái"
                  style={{
                    width: 200,
                  }}
                  options={[
                    {
                      value: "month",
                      label: "Đang kiểm",
                    },
                    {
                      value: "day",
                      label: "Đã xác nhận ",
                    },
                  ]}
                />
              </Space>
            </Card>
            <Card className="chart-statistic">
              <Flex justify="space-between">
                <Typography style={{ fontWeight: 500, fontSize: 16 }}>
                  Danh sách phiếu nhập kho
                </Typography>
                <button
                  style={{ border: "none", background: "transparent" }}
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
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Mã phiếu ",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Đơn giá ",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Thời gian nhập hàng",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Nhân viên bàn giao",
      dataIndex: "receiver",
      key: "receiver",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle" >
          <a>
            <ImBin />
          </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      stt: "John Brown",
      id: "ABCD",
      value: 3000000,
      date: "xxx",
      receiver: "New York No. 1 Lake Park",
      status: "Đã xác nhận",
    },
  ];
  return (
    <div>
      <button
        onClick={onClose}
        style={{ background: "transparent", border: "none" }}
      >
        <LeftOutlined /> Quản lý nhập kho
      </button>
      <Space
        style={{ width: "100%", justifyContent: "center", marginBottom: 20 }}
      >
        <Typography
          style={{ fontSize: 24, fontWeight: 600 }}
          className="text-center"
        >
          Tạo phiếu nhập kho
        </Typography>
      </Space>
      <Flex justify="space-between" className="mb-3">
        <Card style={{ width: "70%", borderColor: "#A4A4A4" }}>
          <Typography className="mb-2">Nhà cung cấp</Typography>
          <Select
            defaultValue="NCC"
            style={{
              width: "100%",
              marginBottom:12,
            }}
            options={[
              {
                value: "month",
                label: "Tháng",
              },
              {
                value: "day",
                label: "Ngày",
              },
            ]}
          />
          <Form>
            <Form.Item label="Tên nhà cung cấp">
              <Input placeholder="Tên nhà cung cấp" />
            </Form.Item>
            <Form.Item label="Số điện thoại">
              <Input placeholder="Số điện thoại" />
            </Form.Item>
            <Form.Item label="Địa chỉ">
              <Input placeholder="Địa chỉ" />
            </Form.Item>
          </Form>
        </Card>
        <Card
          style={{ width: "calc(30% - 20px)", borderColor: "#A4A4A4" }}
        >
          <Form.Item label="Nhân viên ">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Ngày giao">
          <DatePicker style={{width:'100%'}} />
        </Form.Item>
        <Form.Item label="Trạng thái ">
          <Select>
            <Select.Option value="Đang kiểm">Demo</Select.Option>
          </Select>
        </Form.Item>
        </Card>
      </Flex>
      <Flex justify="space-between">
        <Card style={{ width: "70%", borderColor: "#A4A4A4" }}>
        <Flex justify="space-between">
                <Typography style={{ fontWeight: 500, fontSize: 16 }}>
                  Danh sách sản phẩm
                </Typography>
                <button
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
        <Card
          style={{ width: "calc(30% - 20px)", borderColor: "#A4A4A4" }}
        >
          <div>
            <Typography style={{fontSize:18,fontWeight:500, marginBottom:20}}>Tổng tiền: </Typography>
          </div>
          <div> 
            <Typography style={{fontSize:18,fontWeight:500, marginBottom:20}}>Cần thanh toán: </Typography>
          </div>
          <div> 
            <Typography style={{fontSize:18,fontWeight:500}}>Thanh toán cho nhà cung cấp: </Typography>
            <Input style={{marginBottom:12}} placeholder="" />
          </div>
          <div> 
            <Typography style={{fontSize:18,fontWeight:500, marginBottom:20}}>Còn nợ </Typography>
          </div>
          <div> 
            <Typography style={{fontSize:18,fontWeight:500, marginBottom:20}}>Ghi chú: </Typography>
            <Input.TextArea />
          </div>
          <div className="text-center">
          <Button style={{background :'#AFE970',marginTop:20}} htmlType="submit">
            Tạo phiếu
          </Button>
          </div>
        </Card>
      </Flex>
    </div>
  );
}
function FormEdit({ onClose }) {
  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Mã phiếu ",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Đơn giá ",
      dataIndex: "value",
      key: "value",
    },
    {
      title: "Thời gian nhập hàng",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Nhân viên bàn giao",
      dataIndex: "receiver",
      key: "receiver",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_, record) => (
        <Space size="middle" >
          <a>
            <ImBin />
          </a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      stt: "John Brown",
      id: "ABCD",
      value: 3000000,
      date: "xxx",
      receiver: "New York No. 1 Lake Park",
      status: "Đã xác nhận",
    },
  ];
  return (
    <div>
      <button
        onClick={onClose}
        style={{ background: "transparent", border: "none" }}
      >
        <LeftOutlined /> Danh sách phiếu nhập kho
      </button>
      <Space
        style={{ width: "100%", justifyContent: "center", marginBottom: 20 }}
      >
        <Typography
          style={{ fontSize: 24, fontWeight: 600 }}
          className="text-center"
        >
          Chỉnh sửa phiếu nhập kho
        </Typography>
        <Typography></Typography>
      </Space>
      <Flex justify="space-between" className="mb-3">
        <Card style={{ width: "70%", borderColor: "#A4A4A4" }}>
          <Typography className="mb-2">Nhà cung cấp</Typography>
          <Select
            defaultValue="NCC"
            style={{
              width: "100%",
              marginBottom:12,
            }}
            options={[
              {
                value: "month",
                label: "Tháng",
              },
              {
                value: "day",
                label: "Ngày",
              },
            ]}
          />
          <Form>
            <Form.Item label="Tên nhà cung cấp">
              <Input placeholder="Tên nhà cung cấp" />
            </Form.Item>
            <Form.Item label="Số điện thoại">
              <Input placeholder="Số điện thoại" />
            </Form.Item>
            <Form.Item label="Địa chỉ">
              <Input placeholder="Địa chỉ" />
            </Form.Item>
          </Form>
        </Card>
        <Card
          style={{ width: "calc(30% - 20px)", borderColor: "#A4A4A4" }}
        >
          <Form.Item label="Nhân viên ">
          <Select>
            <Select.Option value="demo">Demo</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Ngày giao">
          <DatePicker style={{width:'100%'}} />
        </Form.Item>
        <Form.Item label="Trạng thái ">
          <Select>
            <Select.Option value="Đang kiểm">Demo</Select.Option>
          </Select>
        </Form.Item>
        </Card>
      </Flex>
      <Flex justify="space-between">
        <Card style={{ width: "70%", borderColor: "#A4A4A4" }}>
        <Flex justify="space-between">
                <Typography style={{ fontWeight: 500, fontSize: 16 }}>
                  Danh sách sản phẩm
                </Typography>
                <button
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
        <Card
          style={{ width: "calc(30% - 20px)", borderColor: "#A4A4A4" }}
        >
          <div>
            <Typography style={{fontSize:18,fontWeight:500, marginBottom:20}}>Tổng tiền: </Typography>
          </div>
          <div> 
            <Typography style={{fontSize:18,fontWeight:500, marginBottom:20}}>Cần thanh toán: </Typography>
          </div>
          <div> 
            <Typography style={{fontSize:18,fontWeight:500}}>Thanh toán cho nhà cung cấp: </Typography>
            <Input style={{marginBottom:12}} placeholder="" />
          </div>
          <div> 
            <Typography style={{fontSize:18,fontWeight:500, marginBottom:20}}>Còn nợ </Typography>
          </div>
          <div> 
            <Typography style={{fontSize:18,fontWeight:500, marginBottom:20}}>Ghi chú: </Typography>
            <Input.TextArea />
          </div>
          <div className="text-center">
          <Button style={{background :'#AFE970',marginTop:20}} htmlType="submit">
            Tạo phiếu
          </Button>
          </div>
        </Card>
      </Flex>
    </div>
  );
}