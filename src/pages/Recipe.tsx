import { useRef, useEffect } from 'react';
import { Typography, Timeline, Card, Tag, Alert } from 'antd';
import { FireOutlined, ExperimentOutlined, CheckCircleOutlined } from '@ant-design/icons';
import * as echarts from 'echarts';
import { useLanguage } from '../language';

const { Title, Paragraph, Text } = Typography;

export default function Recipe() {
  const { language, text } = useLanguage();
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let chartInstance: echarts.ECharts | null = null;
    if (chartRef.current) {
      chartInstance = echarts.init(chartRef.current);
      const option = {
        title: {
          text: text('姜汁蛋白酶活性与温度的关系曲线'),
          left: 'center',
          textStyle: {
            color: '#78350f',
            fontFamily: 'serif'
          }
        },
        tooltip: {
          trigger: 'axis',
          formatter: `{b} <br/> ${text('酶活性')}: {c}%`
        },
        xAxis: {
          type: 'category',
          name: text('温度 (°C)'),
          data: ['20', '30', '40', '50', '60', '70', '75', '80', '90', '100'],
          boundaryGap: false,
        },
        yAxis: {
          type: 'value',
          name: text('相对活性 (%)'),
          max: 100
        },
        visualMap: {
          show: false,
          pieces: [
            { gt: 0, lte: 65, color: '#fcd34d' },
            { gt: 65, lte: 80, color: '#ef4444' },
            { gt: 80, lte: 100, color: '#fcd34d' }
          ]
        },
        series: [
          {
            data: [5, 10, 20, 35, 60, 95, 100, 70, 20, 0],
            type: 'line',
            smooth: true,
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
              },
              data: [
                [
                  { name: text('最佳撞奶温度 (70-80°C)'), xAxis: '70' },
                  { xAxis: '80' }
                ]
              ]
            }
          }
        ]
      };
      chartInstance.setOption(option);
    }

    const handleResize = () => chartInstance?.resize();
    window.addEventListener('resize', handleResize);

    return () => {
      chartInstance?.dispose();
      window.removeEventListener('resize', handleResize);
    };
  }, [language, text]);

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <Typography>
        <Title className="!text-3xl text-gray-900 !mb-8 font-serif border-b pb-4">
          <ExperimentOutlined className="text-amber-600 mr-3" />
          {text('制作工艺与科学原理')}
        </Title>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <Title level={3} className="text-amber-800">
              {text('所需食材')}
            </Title>
            <div className="flex gap-4 mb-6">
              <Card className="flex-1 bg-amber-50 border-amber-200 text-center" size="small">
                <Text strong className="text-lg block mb-2">{text('老姜')}</Text>
                <Tag color="orange">{text('约 30g')}</Tag>
              </Card>
              <Card className="flex-1 bg-blue-50 border-blue-200 text-center" size="small">
                <Text strong className="text-lg block mb-2">{text('水牛奶或全脂奶')}</Text>
                <Tag color="blue">200ml</Tag>
              </Card>
              <Card className="flex-1 bg-gray-50 border-gray-200 text-center" size="small">
                <Text strong className="text-lg block mb-2">{text('白砂糖')}</Text>
                <Tag color="default">15g - 20g</Tag>
              </Card>
            </div>

            <Title level={3} className="text-amber-800">
              {text('标准化流程')}
            </Title>
            <Timeline
              className="mt-4 ml-2"
              items={[
                {
                  color: 'green',
                  content: (
                    <>
                      <Text strong className="text-base block mb-1">{text('榨取姜汁')}</Text>
                      <Paragraph className="text-gray-600">
                        {text('选用老姜（姜辣素和生姜蛋白酶含量更高）。去皮后磨成姜泥，用纱布挤出纯姜汁。每碗约需一到两汤匙姜汁。')}
                      </Paragraph>
                    </>
                  ),
                },
                {
                  color: 'orange',
                  icon: <FireOutlined className="text-orange-500 text-lg" />,
                  content: (
                    <>
                      <Text strong className="text-base block mb-1">{text('煮奶调味')}</Text>
                      <Paragraph className="text-gray-600">
                        {text('将全脂牛奶倒入锅中加入白砂糖，中小火加热至边缘微微起泡（约80°C左右）。关火后需稍微晾凉片刻。')}
                      </Paragraph>
                    </>
                  ),
                },
                {
                  color: 'red',
                  content: (
                    <>
                      <Text strong className="text-base block mb-1">{text('核心步骤："撞"')}</Text>
                      <Paragraph className="text-gray-600">
                        {text('将姜汁再次搅匀（沉淀物为淀粉，需搅起）。将温度降至约 ')}<Text mark>70°C - 75°C</Text>{text(' 的热牛奶，从高处以极快的速度、一气呵成地冲入盛有姜汁的碗中。此过程不可搅拌。')}
                      </Paragraph>
                    </>
                  ),
                },
                {
                  color: 'blue',
                  icon: <CheckCircleOutlined className="text-blue-500 text-lg" />,
                  content: (
                    <>
                      <Text strong className="text-base block mb-1">{text('静置凝固')}</Text>
                      <Paragraph className="text-gray-600">
                        {text('盖上碗盖，静置 3 至 5 分钟，让反应充分进行。打开盖子，若勺子能稳稳放在表面不沉没，即代表大功告成。')}
                      </Paragraph>
                    </>
                  ),
                }
              ]}
            />
          </div>

          <div className="flex-1 lg:max-w-md w-full">
            <Alert
              title={text('科学原理解析')}
              description={text('生姜中含有一种特殊的植物蛋白酶——生姜蛋白酶。当处于 70℃ 左右的适宜温度时，该酶的活性最高，它能够打断牛奶中酪蛋白胶束的结构，使酪蛋白分子重新交联结合，最终形成网状的凝胶结构，即我们看到的液体变成固体的“嫩豆腐”状。')}
              type="warning"
              showIcon
              className="mb-6 !bg-orange-50/50 !border-orange-200"
            />
            <Card title={text('温度监控图谱')} size="small" className="shadow-sm border-gray-100">
              <div ref={chartRef} className="w-full h-80" />
            </Card>
          </div>
        </div>
      </Typography>
    </div>
  );
}