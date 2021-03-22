import React, {Component} from 'react'

import './book-item.scss'

export default class BookItem extends Component {
    render() {
        const {name, phone, favorite, onTrashClick, onToggleFavorite} = this.props
        const classList = favorite ? 'phone-book__item favorite' : 'phone-book__item';
        return (
            <div className={classList}>
                <span className="phone-book__item-name">ФИО: {name}</span>
                <span className="phone-book__item-phone">{phone}</span>
                <button 
                    className="btn phone-book__item-btn-star"
                    onClick={onToggleFavorite}
                >
                    <i className="fa fa-star" />
                </button>
                <button
                    className="btn phone-book__item-btn-trash"
                    onClick={onTrashClick}
                >
                    <i className="fa fa-trash" />
                </button>
            </div>
        )
    }
}
