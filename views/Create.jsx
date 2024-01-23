const React = require('react');

function Create() {
  return (
    <div>
      <h1>Create a New Log</h1>
      <form action="/logs" method="POST">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" required /><br />
        <label htmlFor="entry">Entry:</label>
        <textarea name="entry" required></textarea><br />
        <label htmlFor="shipIsBroken">Is Ship Broken?</label>
        <input type="checkbox" name="shipIsBroken" /><br />
        <input type="submit" value="Create Log" />
      </form>
    </div>
  );
}

module.exports = Create;
