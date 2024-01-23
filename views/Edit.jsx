const React = require('react');

class Edit extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <h1>Edit Log</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          <label>Title:</label>
          <input type="text" name="title" defaultValue={log.title} /><br />
          <label>Entry:</label>
          <textarea name="entry" defaultValue={log.entry}></textarea><br />
          <label>Ship is Broken:</label>
          <input type="checkbox" name="shipIsBroken" defaultChecked={log.shipIsBroken} /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

module.exports = Edit;