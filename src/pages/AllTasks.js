import React from "react";

class AllTasks extends React.Component {
    state = {
        isLoading: true,
        tasklist: [],
        error: null
    };
    getFetchTasks() {
        this.setState({
            loading: true
        }, () => {
            fetch("http://localhost:5000/alltasks").then(res => res.json()).then(result => this.setState({
                loading: false,
                tasklist: result
            })).catch(console.log);
        });
    }
    componentDidMount() {
        this.getFetchTasks();
    }
    render() {
        const {
            tasklist,
            error
        } = this.state;
        return (
            <React.Fragment>
            <h1>All The Tasks!</h1> {
                error ? <p>
                {
                    error.message
                } </p> : null}  {
                    tasklist.map(task => {
                        const {
                            id,
                            title,
                            completed
                        } = task;
                        return (
                        <div key={id}>
                            <p>Id: {id}</p>
                            <p>Title: {title}</p>
                            <p>Completed: {completed}</p>
                            <hr />
                        </div>
                        );
                    })
                } </React.Fragment> );
    }
}
export default AllTasks;