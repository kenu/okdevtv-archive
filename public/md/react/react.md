# React.js

* https://facebook.github.io/react/

```
var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(<HelloMessage name="John" />, mountNode);
```

## Sample
```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Hello World</title>
    <script src="https://unpkg.com/react@latest/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <script type="text/babel">

      ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );

    </script>
  </body>
</html>
```

## render lifecycle
* LIFECYCLE METHODS
  * `componentWillMount` – 한 번 실행, 렌더링 전 클라이언트, 서버 양쪽에서
  * `componentDidMount` – 한 번 실행, 렌더링 후, 클라이언트에서만
  * `shouldComponentUpdate` – 리턴 값이 컴포넌트 업데이트 결정
  * `componentWillUnmount` – 컴포넌트 언마운트 이전에 실행

* SPECS
  * `getInitialState` – state용 리턴 값의 초기 값
  * `getDefaultProps` – props가 없을 경우 props 기본값 설정
  * `mixins` – 객체 배열, 현재 컴포넌트 기능 확장에 사용됨

* stateful

```
var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

ReactDOM.render(<Timer />, mountNode);
```


## 참고
* inflearn react 강좌
  * https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/
* https://scotch.io/tutorials/learning-react-getting-started-and-concepts
* webpack
  * https://okdevtv.com/mib/webpack
