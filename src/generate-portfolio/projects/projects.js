import React, { Component } from 'react';
import Progressbar from "../../common/components/progressbar/progressbar";
import InputComponent from "../../common/components/input-component/input-component";
import './projects.less';

class Projects extends Component {
constructor(props){
    super(props);
    this.state = {
        projects : [{
            title : "",
            details : "",
            startDate : "",
            endDate : ""
        }],
        step : this.props.step
    };
}
addProject = () =>{
    let projects = this.state.projects;
    let tempProjects = {
        title : "",
        details : "",
        startDate : "",
        endDate : ""
    };
    projects.push(tempProjects);
    this.setState({
        projects
    });
}
next = () =>{
    const data = {
        projects : [...this.state.projects]
    };
    if(this.validate()){
        this.setState({
            error : ""
        });
        this.props.next(data);
    }else{
        this.setState({
            error : "Please add at least one project"
        });
    }
}
back = () =>{
    this.props.back();
}
changeHandler = (id,value)=>{
    const index = id.split(".")[1];
    const idName = id.split(".")[0];
    let projects = this.state.projects.slice();
    projects[index][idName] = value;
    this.setState({
        projects
    });
}
validate = () =>{
    let flag = true;
    for(let i =0; i < this.state.projects.length; i++){
        let temp = this.state.projects[i];
        Object.keys(temp).forEach((key)=>{
            console.log("yes",temp[key] =="");
            if(temp[key] =="") {
                flag = false;
            }
        });
    }
    return flag;
}
render() {
    return (
        <div className = "project-wrap">
            <div className = "title">
                Projects
            </div>
            <div className = "step">
                {5} of {this.props.all}
            </div>
            <div>
                <Progressbar percentage = {this.props.step/this.props.all*100}/>
            </div>
            {this.state.projects.map((project,index)=>{
                return(
                    <div key = {index}>
                        <div className = "details">
                            <div>
                                <InputComponent 
                                error = "" 
                                id = {"title."+index} 
                                placeholder = {"Title"} 
                                value = {project.title} 
                                type = "text" 
                                changeHandler = {this.changeHandler} 
                                focus = {true}/>
                            </div>
                        </div>
                        <div className = "details">
                            <div>
                                <InputComponent 
                                error = "" 
                                id = {"details."+index} 
                                placeholder = {"Details"} 
                                value = {project.details} 
                                type = "textarea" 
                                changeHandler = {this.changeHandler} 
                                focus = {false}/>
                                </div>
                        </div>
                        <div className = "details">
                            <div className = "dates">
                                <InputComponent 
                                error = "" 
                                id = {"startDate."+index} 
                                placeholder = {"Start date"} 
                                value = {project.startDate} 
                                type = "text" 
                                changeHandler = {this.changeHandler} 
                                focus = {false}/>
                            </div>
                            <div className = "dates">
                                <InputComponent 
                                error = "" 
                                id = {"endDate."+index} 
                                placeholder = {"End date"} 
                                value = {project.endDate} 
                                type = "text" 
                                changeHandler = {this.changeHandler} 
                                focus = {false}/>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className = "details">
                <input type = "button" className = "btn btn-info" onClick = {this.addProject} value = "Add Project"/>
            </div>
            {
                    this.state.error && <div className="error-section">{this.state.error}</div>
            }
            <div className="next" >
                <div className = "btn btn-info"onClick = {this.next}>Next</div>
                </div>
            <div className="back">
                    <div className = "btn btn-info"onClick = {this.back}>back</div>
            </div>
        </div>
    );
}
}

export default Projects;