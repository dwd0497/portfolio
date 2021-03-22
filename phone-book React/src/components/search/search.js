import React, {Component} from 'react'

import './search.scss'

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: "",
            isValid: true
        };

        this.onSearchChange = this.onSearchChange.bind(this)
    }
    
    onSearchChange (evt) {
        const searchValue = evt.target.value.toLowerCase();
        const isValid = evt.target.checkValidity();
        
        this.setState({searchValue, isValid});
        this.props.onSearchValueUpdate(searchValue);
    }

    render () {
        let classNames ="phone-book__search"

        if (!this.state.isValid) {
            classNames += " error"
        }
        return (
            <div className={classNames}>
                <input
                    className="input phone-book__search-input"
                    placeholder="Поиск контакта"
                    type="text"
                    onChange={this.onSearchChange}
                    pattern='^[A-Za-zА-Яа-яЁё\s]+$'
                />
                <span className="error-message">Для ввода доступны только буквы</span>
            </div>   
        )
    }
}
