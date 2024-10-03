marked.setOPtions({
 breaks: true,
});
const renderer = new marked.Renderer();
function App(){
    const [input, getInput] =useState('');
    const getMarkdownText = () => {
        const rawMarkup = marked(input, { sanitize: true });
        return { __html: rawMarkup };
    };
    return(
        <div id="text">
            <textarea onChange={(e) => getInput(e.target.value)}/>
    <div id="textarea"   dangerouslySetInnerHTML={{__html: marked(markdown,{renderer: renderer}}}/>
      </div>
    );
}


ReactDOM.render(<App/>,document.getElementById("root"))