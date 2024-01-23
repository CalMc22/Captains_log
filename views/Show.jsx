const React = require('react');

class Show extends React.Component {
    render() {
        const { log } = this.props;
        return (
            <div>
                <h1>{log.title}</h1>
                <p>Entry: {log.entry}</p>
                <p>Ship is Broken: {log.shipIsBroken ? 'Yes' : 'No'}</p>
                <a href={`/logs/${log._id}/edit`}>Edit</a>
                <br />
                <a href="/logs">Back to Index</a>
            </div>
        );
    }
}

module.exports = Show;