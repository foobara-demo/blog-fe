import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import './Header.css'
import { GetCurrentUser } from './domains/FoobaraDemo/BlogAuth/GetCurrentUser'
import useQuery from './domains/hooks/useQuery'
import { Logout } from './domains/Foobara/Auth/Logout'

const activeClassName = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')

const Header: React.FC = () => {
  const { result, isLoading, isSuccess: isLoggedIn } = useQuery(GetCurrentUser)
  const navigate = useNavigate()

  const handleLogout = (): void => {
    const command = new Logout()
    command.run().then((outcome) => {
      if (outcome.isSuccess()) {
        navigate('/')
      } else {
        console.error('Logout failed:', outcome.errorMessage)
      }
    }).catch((error) => {
      console.error('Logout failed:', error)
    })
  }

  return (<header className="header">
    <nav className="nav">
      <ul className="primary-nav">
        <li>
          <NavLink
            to="/"
            end
            className={activeClassName}>
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to="/articles"
              end
              className={activeClassName}>
              Articles
            </NavLink>
          </li>
        )}
      </ul>

      <ul className="auth-nav">
        {isLoggedIn
          ? (<>
            <li>
              <NavLink
                to="/create-article"
                end
                className={activeClassName}>
                Create Article
              </NavLink>
            </li>
            <li className="username">
              {result?.username}
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="logout-button">
                Logout
              </button>
            </li>
          </>
            )
          : (isLoading
              ? (<li className="username">
                Logging in...
              </li>)
              : (
                <>
                  <li>
                    <NavLink
                      to="/register"
                      end
                      className={activeClassName}>
                      Register
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/login"
                      end
                      className={activeClassName}>
                      Login
                    </NavLink>
                  </li>
                </>
                )
            )
        }
      </ul>
    </nav>
  </header>
  )
}

export default Header
