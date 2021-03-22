import React, {Component} from 'react'

import './add-new-item.scss'

export default class AddNewItem extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            name: '',
            phone: '',
            favorite: false,
            isNameValid: true,
            isPhoneValid: true,
            isFormValid: false
        };

        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onFavoriteChange = this.onFavoriteChange.bind(this);
        this.onSunbmitForm = this.onSunbmitForm.bind(this);
    }

    onNameChange (evt) {
        const isNameValid = evt.target.value.length !== 0 && evt.target.value.match(/^[A-Za-zА-Яа-яЁё\s]+$/) ? true : false;
        let isFormValid = false

        if (this.state.isPhoneValid && isNameValid) {
            isFormValid = true
        }

        this.setState({
            name: evt.target.value,
            isNameValid,
            isFormValid
        })
    }

    onPhoneChange (evt) {
        const isPhoneValid = evt.target.value.length !== 0 && evt.target.value.match(/^\+7-9[0-9]{2}-\d{3}-\d{2}-\d{2}$/) ? true : false
        let isFormValid = false

        if (this.state.isNameValid && isPhoneValid) {
            isFormValid = true
        }

        this.setState({
            phone: evt.target.value,
            isPhoneValid,
            isFormValid
        })
    }

    onFavoriteChange (evt) {
        this.setState({
            favorite: evt.target.checked
        })
    }

    onSunbmitForm (evt) {
        evt.preventDefault();

        this.props.addNewItem({
            name: this.state.name,
            phone: this.state.phone,
            favorite: this.state.favorite
        })
        
        this.setState({
            name: '',
            phone: '',
            favorite: false
        })
    }
    
    render () {
        let nameGroupClassNames ="phone-book__add-new-item-group"

        if (!this.state.isNameValid) {
            nameGroupClassNames += " error"
        }

        let phoneGroupClassNames ="phone-book__add-new-item-group"

        if (!this.state.isPhoneValid) {
            phoneGroupClassNames += " error"
        }

        let formBtnClassNames ="btn phone-book__add-new-item-btn"

        if (!this.state.isFormValid) {
            formBtnClassNames += " disabled"
        }

        return (
            <form 
                className="phone-book__add-new-item"
                onSubmit={this.onSunbmitForm}    
            >
                <label className={nameGroupClassNames}>
                    Введите ФИО
                    <input 
                        className="input phone-book__add-new-item-name"
                        type="text" 
                        onChange={this.onNameChange}
                        value={this.state.name}
                        required
                        pattern='^[A-Za-zА-Яа-яЁё\s]+$'
                        name="name"
                    />
                    <span className="error-message">Для ввода доступны буквы</span>
                </label>
                <label className={phoneGroupClassNames}>
                    Введите номер
                    <input
                        className="input phone-book__add-new-item-phone"
                        type="text"
                        onChange={this.onPhoneChange}
                        value={this.state.phone}
                        required
                        pattern="\+7-9[0-9]{2}-\d{3}-\d{2}-\d{2}"
                        name="phone"
                    />
                    <span className="error-message">Введите номер в формате +7-9XX-XXX-XX-XX</span>
                </label>
                <p className="phone-book__add-new-item-group phone-book__add-new-item-group_checkbox">
                    <input
                        className="input phone-book__add-new-item-favotite visually-hidden"
                        id="phone-book__add-new-item-favotite"
                        type="checkbox"
                        onChange={this.onFavoriteChange}
                        checked={this.state.favorite}
                    />
                    <label htmlFor="phone-book__add-new-item-favotite">Отметить как избранный</label>
                </p>
                <button type="submit" className={formBtnClassNames} disabled={!this.state.isFormValid}>Добавить</button>
            </form>
        )
    }
}
