// Write your code here
import './index.css'

const TodoItem = props => {
  const {eachList, deleteFunction} = props
  const {id, title} = eachList

  const selectedList = () => {
    deleteFunction(id)
  }

  return (
    <li className="listContainer">
      <p className="description">{title}</p>
      <button type="button" className="button" onClick={selectedList}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
