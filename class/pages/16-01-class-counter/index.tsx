/* 이미 JS안에 내장되어있는 내장객체중, 대표적인 Date 함수는 class 형 객체라고 할 수 있다.
const date = new Date() 형식으로 불러오며, 꺼내서 사용하기 위해서는 date.getFullYear() date.getMonth() date.getDate()
이런식으로 사용한다. 그렇다면 원래 모습은 어땠을까? 아마도,

class Date {
  getFullYear(){
    ...
  }
  getMonth(){
    ...
  }
  getDate(){
    ...
  }
}
이렇게 생겼을 것이다. 함수의 모양도 약간 다르다. 이러한 함수를 메소드 라고도 부른다. reduce(), Math.max() 등등 이러한 JS 내장객체의 메서드 들이 이러한 방식으로 만들어진 것이다.
이러한 것들을 활용하여 프로그래밍을 하는 것을 객체지향프로그래밍(Object Oriented Programming)이라고 한다.
보통 백엔드에서 자주 사용하는 방식이다. 물론 프론트에서도 많이 사용된 방식이지만, 최근에는 함수형 프로그래밍이 더욱 간편하고 가독성이 좋아 바뀌고 있는 추세이다.

그래서 이게 useEffect 를 설명하는 것과 무슨 상관이 있냐? 라면 물론 있다.

함수형 컴포넌트에서 사용하는 useEffect 를 사용하기 전인 클래스형 컴포넌트에서 사용한 방식을 알고나서 useEffect를 쓴다면 더욱 이해하기 쉬울 것이기 때문이다.
또한 함수형 컴포넌트가 유행하지만 클래스형도 알아둘 필요는 있기 때문에 공부할 필요는 있다고 생각한다.

예제코드 1

export default class ClassPage {
  class commons {
    hp = 1000
    mp = 500
    attack() {
      console.log('공격하기')
    }
  }
  
  class Monster1 extends commons {
    // 이러한 경우 extends 를 사용하여 '상속' 받았으므로 commons의 데이터가 그대로 들어오게 된다.
    run() {
      console.log('뛰어서 도망가기')
    }
  }
  class Monster2 {
    // '상속'받지 않았으므로 적어주어야 한다. 이러한 중복되는 데이터에 대해 extends 를 사용하여 중복성을 줄이고 간결하게 사용할 수 있다.
    hp = 1000
    mp = 500
    attack() {
      console.log('공격하기')
    }
    run() {
      console.log('날아서 도망가기')
    }
  }
}

데이터를 사용하려면 new를 사용한다. ex) console.log(new Monster1().hp) // 1000

리액트 에서 Component 만들기 위한 기능들을 import 해오고 extends로 상속해준다. 참고로 React Hooks 기능은 함수형 컴포넌트 전용이므로 사용할 수 없다.

예제코드 2

import { Component } from "react"

export default class ClassPage extends Component {
  // 함수형과 달리 객체형은 개별로 만들 수 없고, 하나의 묶음으로 담는다.
  state = {
    count: 0,
  }

  onClickCounter() {
    //Component 에 있는 기능들을 '상속' 받아서 사용 가능.
    // 방법 1
    this.setState((prev) => ({
      count: prev.count + 1,
    }))
    // 방법 2
    this.setState({
      count: this.state.count + 1
    })
  }
  // render() 라는 함수를 사용하여 JSX를 사용 Component에 있는 기능임.
  render() {
    return (
      <div>
        <div>현재 카운트 수: {this.state.count}</div>
        <button onClick={this.onClickCounter}>숫자 올리기</button>
        // this 라는 것은 간단히말해 실행시키는 주체를 말한다.(지금과 같은 상황은 class가 실행시켰으므로 class가 된다.) 그러므로 데이터를 참조할 때 this.state.count 같이 참조할 수 있다.
        // this의 자세한 개념은 따로 포스팅할 예정이다.
      </div>
    )
  }
}
*/
