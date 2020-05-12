import React, { ReactElement } from 'react'
import "./index.less"
import { Layout, Menu } from 'antd';
import MeanList from "@/components/Menu"
import HeaderComp from "../components/Header"
const { Header, Footer, Sider, Content } = Layout;



const layout: React.FC<any> = (props) => {
    if(props.location.pathname=="/login"){
        return props.children
    }else{
        return (
            <div className="layout">
                <Layout>
                    <Header className="header"><HeaderComp></HeaderComp></Header>
                    <Layout>
                        <Sider><MeanList></MeanList></Sider>
                        <Content>{props.children}</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
    
            </div>
        )
    }
   
} 
export default layout