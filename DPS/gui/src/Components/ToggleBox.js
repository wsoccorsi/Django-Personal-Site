import React, { Component } from "react";
//https://www.golangprograms.com/reactjs-show-hide-component-on-click.html <-- source
class ToggleBox extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			opened: false,
		};
		this.toggleBox = this.toggleBox.bind(this);
	}

	toggleBox() {
		const { opened } = this.state;
		this.setState({
			opened: !opened,
		});
	}

	render() {
		var { title, children } = this.props;
		const { opened } = this.state;

		if (opened){
			title ='Hide Launches';
		}else{
			title ='Call Launches';
		}

		return (
			<div className="box">
				<div className="boxTitle" onClick={this.toggleBox}>
					<button class="Primary"> {title} </button>
				</div>
				{opened && (
					<div class="boxContent">
						{children}
					</div>
				)}
			</div>
		);
	}
}

export default ToggleBox;
