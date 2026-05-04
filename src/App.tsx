import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';
import { ConfigProvider, Layout, Menu, Segmented, Typography } from 'antd';
import {
  BookOutlined,
  CoffeeOutlined,
  HomeOutlined,
  PieChartOutlined,
  TranslationOutlined,
} from '@ant-design/icons';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Nutrition from './pages/Nutrition';
import { LanguageProvider, useLanguage, type Language } from './language';

const { Header, Content, Footer } = Layout;
const { Text, Title } = Typography;

function NavigationMenu() {
  const location = useLocation();
  const { text } = useLanguage();
  const selectedKey = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  return (
    <Menu
      mode="horizontal"
      selectedKeys={[selectedKey]}
      className="site-nav-menu min-w-0 border-none bg-transparent text-[15px] font-medium"
      items={[
        { key: 'home', icon: <HomeOutlined />, label: <Link to="/">{text('百科概述')}</Link> },
        { key: 'recipe', icon: <BookOutlined />, label: <Link to="/recipe">{text('制作工艺')}</Link> },
        { key: 'nutrition', icon: <PieChartOutlined />, label: <Link to="/nutrition">{text('营养价值')}</Link> },
      ]}
    />
  );
}

function AppShell() {
  const { language, setLanguage, text } = useLanguage();

  return (
    <Layout className="min-h-screen bg-[#f8f9fa]">
      <Header
        className="sticky top-0 z-20 h-auto border-b border-slate-200 !bg-white px-0 leading-normal shadow-[0_4px_18px_rgba(15,23,42,0.10)]"
        style={{ background: '#ffffff' }}
      >
        <div className="mx-auto flex min-h-16 max-w-7xl flex-col gap-3 bg-white px-5 py-3 sm:flex-row sm:items-center sm:gap-5 lg:gap-7">
          <Link to="/" className="flex shrink-0 items-center gap-3 text-slate-950 no-underline">
            <div className="flex h-10 w-10 items-center justify-center rounded-md border border-sky-100 bg-sky-50 text-xl text-sky-700 shadow-sm">
              <CoffeeOutlined />
            </div>
            <div className="min-w-0">
              <Title level={3} className="!mb-0 !text-[22px] !font-semibold !tracking-normal !text-slate-950">
                {text('姜汁撞奶百科')}
              </Title>
            </div>
          </Link>
          <NavigationMenu />
          <div className="flex shrink-0 items-center gap-2 self-start sm:self-auto sm:ml-auto lg:ml-0">
            <TranslationOutlined className="text-slate-500" />
            <Segmented
              size="small"
              value={language}
              onChange={(value) => setLanguage(value as Language)}
              options={[
                { label: '简体', value: 'zh-CN' },
                { label: '繁體', value: 'zh-HK' },
              ]}
            />
          </div>
        </div>
      </Header>
      <Content className="w-full bg-[#f8f9fa] pb-16">
        <div className="mx-auto max-w-7xl px-5 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/nutrition" element={<Nutrition />} />
          </Routes>
        </div>
      </Content>
      <Footer className="border-t border-slate-200 bg-white text-center text-slate-500 shadow-[0_-1px_0_rgba(15,23,42,0.04)]">
        <div className="flex flex-col items-center justify-center gap-1 text-sm">
          <Text className="!text-slate-600">{text('饮食文化专题 · 自由的百科全书风格静态页面')}</Text>
          <Text className="!text-xs !text-slate-500">
             ©{new Date().getFullYear()}{text('姜汁撞奶百科')}
          </Text>
        </div>
      </Footer>
    </Layout>
  );
}

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2563eb',
          borderRadius: 6,
          fontFamily: 'Arial, "Noto Sans SC", "Microsoft YaHei", sans-serif',
        },
      }}
    >
      <LanguageProvider>
        <BrowserRouter basename="/ginger-milk-curd">
          <AppShell />
        </BrowserRouter>
      </LanguageProvider>
    </ConfigProvider>
  );
}

export default App;