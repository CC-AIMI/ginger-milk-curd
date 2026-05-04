import { Typography, Row, Col, Card, Statistic, Divider } from 'antd';
import { HeartOutlined, MedicineBoxOutlined } from '@ant-design/icons';
import ReactECharts from 'echarts-for-react';
import { useLanguage } from '../language';

const { Title, Paragraph, Text } = Typography;

export default function Nutrition() {
  const { text } = useLanguage();

  const pieOption = {
    title: {
      text: text('主要宏量营养素占比 (每100g估计)'),
      left: 'center',
      textStyle: { fontFamily: 'serif', fontSize: 16 }
    },
    tooltip: { trigger: 'item', formatter: '{a} <br/>{b}: {c}g ({d}%)' },
    legend: { bottom: 0, left: 'center' },
    color: ['#fcd34d', '#fbbf24', '#f59e0b', '#FFF3E0'],
    series: [
      {
        name: text('营养成分'),
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 8,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: { show: false, position: 'center' },
        emphasis: {
          label: { show: true, fontSize: 18, fontWeight: 'bold' }
        },
        labelLine: { show: false },
        data: [
          { value: 4.5, name: text('蛋白质') },
          { value: 5.0, name: text('脂肪') },
          { value: 12.0, name: text('碳水化合物 (含添加糖)') },
          { value: 78.5, name: text('水分及其他') }
        ]
      }
    ]
  };

  const radarOption = {
    title: {
      text: text('微量元素及健康指数'),
      left: 'center',
      textStyle: { fontFamily: 'serif', fontSize: 16 }
    },
    radar: {
      indicator: [
        { name: text('钙 (Calcium)'), max: 150 },
        { name: text('驱寒指数 (姜辣素)'), max: 100 },
        { name: text('促消化酶'), max: 100 },
        { name: text('维生素 (Vit B族)'), max: 100 },
        { name: text('热量 (Calories)'), max: 200 }
      ],
      axisName: { color: '#78350f' },
      splitArea: {
        areaStyle: { color: ['#FFF8E1', '#FFECB3', '#FFE082', '#FFD54F', '#FFCA28'].reverse() }
      }
    },
    series: [
      {
        name: text('姜汁撞奶指数'),
        type: 'radar',
        data: [
          {
            value: [120, 85, 90, 60, 140],
            name: text('综合评估'),
            itemStyle: { color: '#d97706' },
            areaStyle: { color: 'rgba(217, 119, 6, 0.4)' }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <Typography>
        <Title className="!text-3xl text-gray-900 !mb-8 font-serif border-b pb-4">
          <HeartOutlined className="text-amber-600 mr-3" />
          {text('健康与营养价值')}
        </Title>

        <Paragraph className="text-lg leading-relaxed text-gray-700 mb-8">
          {text('姜汁撞奶不仅以其独特的口感闻名，同时也拥有较高的营养价值与食疗功效。')}<Text strong>{text('姜')}</Text>{text('与')}<Text strong>{text('奶')}</Text>{text('的结合，使得两者在寒热属性上互相调和，达到了温补而不燥、润肺而不寒的养生平衡。')}
        </Paragraph>

        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <Card title={text('中医食疗观点')} variant="outlined" className="h-full border-orange-100" styles={{ header: { backgroundColor: '#fff7ed' } }}>
              <div className="flex items-start gap-4 mb-4">
                <MedicineBoxOutlined className="text-3xl text-orange-500 mt-1" />
                <div>
                  <Title level={5} className="!mb-1 text-orange-900">{text('散寒暖胃')}</Title>
                  <Paragraph className="text-gray-600 text-sm">{text('生姜性温，含有姜辣素和挥发油，能够促进血液循环，驱散体内寒气，缓解胃寒、胃痛及风寒感冒引起的轻微不适。')}</Paragraph>
                </div>
              </div>
              <Divider className="my-2" />
              <div className="flex items-start gap-4 mb-4 mt-4">
                <MedicineBoxOutlined className="text-3xl text-orange-500 mt-1" />
                <div>
                  <Title level={5} className="!mb-1 text-orange-900">{text('滋阴养颜')}</Title>
                  <Paragraph className="text-gray-600 text-sm">{text('水牛奶/全脂牛奶富含优质蛋白与乳脂，中医认为牛奶性平、微寒，能补虚损，益肺胃，生津润肠。与生姜结合正好中和。')}</Paragraph>
                </div>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} md={12}>
            <Card title={text('现代营养学成分')} variant="outlined" className="h-full border-blue-100" styles={{ header: { backgroundColor: '#f0f9ff' } }}>
              <Row gutter={16}>
                <Col span={12}>
                  <Statistic title={text('优质蛋白质 (g/100g)')} value={4.5} precision={1} styles={{ content: { color: '#0369a1' } }} />
                </Col>
                <Col span={12}>
                  <Statistic title={text('乳钙 (mg/100g)')} value={120} styles={{ content: { color: '#0369a1' } }} />
                </Col>
                <Col span={24} className="mt-4">
                  <Paragraph className="text-gray-600 text-sm">
                    {text('水牛奶的乳脂率和蛋白质含量一般高于普通黑白花牛。它提供比普通牛奶更多的必须氨基酸、维生素A和高吸收率的钙质。此外，生姜蛋白酶在进入胃部前，已部分预先“消化”了酪蛋白，对乳糖不耐受及肠胃虚弱者更加友好。')}
                  </Paragraph>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        <Divider dashed className="my-12 ml-auto mr-auto w-1/2" />

        <Row gutter={[32, 32]}>
          <Col xs={24} lg={12}>
            <ReactECharts option={pieOption} style={{ height: '350px' }} />
          </Col>
          <Col xs={24} lg={12}>
            <ReactECharts option={radarOption} style={{ height: '350px' }} />
          </Col>
        </Row>
      </Typography>
    </div>
  );
}