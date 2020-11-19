import React, { Component } from "react";
import { Layout, Progress, Button } from "antd";
import Top from "../../components/top";
const { Header, Sider, Content } = Layout;
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "智能博弈挑战赛",
      size: "large",
      teamPKList: [
        {
          teamA: "team1",
          teamB: "team2",
        },
        {
          teamA: "team1",
          teamB: "team2",
        },
        {
          teamA: "team1",
          teamB: "team2",
        },
        {
          teamA: "team1",
          teamB: "team2",
        },
      ],
    };
  }
  render() {
    var roomList = [];
    for (let i = 1; i < 26; i++) {
      roomList.push(
        <div className="room" key={i}>
          <div className="roomBg">
            <p>房间{i}</p>
            <div className="roomBody">
                <div className='teamLeft'>
                  <p>team1</p>
                </div>
                <div className='teamVS'><i>vs</i></div>
                <div className='teamRight'>
                <p>team2</p>
                </div>
            </div>
          </div>
        </div>
      );
    }
    console.log(roomList);
    const { size, teamPKList } = this.state;
    return (
      <>
        <Layout>
          <Header>
            <Top name={this.state.name} />
          </Header>
          <Layout>
            <Content className="lineContent">
              <div className="roomCont">{roomList}</div>
            </Content>
            <Sider className="SiderDiv lineContent1">
              <div className="gameRound brightLine">
                <p>
                  当前比赛轮次:<span>15</span>
                </p>
              </div>
              <div className="progressStyle ">
                <Progress
                  strokeColor={{
                    from: "#108ee9",
                    to: "#87d068",
                  }}
                  percent={70.9}
                  status="active"
                />
              </div>
              <ul className="teamList brightLine">
                {teamPKList.map((item, index) => {
                  return (
                    <li key={index}>
                      <span>{item.teamA}</span>
                      <i>VS</i>
                      <span>{item.teamB}</span>
                    </li>
                  );
                })}
              </ul>
              <div className="btnList">
                <Button type="primary" size={size}>
                  开始
                </Button>
                <Button size={size}>暂停</Button>
              </div>
            </Sider>
          </Layout>
        </Layout>
      </>
    );
  }
}
