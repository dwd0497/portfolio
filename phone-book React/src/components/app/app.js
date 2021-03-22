import React, {Component} from 'react';
import Header from '../header/'
import SearchPanel from '../search/'
import BookList from '../book-list/'
import AddNewItem from '../add-new-item/'
import './app.scss'

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name:"Тор", phone:"+7", favorite: true, id: 1},
                {name:"Халк", phone:"+7-985-358-50-99", id: 2},
                {name:"Тони Старк", phone:"+7-777-777-77-77", id: 3},
                {name:"Черная Вдова", phone:"+7-555-555-55-55", favorite: true, id: 4},
                {name:"Ванда Максимофф", phone:"+7-666-666-66-66", id: 5},
            ],
            searchValue:""
        };

        this.initialIndex = 5;
        this.onTrashClick = this.onTrashClick.bind(this);
        this.addNewItem = this.addNewItem.bind(this);
        this.onToggleFavorite = this.onToggleFavorite.bind(this);
        this.onSearchValueUpdate = this.onSearchValueUpdate.bind(this);
    }

    onTrashClick(id) {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id ===id)

            const newArr = [...data.slice(0, index), ...data.slice(index+1)]
            
            return {
                data: newArr
            }
        })
    }

    onToggleFavorite(id) {
        this.setState(({data}) => {
            const index = data.findIndex((item) => item.id ===id)

            const updatedItem = {...data[index], favorite: !data[index].favorite}

            const newArr = [...data.slice(0, index), updatedItem, ...data.slice(index+1)]
            
            return {
                data: newArr
            }
        })
    }

    addNewItem({name, phone, favorite}) {
        const newItem = {name: name, phone: phone, favorite: favorite, id: ++this.initialIndex};

        let isDouble = this.state.data.some((item) => name.toLowerCase() === item.name.toLowerCase() || phone === item.phone)
        
        if (!isDouble) {
            this.setState(({data}) => {

                const newArr = [...data, newItem]
    
                return {
                    data: newArr
                }
            })
        } else {
            alert('Дубли запрещены')
        }
    }

    searchItem(items, searchValue) {
        if (searchValue.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.name.toLowerCase().indexOf(searchValue) > -1
        })
    }

    onSearchValueUpdate (searchValue) {
        this.setState({searchValue})
    }

    render() {
        const {data, searchValue} = this.state;
        const visibleItems = this.searchItem(data, searchValue);

        return (
            <div className="phone-book">
                <Header total={this.state.data.length} />
                <SearchPanel onSearchValueUpdate={this.onSearchValueUpdate} />
                <BookList 
                    сontactList={visibleItems}
                    onTrashClick={this.onTrashClick}
                    onToggleFavorite={this.onToggleFavorite}
                />
                <AddNewItem 
                    addNewItem={this.addNewItem}
                />
            </div>
        )
    }
}
