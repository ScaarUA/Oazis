import React from 'react';

class CategoryEditor extends React.Component {
	state = {
		name: this.props.category.name || ''
	};

	changeName = ({target}) => {
		this.setState({
			name: target.value
		})
	};

	onSave = () => {
		this.props.onSave({
			...this.props.category,
			name: this.state.name
		});
	};

	onDelete = () => {
		this.props.onDelete(this.props.category._id)
	};

	isCategoryNew = () => !this.props.category._id;

	isModified = () => this.props.category.name !== this.state.name;

	render() {
		const {name} = this.state;
		const rowClassName = [
			'menu-table-editing-row',
			this.isModified() || this.isCategoryNew() ? 'menu-table-editing-row-unsaved' : ''
		].join(' ');

		return (
			<tr className={rowClassName}>
				<th colSpan="3" className="menu-category-name-cell">
					<input
						type="text"
						value={name}
						onChange={this.changeName}
						className=" app-input-field"
					/>
					<button
						onClick={this.onSave}
						disabled={!this.isModified()}
						className="menu-table-save"
					>
						<i className="fa fa-check" />
					</button>
					{!this.isCategoryNew() && (
						<button
							onClick={this.onDelete}
							className="menu-table-delete"
						>
							<i className="fa fa-times" />
						</button>
					)}
				</th>
			</tr>
		);
	}
}

CategoryEditor.defaultProps = {
	category: {}
};

export default CategoryEditor;