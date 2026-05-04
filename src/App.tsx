import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router';
import { ConfigProvider, Layout, Menu, Segmented, Typography } from 'antd';
import {
  BookOutlined,
  GlobalOutlined,
  HomeOutlined,
  PieChartOutlined,
  ReadOutlined,
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
      className="flex-1 border-none font-medium text-[15px] bg-transparent min-w-0"
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
      <Header className="sticky top-0 z-20 h-auto bg-white px-0 leading-normal shadow-[0_1px_0_rgba(31,41,55,0.12)]">
        <div className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 text-sm text-slate-600">
            <div className="flex min-w-0 items-center gap-2">
              <GlobalOutlined className="text-sky-700" />
              <Text className="truncate !text-slate-600">{text('饮食文化专题 · 自由的百科全书风格静态页面')}</Text>
            </div>
            <div className="flex shrink-0 items-center gap-2">
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
        </div>
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 lg:flex-row lg:items-end lg:gap-8">
          <Link to="/" className="flex shrink-0 items-center gap-3 text-slate-950 no-underline">
            <div className="flex h-11 w-11 items-center justify-center rounded border border-slate-300 bg-white text-xl text-sky-800 shadow-sm">
              <ReadOutlined />
            </div>
            <div>
              <Title level={3} className="!mb-0 !text-2xl !font-semibold !tracking-normal !text-slate-950">
                {text('姜汁撞奶百科')}
              </Title>
              <Text className="!text-xs !text-slate-500">Ginger milk curd reference</Text>
            </div>
          </Link>
          <NavigationMenu />
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
      <Footer className="border-t border-slate-200 bg-white text-center text-slate-500">
        {text('姜汁撞奶百科')} ©{new Date().getFullYear()} React 19 · Vite 8 · Ant Design 6
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