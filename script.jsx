 const {useState} = React;
function Edit() {
    const [input, getInput] = useState(`# Welcome to my React Markdown Previewer! (H1)

## This is a sub-heading... (H2)

Here’s a [link to freeCodeCamp](https://www.freecodecamp.org).

Here's some inline code: \`<div></div>\` between two backticks.

\`\`\`
// This is a code block
function helloWorld() {
    console.log("Hello, world!");
}
\`\`\`

- This is a list item.

> This is a blockquote.

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

You can also make text **bold**... whoa!`);
    
    return (
        <div id="container">
            <textarea 
                id="editor" 
                onChange={(e) => getInput(e.target.value)} 
                value={input}
            />
            <div id="preview" dangerouslySetInnerHTML={{ __html: marked(input) }}></div>
        </div>
    );
}

ReactDOM.render(<Edit/>,document.getElementById("root"));