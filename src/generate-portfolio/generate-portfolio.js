import React, { Component } from 'react';
import './generate-portfolio.less';
import AboutMe from "./about-me/about-me";
import MoreAboutMe from "./more-about-me/more-about-me";
import Education from "./education/education";
import Projects from "./projects/projects";
import Preview from "./preview/preview";
import Skills from "./skills/skills";
import ProfessionalExperience from "./professional-experience/professional-experience";
import { connect } from "react-redux";
import ACTION from '../common/action_constants';
import BackImg from "../../assets/header.jpg";
import NavBar from "../common/components/nav-bar/navbar";
class GeneratePortfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            next : 1
       };
    }
    next = (data) =>{
        console.log(data);
        this.storeData(data);
        console.log(this.props.portfolio);
        if(this.state.next <=7){
            this.setState({
                next : this.state.next + 1
            });
        }
    }
    back = () =>{
        if(this.state.next > 1){
            this.setState({
                next : this.state.next - 1
            });
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loaded : true
            });
        },1000);
        window.scrollTo(0,0);
    }
    storeData = (data) =>{
        const {dispatch} = this.props;
        dispatch({type : ACTION.PORTFOLIO.STORE_DATA, data });
    }
    render() {
        const next = this.state.next; 
        const all = 7;
        return (
            <div style = {{backgroundImage: `url(${BackImg})`}}className = "generate-portfolio-wrap">
                <NavBar scrollToPosition = {this.scrollToPosition}></NavBar>
                <div style = {{zIndex:"1"}}className = {next >= 1 ? "generate-portfolio-section appear" : "generate-portfolio-section"}>
                    <div>
                        <AboutMe step = {this.state.next} all = {all} next = {this.next}/>
                    </div>
                </div>
                <div style = {{zIndex:"2"}}className = {next >= 2 ? "generate-portfolio-section appear" : "generate-portfolio-section"}>
                    <div>
                        <Education step = {this.state.next} all = {all} next = {this.next} back = {this.back}/>
                    </div>
                </div>
                <div style = {{zIndex:"3"}}className = {next >= 3 ? "generate-portfolio-section appear" : "generate-portfolio-section"}>
                    <div>
                        <Skills step = {this.state.next} all = {all} next = {this.next} back = {this.back}/>
                    </div>
                </div>
                <div style = {{zIndex:"4"}}className = {next >= 4 ? "generate-portfolio-section appear" : "generate-portfolio-section"}>
                    <div>
                        <ProfessionalExperience step = {this.state.next} all = {all} next = {this.next} back = {this.back}/>
                    </div>
                </div>
                <div style = {{zIndex:"5"}}className = {next >= 5 ? "generate-portfolio-section appear" : "generate-portfolio-section"}>
                    <div>
                        <Projects step = {this.state.next} all = {all} next = {this.next} back = {this.back}/>
                    </div>
                </div>
                <div style = {{zIndex:"6"}}className = {next >= 6 ? "generate-portfolio-section appear" : "generate-portfolio-section"}>
                    <div>
                        <MoreAboutMe step = {this.state.next} all = {all} next = {this.next} back = {this.back}/>
                    </div>
                </div>
                <div style = {{zIndex:"7"}}className = {next >= 7 ? "generate-portfolio-section appear" : "generate-portfolio-section"}>
                    <div>
                        <Preview step = {this.state.next} all = {all} next = {this.next} back = {this.back}/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        portfolio: state.portfolio
    };
  };
export default connect(mapStateToProps)(GeneratePortfolio);