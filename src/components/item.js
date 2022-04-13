import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Item extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    onDelete() {
        this.props.onDelete(this.props.item);
    }

    onEdit(e) {
        e.preventDefault();
        let newItem = this.props.item;
        if (e.target[0].value.length !== 0) {
          newItem.name = e.target[0].value;
          this.props.onEdit(newItem);
        }
    }

    render() {
        return (
            <div className='three-container'>
                <div className='name three-child'>{this.props.item.name}</div>
                <div className='delete three-child'>
                <button onClick={this.onDelete}>Delete</button>
                </div>
                <div className='edit three-child'>
                    <Link className='edit-link' to={{
                        pathname: `/edit_item/${this.props.item.id}`,
                        name: this.props.item.name,
                        onEdit: this.onEdit
                    }}>
                        Edit
                    </Link>
                </div>
            </div>
        );
    }
}
export default Item;