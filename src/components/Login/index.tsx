import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React from 'react'
interface IProps {
    onLogin(loginId: string, loginPwd: string): void
}
 const NormalLoginForm = ({onLogin}: IProps) => {
    const onFinish = (values: any) => {
        const { loginId, loginPwd } = values
        onLogin(loginId, loginPwd)
    };

    return (
        <div id="login-form">
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="loginId"
                    rules={[{ required: true, message: '请输入你的帐号!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                </Form.Item>
                <Form.Item
                    name="loginPwd"
                    rules={[{ required: true, message: '请输入你的密码!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="密码"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>记住我</Checkbox>
                    </Form.Item>

                    <a className="login-form-forgot" href="">
                        忘记密码
        </a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
        </Button>
                    Or <a href="">去注册!</a>
                </Form.Item>
            </Form>
        </div>


    );
};
export default NormalLoginForm