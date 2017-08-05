import React from 'react'
import Learn from './learn/Learn'

class Test extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            c: "cla"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                c: "abc"
            })
        }, 2000)
    }
    render(){
        return(
            <div>
                 <Learn c={ this.state.c }/>
            </div>
        )
    }   
}

export default Test