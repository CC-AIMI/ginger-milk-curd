import { Card, Divider, Table, Tag, Typography } from 'antd';
import {
  EnvironmentOutlined,
  HistoryOutlined,
  InfoCircleOutlined,
  LinkOutlined,
  PictureOutlined,
  ProfileOutlined,
} from '@ant-design/icons';
import { useLanguage } from '../language';

const { Paragraph, Text, Title } = Typography;

const images = {
  hero: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ginger_Milk_Pudding.jpg?width=1400',
  shop: 'https://commons.wikimedia.org/wiki/Special:FilePath/GD_%E5%BB%A3%E6%9D%B1_Guangdong_%E5%BB%A3%E5%B7%9E_Guangzhou_%E7%9F%B3%E5%9F%BA%E6%9D%91_Shijicun_%E5%9F%8E%E4%B8%AD%E6%9D%91_village_tourism_shop_%E5%A5%B6%E5%A8%91%E8%96%91%E6%92%9E%E5%A5%B6_%E9%9B%99%E7%9A%AE%E5%A5%B6_Milk_January_2024_R12S_11.jpg?width=900',
  bowl: 'https://commons.wikimedia.org/wiki/Special:FilePath/GD_%E5%BB%A3%E6%9D%B1_ZS_%E4%B8%AD%E5%B1%B1%E5%B8%82_Zhongshan_%E7%9F%B3%E5%B2%90_ShiQi_District_%E5%AD%AB%E6%96%87%E8%A5%BF%E8%B7%AF%E6%AD%A5%E8%A1%8C%E5%8D%80_SunWen_West_Road_Pedestrian_Zone_shop_%E5%8A%89%E8%A8%98_Liu_Kee_sweet_%E8%96%91%E6%92%9E%E5%A5%B6_Ginger_Milk_Pudding_February_2025_R12S_01.jpg?width=900',
};

