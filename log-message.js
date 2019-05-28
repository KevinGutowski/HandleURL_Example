const sketch = require('sketch')
const Document = sketch.Document
const currentDocument = sketch.getSelectedDocument()

function handleURL(context) {
    //context.actionContext has a lot of neat things but lets focus on just the query
    let query = context.actionContext.query

    // check to see if the query is empty
    // using count() bc query is a NSDictionary not an array
    if (query.count() != 0) {
        // if a currently selected document exists show an alert
        if (currentDocument) {
            showAlert(query)
        } else {
            // if no currently selected document, lets make a new one
            let document = new Document()
            showAlert(query)
        }
    } else {
        // if no query exists then just display a generic message
        sketch.UI.message("Recieved URL but no query parameters")
    }
}

function showAlert(query) {
    // check to see if the url parameters has foo
    // expecting url like sketch://plugin/com.sketchapp.examples.log-message/log-message?foo=hello%20world
    let text = "Parameters:"
    Object.keys(query).forEach((key,index) => {
        text += "\n" + (index+1) + ". { key: " + key + ", value: "+ query[key] + " }"
        //looks like "1. key: foo, value: hello world"
    })
    sketch.UI.alert("HandleURL",text)
}
