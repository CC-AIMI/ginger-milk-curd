import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';
import { Layout, Menu, Typography } from 'antd';
import { HomeOutlined, BookOutlined, PieChartOutlined } from '@ant-design/icons';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Nutrition from './pages/Nutrition';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function NavigationMenu() {
  const location = useLocation();
  const selectedKey = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[selectedKey]}
      className="flex-1 border-none font-medium text-base ml-8"
      items={[
        { key: 'home', icon: <HomeOutlined />, label: <Link to="/">百科概述</Link> },
        { key: 'recipe', icon: <BookOutlined />, label: <Link to="/recipe">制作工艺</Link> },
        { key: 'nutrition', icon: <PieChartOutlined />, label: <Link to="/nutrition">营养价值</Link> },
      ]}
    />
  );
}

function App() {
  return (
    <BrowserRouter basename="/ginger-milk-curd">
      <Layout className="min-h-screen">
        <Header className="bg-white flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] z-10 sticky top-0 px-8">
          <Title level={4} className="!mb-0 text-amber-800 font-bold flex items-center gap-2">
            姜汁撞奶百科
          </Title>
          <NavigationMenu />
        </Header>
        <Content className="bg-orange-50/40 w-full mb-0 pb-16">
          <div className="max-w-6xl mx-auto pt-8 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/recipe" element={<Recipe />} />
              <Route path="/nutrition" element={<Nutrition />} />
            </Routes>
          </div>
        </Content>
        <Footer className="text-center bg-white border-t border-gray-100 text-gray-500">
          姜汁撞奶百科 ©{new Date().getFullYear()} Created with React 19, Vite, Tailwind v4 & Ant Design 6
        </Footer>
      </Layout>
    </BrowserRouter>
  );
}

export default App;