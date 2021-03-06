import React, { Component } from 'react';
//import { Link } from "react-router-dom";
import { ToggleLink } from "../ToggleLink";


class CategoryNavigation extends Component {
  
	render() {
		return <React.Fragment>
			<ToggleLink  to={ `${this.props.baseUrl}/all` } exact={ false } >All
				</ToggleLink>
			{ this.props.categories && this.props.categories.map(cat =>
				<ToggleLink className="btn btn-secondary btn-block" key={ cat }
					to={ `${this.props.baseUrl}/${cat.toLowerCase()}`}>
					{ cat }
				</ToggleLink>
			)}
		</React.Fragment>
	}
}

export default CategoryNavigation;
