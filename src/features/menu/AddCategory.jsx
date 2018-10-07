import React from 'react';
import CategoryEditor from './CategoryEditor';

class AddCategory extends React.Component {
	state = {
		adding: false
	};

	startAdding = () => {
		this.setState({
			adding: true
		});
	};

	addMenuCategory = data => {
		this.props.addMenuCategory(data)
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
			return <CategoryEditor
				onSave={this.addMenuCategory}
			/>
		}

		return (
			<>
			<tr>
				<th colSpan="3">
					<button
						onClick={this.startAdding}
						className="app-button"
					>
						{translations.addCategory} <i className="fa fa-plus" />
					</button>
				</th>
			</tr>
			</>
		);
	}
}

export default AddCategory;