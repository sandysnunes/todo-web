import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {


    getStyle = () => {
        return {
            backgroud: '#f4f4f4',
            padding: '10px',
            borderBotton: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {

        const {id, title} = this.props.todo

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {title}
                </p>
            </div>
        )
    }


}


//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem