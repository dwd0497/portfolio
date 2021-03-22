import React, {Component} from 'react';

import './header.scss'

class Header extends Component {
    render() {
        const {total} = this.props
        return (
            <>
                <h1 className="phone-book__title">Телефонный справочник</h1>
                <p className="phone-book__total">Всего {total} записей</p>
            </>
        )
    }
}

export default Header