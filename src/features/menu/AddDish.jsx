import React from 'react';
import DishEditor from './DishEditor';

class AddDish extends React.Component {
	state = {
		adding: false
	};

	startAdding = () => {
		this.setState({
			adding: true
		});
	};

	addMenuDish = data => {
		this.props.addMenuDish(this.props.categoryId, data)
			.then(() => {
				this.setState({
					adding: false
				});
			});
	};

	render() {
		const {adding} = this.state;
		const {translations} = this.props;

		if (adding) {
			return (
				<DishEditor
					onSave={this.addMenuDish}
					translations={translations}
				/>
			);
		}

		return (
			<tr>
				<td>
					<button
						onClick={this.startAdding}
						className="app-button"
					>
						{translations.addDish} <i className="fa fa-plus" />
					</button>
				</td>
			</tr>
		);
	}
}

export default AddDish;