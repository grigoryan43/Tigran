import React, {Component} from 'react';
import List from "./Component/List";

class App extends Component {

    state = {
        items: [],
        str : "",
    }

    onChange(event){
        debugger;

        this.setState({ str: event });
    }

    onDelete= (item) =>{
        debugger;

        this.state.items.splice(item, 1);
        this.setState({items: this.state.items});

    }

    onSubmit= (event) => {
        debugger;

        event.preventDefault();
        if (this.state.str.length > 0){
            this.setState({
                items: [...this.state.items, this.state.str]

            });


        }
    }

    render() {
        return (
            <div >
                <h1  > TODO-LIST </h1>
                <div >
                    <form  onSubmit={this.onSubmit}>
                        <input  value={this.state.str} onChange={(event) => this.onChange(event.target.value)}
                        />
                        <button>Add List</button>
                    </form>
                    <List items={this.state.items}  onDeleteList={this.onDelete}/>
                    <div >
                        <span>List Qanak : {this.state.items.length} </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default App
