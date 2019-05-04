# Handle URL Example

- The action _HandleURL_ will be triggeredd when it is opened with the url `sketch://plugin/my.plugin.identifier/my.command.identifier`
- The action context for this action contains three keys:
    - `url`: the NSURL that triggered this action
    - `path`: path: a string containing everything after `sketch://plugin` (eg. `/my.plugin.identifier/my.command.identifier`).
    - `query`: an object containing the query of the URL (eg. for `sketch://plugin/my.plugin.identifier/my.command.identifier?foo=bar&baz=qux`, `query` will be `{ foo: 'bar', baz: 'quz' }`).

- Note that to run the plugin you will need to have a document open
