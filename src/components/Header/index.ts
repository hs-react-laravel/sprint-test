import { connect } from 'react-redux'
import { setCurrentMenu } from 'store/actions'
import Header from './Header'

const mapStateToProps = (state: TakeHome.StoreState) => ({
  currentMenu: state.ui.menu
})

const mapDispatchToProps = {
  setCurrentMenu
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)