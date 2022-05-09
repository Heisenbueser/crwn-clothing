import { Fragment, useContext, useState } from 'react'
import { Outlet, Link } from 'react-router-dom'

import CartIcon from '../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context'

import { signOutUser } from '../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon onClick={() => setDropdownOpen(!dropdownOpen)} />
        </div>
        {dropdownOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
