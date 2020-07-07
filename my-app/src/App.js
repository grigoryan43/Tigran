import React, {Component} from 'react';
import List from "./Component/List";

class App extends Component {

    state = {
        items: [],
        term : "",
    }

    onChange(event){
        debugger;

        this.setState({ term: event });
    }

    onDelete= (item) =>{
        debugger;

        this.state.items.splice(item, 1);
        this.setState({items: this.state.items});

    }

    onSubmit= (event) => {
        debugger;

        event.preventDefault();
        if (this.state.term.length > 0){
            this.setState({
                items: [...this.state.items, this.state.term]

            });


        }
    }

    render() {
        return (
            <div >
                <h1  > TODO-LIST </h1>
                <div >
                    <form  onSubmit={this.onSubmit}>
                        <input  value={this.state.term} onChange={(event) => this.onChange(event.target.value)}
                        />
                        <button>Add List</button>
                    </form>
                    <List items={this.state.items}  onDeleteList={this.onDelete}/>
                    <div >
                        <span>List Qanak:  {this.state.items.length} </span>
                    </div>
                </div>
            </div>
        );
    }
}
export default App
