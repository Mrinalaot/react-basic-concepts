import React, {
    Component,
} from "react";
import Book from "./Book";

class Library extends Component {
    state = { open: true }
    toggleOpenClose = () => {
        this.setState(prevState => ({
            open: !prevState.open
        })
        );
    }

    componentDidMount(){
        console.log("Library component Mounted");
    }

    componentDidUpdate(){
        console.log("component Updated");
    }
    
    render() {
        const { books } = this.props;

        return (
            <div>
                <hr />
                <h1> Library is {this.state.open ? 'Open' : 'close'} </h1>
                <button onClick={this.toggleOpenClose}> Change State </button>
                {books.map((book, i) => (
                    <Book
                        key={i}
                        name={book.name}
                        date={book.date}
                        auther={book.auther}
                    />
                ))}
            </div>
        );
    }
}
export default Library;
