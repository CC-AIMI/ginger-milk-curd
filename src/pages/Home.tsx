import { Typography, Divider, Card, Tag, Table } from 'antd';
import { InfoCircleOutlined, EnvironmentOutlined, HistoryOutlined } from '@ant-design/icons';

const { Title, Paragraph, Text } = Typography;

export default function Home() {
  const dataSource = [
    { key: '1', label: '中文名', value: '姜汁撞奶' },
    { key: '2', label: '外文名', value: 'Ginger milk curd / Ginger-juice milk' },
    { key: '3', label: '分类', value: '甜品、小吃' },
    { key: '4', label: '发源地', value: '广东省广州市番禺区沙湾镇' },
    { key: '5', label: '主要食材', value: '姜汁，水牛奶，白糖' },
    { key: '6', label: '口味', value: '香甜爽滑，微辛' },
  ];

  const columns = [
    { dataIndex: 'label', key: 'label', className: 'font-semibold text-gray-500 bg-gray-50', width: '35%' },
    { dataIndex: 'value', key: 'value', className: 'text-gray-900' },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* 左侧主要内容区 */}
      <div className="flex-1 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <Typography>
          <Title className="!text-4xl text-gray-900 !mb-8 font-serif">姜汁撞奶</Title>
          <Paragraph className="text-lg leading-relaxed text-gray-700">
            <Text strong className="text-amber-800 text-xl">姜汁撞奶</Text>
            是一种源于中国广东省广州市番禺区沙湾镇的传统中式甜点。它以姜汁和牛奶为主要原料，利用生姜汁中的蛋白酶与牛奶中的蛋白质在中温下发生凝固反应制作而成。口感滑嫩，风味独特，既有姜的辛辣，又有奶的香甜。
          </Paragraph>

          <Divider orientation="left" className="!border-gray-300">
            <span className="flex items-center gap-2 text-2xl font-serif text-gray-800">
              <HistoryOutlined className="text-amber-600" />
              历史渊源
            </span>
          </Divider>
          <Paragraph className="text-base leading-relaxed text-gray-700">
            传说在清朝光绪年间，广州番禺沙湾镇有一位老婆婆患了风寒，咳嗽不止。虽知姜汁可驱寒，但姜汁太辣无法直接饮用。她的媳妇于是将水牛奶加热放入糖，然后倒入装有姜汁的碗中。不久后，神奇的事情发生了，牛奶凝结成了半固体，不仅改善了姜的辣味，还变得入口即化、香甜滑嫩。老婆婆吃后顿觉心身温暖，咳嗽也有所缓解。自此，姜汁撞奶这一美味便在沙湾流传开来。
          </Paragraph>

          <Divider orientation="left" className="!border-gray-300">
            <span className="flex items-center gap-2 text-2xl font-serif text-gray-800">
              <EnvironmentOutlined className="text-amber-600" />
              地理分布
            </span>
          </Divider>
          <Paragraph className="text-base leading-relaxed text-gray-700">
            姜汁撞奶主要流行于广东珠三角地区，特别是广州市番禺区沙湾镇、顺德等地。在香港、澳门等地的甜品店或茶餐厅也十分常见，是广式糖水文化中不可或缺的经典之作。如今，随着粤菜在世界各地的传播，诸多海外华人社区也可品尝到这道传统甜品。
          </Paragraph>
        </Typography>
      </div>

      {/* 右侧信息侧边栏 (Infobox) */}
      <div className="w-full md:w-80 flex-shrink-0">
        <Card 
          className="shadow-sm border-gray-200 sticky top-24"
          styles={{ header: { backgroundColor: '#fdf6e3' }, body: { padding: 0 } }}
          title={<span className="text-lg font-bold text-amber-900">百科名片</span>}
          extra={<InfoCircleOutlined className="text-amber-600" />}
        >
          <div className="p-4 bg-white border-b border-gray-100 text-center">
            {/* 用CSS占位图或者网图 */}
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ginger_milk_curd.jpg/800px-Ginger_milk_curd.jpg" 
              alt="姜汁撞奶" 
              className="max-w-full h-auto rounded-md shadow-sm border border-gray-100 mx-auto"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found' }}
            />
            <div className="text-sm text-gray-500 mt-2">传统手工姜汁撞奶</div>
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
          <div className="p-4 bg-gray-50">
            <div className="flex flex-wrap gap-2">
              <Tag color="orange">传统甜品</Tag>
              <Tag color="gold">广府美食</Tag>
              <Tag color="red">驱寒暖胃</Tag>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}