import { Component } from "react";
import Router from "next/router";

export default class ClassCounterPage extends Component {
  state = {
    count: 20,
  };

  componentDidMount() {
    console.log("마운트됨!!!");
    //input 태그 선택해서 깜빡거리게 하기 한번만 실행된
  }

  componentDidUpdate() {
    console.log("수정됨!!(리렌더링됨)");
  } // 리렌더링시에 작동

  componentWillUnmount() {
    console.log("여기서 나갈래요!!");
    // 나가기 전에 마지막으로 할 것들!! (백엔드 컴퓨터에 채팅방 나감을 알리는 용도)
  }

  onClickMove = () => {
    // use 뭐시기는 함수형에서만 사용가능 Hook을 이용하니까
    Router.push("/");
  };

  onClickCounter = () => {
    console.log("카운터를 클릭했습니다");
    this.setState({
      count: this.state.count + 1,
    }); // 컴포넌트 내장 기능이므로 setState사용 가능

    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <div>현재카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
        <button onClick={this.onClickMove}>나가기</button>
      </div>
    );
  }
}

// class 공통기능 {
//   hp = 1000;

//   attack() {
//     console.log("공격하자");
//   }
// }

// class 지상Monster extends 공통기능 {
//   run() {
//     console.log("뛰어서 도망가기");
//   }
// }

// class 공중Monster extends 공통기능 {
//   run() {
//     console.log("날라서 도망가기");
//   }
// }
