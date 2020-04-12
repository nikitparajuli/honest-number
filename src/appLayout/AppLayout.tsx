import React from 'react';
import { Layout } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons'

import { AppHeader } from './';

import './AppLayout.scss';

type AppLayoutProps = {};

const { Header, Content, Footer } = Layout;

export const AppLayout: React.FC<AppLayoutProps> = () => {
    return (
        <Layout className="app-viewport">
            <Header className="app-header">
                <AppHeader />
            </Header>
            <Content className="app-content">
                
            </Content>
            <Footer className="app-footer">
                <div style={{color:  'white'}}><FontAwesomeIcon icon={faCopyright}/> 2020 Nikit Parajuli</div>
            </Footer>
        </Layout>
    );
}
