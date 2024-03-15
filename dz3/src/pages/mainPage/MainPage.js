import {Component} from "react";
import style from './mainPage.module.css'
export class MainPage extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <>
                <h1 className={style.title}>Hello , {this.props.name}</h1>
            </>
        );
    }
}