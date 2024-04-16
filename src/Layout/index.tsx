import React from "react";
import * as S from "./styled";
import Header from "./Header";
import Footer from "./Footer";
import { Content } from "antd/es/layout/layout";

interface LayoutProps {
  children: React.ReactNode; // Layout 컴포넌트의 자식으로 받을 수 있는 컴포넌트 타입 정의
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S._Layout>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </S._Layout>
  );
};

export default Layout;
