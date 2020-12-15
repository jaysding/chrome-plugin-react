import React, {Component, Fragment} from 'react';

class TodoList extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            listData: [],
            inputValue: ''
        };
    }

    handleSubmit(e) {
        
            this.setState({
                listData: [...this.state.listData, this.state.inputValue],
                inputValue: ''
            })
      
    }

    handleInput(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    handleItemDelete(i) {
        const list = [...this.state.listData];
        list.splice(i, 1);
        this.setState({
            listData: list
        })
    }

    render() {
        return (
            <Fragment>
                todo list
                <input 
                value={this.state.inputValue} 
                onChange={(e) => this.handleInput(e)}

                />
                <button onClick={(e) => this.handleSubmit(e)}>提交</button>
                <ul>
                    {
                    this.state.listData.map((i, index) => 
                    <li key={index} onClick={() => this.handleItemDelete(index)}>{i}</li>)}
                </ul>
            </Fragment>
        )
    }
}

export default TodoList