import React from 'react';
import {connect} from 'react-redux';
import Dropdown from '_components/dropdown';
import './lang-selector.less';
import {langOptions} from './langSelectorConstants';
import {changeLanguage} from './langSelectorActions';

const getSelectedLangOption = (langValue) => langOptions.find(langOption => langOption.value === langValue);

export class LangSelector extends React.Component {
	state = {
		dropdownShown: false
	};

	selectLanguage = (lang) => {
		this.props.changeLanguage(lang);
		this.triggerDropdown();
	};

	triggerDropdown = () => {
		const dropdownShown = !this.state.dropdownShown;

		this.setState({
			dropdownShown
		});
	};

	render() {
		const {language} = this.props;
		const {dropdownShown} = this.state;

		const langData = getSelectedLangOption(language);

		return (
			<div className="lang-selector">
				<span className="lang-selector-trigger" onClick={this.triggerDropdown}>
					<img src={`/assets/${langData.icon}`} alt="" />&nbsp;{langData.label}
					</span>
				<Dropdown
					options={langOptions}
					show={dropdownShown}
					onChange={this.selectLanguage}
					className="lang-selector-dropdown"
				/>
			</div>
		)
	}
}

const mapStateToProps = ({language}) => ({
	language
});
const mapDispatchToProps = {
	changeLanguage
};

export default connect(mapStateToProps, mapDispatchToProps)(LangSelector);