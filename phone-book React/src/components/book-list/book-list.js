import React from 'react'
import BookItem from '../book-item/'

import './book-list.scss'

const BookList = ({сontactList, onTrashClick, onToggleFavorite}) => {
    const contacts = сontactList.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id}>
                <BookItem 
                    {...itemProps}
                    onTrashClick = {() => onTrashClick(id)}
                    onToggleFavorite = {() => {onToggleFavorite(id)}}
                />
            </li>
        )
    })

    return (
        <ul className='phone-book__list'>
            {contacts}
        </ul>
    )
}

export default BookList