import React from 'react';

class DishEditor extends React.Component {
	state = {
		name: this.props.dish.name || '',
		description: this.props.dish.description || '',
		amount: this.props.dish.amount || '',
		price: this.props.dish.price || '',
	};

	changeValue = fieldName => ({target}) => {
		this.setState({
			[fieldName]: target.value
		})
	};

	onSave = () => {
		this.props.onSave({
			...this.props.dish,
			...this.state
		})
	};

	onDelete = () => {
		this.props.onDelete(this.props.dish);
	};

	isModified = () => (
		this.props.dish.name !== this.state.name ||
		this.props.dish.amount !== this.state.amount ||
		this.props.dish.price !== this.state.price ||
		this.props.dish.description !== this.state.description
	);

	isDishNew = () => !this.props.dish._id;

	changeName = this.changeValue('name');
	changeAmount = this.changeValue('amount');
	changePrice = this.changeValue('price');
	changeDescription = this.changeValue('description')

	render() {
		const {name, description, amount, price} = this.state;
		const {translations} = this.props;
		const rowClassName = [
			'menu-table-editing-row',
			this.isModified() || this.isDishNew() ? 'menu-table-editing-row-unsaved' : ''
		].join(' ');

		return (
			<tr className={rowClassName}>
				<td>
					<input
						type="text"
						value={name}
						onChange={this.changeName}
						placeholder={translations.dishName}
						className="app-input-field"
					/>
					<br />
					<input 
						type="text"
						value={description}
						onChange={this.changeDescription}
						placeholder={translations.dishDescription}
						className="app-input-field menu-input-field"
					/>
				</td>
				<td className="menu-dish-cell">
					<input
						type="text"
						value={amount}
						onChange={this.changeAmount}
						placeholder={translations.dishAmount}
						className="app-input-field"
					/>
				</td>
				<td className="menu-dish-cell">
					<input
						type="text"
						value={price}
						onChange={this.changePrice}
						placeholder={translations.dishPrice}
						className="app-input-field"
					/>
					<button
						onClick={this.onSave}
						disabled={!this.isModified()}
						className="menu-table-save"
					>
						<i className="fa fa-check" />
					</button>
					{!this.isDishNew() && (
						<button
							onClick={this.onDelete}
							className="menu-table-delete"
						>
							<i className="fa fa-times" />
						</button>
					)}
				</td>
			</tr>
		);
	}
}

DishEditor.defaultProps = {
	dish: {}
};

export default DishEditor;