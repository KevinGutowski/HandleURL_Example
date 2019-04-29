const sketch = require('sketch')
function handleURL(context) {
    let query = context.actionContext.query
    sketch.UI.message(query.foo)
}
