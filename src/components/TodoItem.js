import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
    render() {
        return (
        <div style={this.getStyle()}>
            <p>{this.props.todo.title}</p>
        </div>
        )
    }

    getStyle = () => {
        return { 
            backgroud : '#f4f4f4',
            padding: '10px',
            borderBotton: '1px #ccc dotted',
            textDecoration : this.props.todo.completed ? 'line-through' : 'none'
        }
    }
}



//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem