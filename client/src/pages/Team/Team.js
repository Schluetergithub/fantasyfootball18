import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

class Team extends Component {

// players API to React page //

    state = {
        gameKey: "",
        name: "",
        position: "",
        passingYards: 0,
        passingTouchdowns: 0,

    }

    componentDidMount() {
        this.loadTeam();
    }

    // loadTeam = () => {
    //     API.getTeam(this.props.match.params.week_id, this.props.match.params.id)
    loadTeam = () => {
        API.getTeam()
            .then(res => this.setState({
                gameKey: res.data.gameKey,
                name: res.data.name,
                position: res.data.position,
                passingYards: res.data.passingYards,
                passingTouchdowns: res.data.passingTouchdowns,
            })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <h4>TEAM PLAYER OPTIONS</h4>
                <div>{this.state.gameKey}</div>
                <div>{this.state.name}</div>
                <div>{this.state.position}</div>
                <div>{this.state.passingYards}</div>
                <div>{this.state.passingTouchdowns}</div>
            </div>
        );
    }
}

export default Team;