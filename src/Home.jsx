import React, { Component } from 'react';
import './style.css'


class Home extends Component {

    state = {
        num: 0,
        str: 'hell o warld!'

    };





    componentDidMount() {
        console.log('did mount');
    }
    componentWillUnmount() {
        console.log('unmount');
    }
    componentDidUpdate() {
        console.log('update');
    }
    componentDidCatch() {
        console.log('catch');
    }



    render() {
        const { num, str } = this.state;
        const { data } = this.props;
        return (
            <div>
                <h1>{this.state.num}</h1>
                <h1>{str}</h1>
                <h1>{this.props.data}</h1>
                <button onClick={() => {
                    this.setState({ num: num + 1, str: 'hello geeks' })
                }}>+</button>

                <button onClick={() => {
                    if (num > 0){
                         this.setState({ num: num - 1 })
                    }
                }}>-</button>

                <button onClick={()=>{
                    this.setState({ num: num * 2 })
                }}>*</button>

                <button onClick={()=>{
                    this.setState({ num: num / 2 .toFixed(2)})
                }}>/</button>

                <button onClick={()=>{
                              this.setState({ num: Math.pow(num,2) .toFixed(2)})
                }}>degree</button>

                <button onClick={()=>{
                              this.setState({ num: Math.sqrt(num) })
                }}>root</button>









            </div>
        );
    }
}

export default Home;
