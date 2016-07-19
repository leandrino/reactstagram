import React from 'react'
import { Link } from 'react-router'

const main = React.createClass({
	render: function () {
		return (
			<div>
				<h1>
					<Link to="/">Reduxtagram</Link>
				</h1>
			  {/* Clone the element active this.props = (...this.props to inner elements (Single and PhotoGrid)) */}
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

export default main