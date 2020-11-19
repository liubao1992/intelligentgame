import React, { Component } from "react";
import { Layout, Table } from "antd";
import Top from "../../components/top";
const { Header, Content } = Layout;
export default class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "智能博弈挑战赛排行榜",
      scroll: {
        y: 700,
      },
    };
  }
  componentDidMount() {
    this.handleSize()
    // 组件初始化注册浏览器尺寸变化监听事件， 刷新桌面尺寸
    window.addEventListener("resize", this.handleSize);
  }
  componentWillUnmount() {
    // 组件销毁前移除监听事件
    window.removeEventListener("resize", this.handleSize);
  }
  // 自适应浏览器的高度
  handleSize = () => {
    let divHeight = document.querySelector('.tableSign').clientHeight - 130;
    console.log(divHeight)
    this.setState({
      scroll:{
        y:divHeight
      }
    });
  };

  render() {
    const dataSource = [];
    for (let i = 1; i <= 20; i++) {
      let obj = {
        key: i + "",
        ranking: i,
        elo: 3000,
        winNum: "40",
        winRate: "50%",
      };
      dataSource.push(obj);
    }
    const columns = [
      {
        title: "排名",
        dataIndex: "ranking",
        key: "ranking",
        render(text, record, index) {
          let className = "";
          if (text === 1) {
            className = "diamondDiv first";
          } else if (text === 2) {
            className = "diamondDiv second";
          } else if (text === 3) {
            className = "diamondDiv third";
          } else {
            className = "diamondDiv";
          }
          return (
            <div className={className}>
              <p>{record.ranking}</p>
            </div>
          );
        },
      },
      {
        title: "elo分数",
        dataIndex: "elo",
        key: "elo",
      },
      {
        title: "胜场数",
        dataIndex: "winNum",
        key: "winNum",
      },
      {
        title: "胜率",
        dataIndex: "winRate",
        key: "winRate",
      },
    ];
    const { scroll } = this.state;
    return (
      <>
        <Layout>
          <Header>
            <Top name={this.state.name} />
          </Header>
          <Layout>
            <Content className="lineContent tableSign">
              <Table
                className="tableStyle"
                dataSource={dataSource}
                columns={columns}
                pagination={false}
                scroll={scroll}
              />
              ;
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}