export default function Home() {
  const { text } = useLanguage();

  const dataSource = [
    { key: '1', label: text('中文名'), value: text('姜汁撞奶') },
    { key: '2', label: text('繁体字'), value: '薑汁撞奶' },
    { key: '3', label: text('外文名'), value: 'Ginger milk curd / Ginger milk pudding' },
    { key: '4', label: text('分类'), value: text('中式甜点、糕点、小吃') },
    { key: '5', label: text('起源地'), value: text('中国广东广州') },
    { key: '6', label: text('主要食材'), value: text('生姜、牛奶、糖') },
    { key: '7', label: text('相关条目'), value: text('双皮奶、广府甜品、顺德小吃') },
  ];

  const columns = [
    { dataIndex: 'label', key: 'label', className: 'w-[36%] bg-slate-50 !font-semibold !text-slate-600' },
    { dataIndex: 'value', key: 'value', className: '!text-slate-900' },
  ];

  const gallery = [
    { src: images.hero, title: text('姜汁撞奶成品'), source: 'Wikimedia Commons' },
    { src: images.shop, title: text('广州甜品店出品'), source: 'Wikimedia Commons' },
    { src: images.bowl, title: text('传统碗装姜撞奶'), source: 'Wikimedia Commons' },
  ];

  return (
    <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_360px]">
      <main className="min-w-0">
        <section className="overflow-hidden rounded border border-slate-200 bg-white shadow-sm">
          <div className="relative h-[260px] bg-slate-100 md:h-[340px]">
            <img
              src={images.hero}
              alt={text('姜汁撞奶')}
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-6 pb-6 pt-20 text-white">
              <Title className="!mb-2 !text-4xl !font-semibold !text-white md:!text-5xl">{text('姜汁撞奶')}</Title>
              <Paragraph className="!mb-0 max-w-3xl !text-base !leading-7 !text-slate-100">
                {text('以姜汁凝固加糖调味牛奶而制的广东传统甜品，常见于广州、顺德、香港和澳门的甜品店。')}
              </Paragraph>
            </div>
          </div>
          <div className="border-t border-slate-200 bg-white px-6 py-4">
            <div className="flex flex-wrap items-center gap-2">
              <Tag color="blue">{text('维基百科风格')}</Tag>
              <Tag color="cyan">{text('广府甜品')}</Tag>
              <Tag color="gold">{text('饮食文化')}</Tag>
              <a
                href="https://zh.wikipedia.org/wiki/%E8%96%91%E6%B1%81%E6%92%9E%E5%A5%B6"
                target="_blank"
                rel="noreferrer"
                className="ml-auto inline-flex items-center gap-1 text-sm text-sky-700"
              >
                <LinkOutlined />
                {text('维基百科资料来源')}
              </a>
            </div>
          </div>
        </section>

        <section className="mt-7 rounded border border-slate-200 bg-white px-7 py-8 shadow-sm">
          <Typography>
            <Title level={2} className="!mb-2 !text-3xl !font-semibold !text-slate-950">
              {text('概述')}
            </Title>
            <div className="mb-6 h-px bg-slate-200" />
            <Paragraph className="text-[16px] leading-8 text-slate-800">
              <Text strong>{text('姜汁撞奶')}</Text>
              {text('是一种中式甜品，以姜汁凝固加糖调味的牛奶而制。制作姜汁撞奶使用的牛奶以水牛奶为佳，生姜中的凝乳酶与牛奶蛋白质反应后，形成细腻、柔嫩、可用勺子轻轻托起的凝胶结构。')}
            </Paragraph>
            <Paragraph className="text-[16px] leading-8 text-slate-800">
              {text('主流百科网站通常将它列为中国甜食、粤菜和顺德小吃相关条目。它的看点不仅在风味，也在制作过程中的温度控制：牛奶太热会破坏酶活性，太冷则不易凝固。')}
            </Paragraph>

            <div className="mt-8 flex items-center gap-2 border-b border-slate-200 pb-3">
              <HistoryOutlined className="text-xl text-sky-700" />
              <Title level={3} className="!mb-0 !text-2xl !font-medium !text-slate-900">{text('历史渊源')}</Title>
            </div>
            <Paragraph className="mt-4 text-[16px] leading-8 text-slate-800">
              {text('民间说法认为，姜汁撞奶起源于广东珠三角一带，尤其常与广州番禺沙湾、顺德等地的传统奶制甜品文化联系在一起。它从家庭式甜品逐步进入糖水铺和茶餐厅，成为广府饮食文化中识别度很高的一道甜品。')}
            </Paragraph>

            <div className="mt-8 flex items-center gap-2 border-b border-slate-200 pb-3">
              <EnvironmentOutlined className="text-xl text-sky-700" />
              <Title level={3} className="!mb-0 !text-2xl !font-medium !text-slate-900">{text('地理分布')}</Title>
            </div>
            <Paragraph className="mt-4 text-[16px] leading-8 text-slate-800">
              {text('姜汁撞奶主要流行于广东、香港、澳门等粤语地区。随着粤菜和糖水店文化传播，它也常见于海外华人社区的广式甜品店。')}
            </Paragraph>
          </Typography>
        </section>

        <section className="mt-7 rounded border border-slate-200 bg-white px-7 py-8 shadow-sm">
          <div className="mb-5 flex items-center gap-2 border-b border-slate-200 pb-3">
            <PictureOutlined className="text-xl text-sky-700" />
            <Title level={3} className="!mb-0 !text-2xl !font-medium !text-slate-900">{text('相关图像')}</Title>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {gallery.map((item) => (
              <Card
                key={item.src}
                className="overflow-hidden border-slate-200"
                cover={
                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-44 w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                }
                size="small"
              >
                <Text strong className="block !text-slate-900">{item.title}</Text>
                <Text className="!text-xs !text-slate-500">{text('图像来源')}: {item.source}</Text>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <aside className="min-w-0">
        <Card
          className="sticky top-36 border-slate-200 shadow-sm"
          styles={{ header: { backgroundColor: '#f8fafc' }, body: { padding: 0 } }}
          title={<span className="inline-flex items-center gap-2 font-semibold text-slate-900"><InfoCircleOutlined />{text('百科名片')}</span>}
        >
          <div className="border-b border-slate-200 bg-white p-4 text-center">
            <img
              src={images.bowl}
              alt={text('姜汁撞奶')}
              className="mx-auto aspect-[4/3] w-full rounded object-cover"
              referrerPolicy="no-referrer"
            />
            <Text className="mt-2 block !text-sm !text-slate-500">{text('传统手工姜汁撞奶')}</Text>
          </div>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            showHeader={false}
            size="small"
            bordered
            className="[&_.ant-table-cell]:!px-4 [&_.ant-table-cell]:!py-3"
          />
          <div className="bg-slate-50 p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
              <ProfileOutlined />
              {text('资料来源')}
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag color="blue">{text('维基百科')}</Tag>
              <Tag color="cyan">{text('维基共享资源')}</Tag>
              <Tag color="gold">{text('广府甜品')}</Tag>
            </div>
            <Divider className="!my-4" />
            <a
              href="https://commons.wikimedia.org/wiki/Category:Ginger_milk_curd"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-sky-700"
            >
              <LinkOutlined />
              {text('查看维基共享资源图册')}
            </a>
          </div>
        </Card>
      </aside>
    </div>
  );
}
