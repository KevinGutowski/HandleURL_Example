const sketch = require('sketch')
const Document = sketch.Document
const currentDocument = sketch.getSelectedDocument()
function handleURL(context) {
    let query = context.actionContext.query
    if (currentDocument) {
        sketch.UI.message(query.foo)
    } else {
        let document = new Document()
        sketch.UI.message(query.foo)
    }
}