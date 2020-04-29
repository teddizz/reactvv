import React from "react";
import ReactQuill from "react-quill";

/**importing quill styles */
import 'react-quill/dist/quill.snow.css';
import '../styles/editor.css'

class Editor extends React.Component{
    constructor(){
        super();
        this.state={
            placeholder: 'Get Creative...',
            text: '',
            modules: {
                toolbar: [
                  [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
                  [{size: []}],
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{'list': 'ordered'}, {'list': 'bullet'}, 
                   {'indent': '-1'}, {'indent': '+1'}]
                ],
              },
            title: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.titleChange = this.titleChange.bind(this);
    }

    componentDidMount(){
        /**If no props are passed to this component, then we are opening an existing file */
        if( !(Object.keys(this.props).length == 0 && this.props.constructor === Object) ){
            const {title, author} = this.props.currentDocInfo;
            this.setState({
                title: title
            });
        }
    }

    handleChange(value){
        this.setState({text:value});
    }

    titleChange(e){
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="docs-container">
                <input type="text" id="doc-title" name="title" style={{fontSize: "24px"}} onChange={this.titleChange} value={this.state.title} placeholder="Untitled Document"></input>
                <div id="editor-container">
                    <ReactQuill 
                        placeholder={this.state.placeholder}
                        text={this.state.text}
                        modules={this.state.modules}
                        onChange={this.handleChange}
                        style={{height: '100vh'}}
                    />
                </div>
            </div>
        );
    }
}

export default Editor;