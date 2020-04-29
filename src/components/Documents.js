import React from "react";
import Files from "../files.json";
import File from "../components/File.js"

class Documents extends React.Component{
    constructor(){
        super();
        this.state={
            filesLoaded: false
        };
    }

    /**perform a query to the database to obtain files
     * when this component is mounted.
     */
    componentDidMount(){
        setTimeout( () => {
            this.setState({filesLoaded: true})
        }, 1000)
    }
    
    render(){
        /**Create an array holding all File functional components to be rendered.*/
        const FilesCollection = this.state.filesLoaded ? Files.map( file => 
                                                            <File 
                                                                key={file.id}
                                                                id={file.id} 
                                                                title={file.title}  
                                                                author={file.author}
                                                                lastModified={file.lastModified}
                                                                filesLoaded={this.state.filesLoaded}
                                                                existingDocClick={this.props.existingDocClick}
                                                            />)
                                                        : null;
        return(
            <div id="docs-container">
                <div id="docs">
                    <div id="title">
                        <p>Documents</p>
                    </div>
                    <div className="file-info" id="file-header">
                        <p>Title</p>
                        <p>Author</p>
                        <p>Last Modified</p>
                    </div>
                    <div id="files-container">
                        {FilesCollection}
                    </div>
                </div>
            </div>
        );
    }
}

export default Documents;