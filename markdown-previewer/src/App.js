import "./App.css";
import React, { useState } from "react";
let marked = require("marked");

function App() {
  const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
  const [text, setText] = useState(placeholder);
  return (
    <div className="container">
      <h1 className="text-center">
        <span className="badge ">MarkDown Previewer</span>
      </h1>
      <div className="row">
        <div className="col-6 text-center">
          <h3 className="text-center">
            <span className="badge badge-secondary">Markdown Input</span>
          </h3>
          <textarea
            className="input"
            id="editor"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></textarea>
        </div>

        <div className="col-6 text-center">
          <h3 className="text-center">
            <span className="badge badge-secondary">Preview</span>
          </h3>
          <div
            className="output"
            id="preview"
            dangerouslySetInnerHTML={{
              __html: marked(text, { breaks: true, sanitize: true, gfm: true }),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
