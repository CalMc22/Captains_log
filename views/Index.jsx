const React = require('react');

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Logs Index</h1>
                <ul>
                    {this.props.logs.map((log, index) => (
                        <li key={index}>
                            <a href={`/logs/${log._id}`}>{log.title}</a>
                            <form action={`/logs/${log._id}?_method=DELETE`} method='POST'>
                                <button>Delete</button>
                            </form>
                        </li>
                    ))}
                </ul>
                <a href="/logs/new">Create a New Log</a>
            </div>
        );
    }
}

module.exports = Index;