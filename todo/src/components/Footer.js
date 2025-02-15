import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "./actions";

const Footer = () => (
	<div className="footer">
		Show:
		<div className="filterButtons">
			<FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
		</div>
		<div className="filterButtons">
			<FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
		</div>
		<div className="filterButtons">
			<FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
				Completed
			</FilterLink>
		</div>
	</div>
);

export default Footer;
