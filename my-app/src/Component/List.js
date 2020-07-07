import React, {Component} from "react";
class List extends Component {

    render() {
        return (
            <ul >
                { this.props.items.map((item, index) =>
                    <li key={item+':'+index}>
                        <div >

                            <div>{item}</div>
                            <div >
                                <button  onClick={() => this.props.onDeleteList(item+':'+index)}>Remove</button>
                            </div>
                        </div>
                        <br />
                    </li>
                )}
            </ul>
        )}
}

export default List;

