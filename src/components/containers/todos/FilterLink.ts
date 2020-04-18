import { connect } from 'react-redux'
import { setVisibilityFiter } from '../../../actions/todos'
import { Link } from '../../shared/toDoList/Link'

const mapStateToProps = (state: any, ownProps: any): any => ({
  active: ownProps.filter === state.visibilityFilter,
  filter: ownProps.filter
})

const mapDispatchToProps = (dispatch: any, ownProps: any): any => ({
  onClick: () => dispatch(setVisibilityFiter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
