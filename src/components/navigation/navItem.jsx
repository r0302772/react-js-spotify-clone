import {Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import React from 'react'
import BootstrapIcon from '../../utils/bootstrapIcon.jsx'
import styled from 'styled-components'

const NavContainer = styled(Row)`
  *:focus {
    outline: none;
  }
`

const NavItem = ({iconOnly, icon, url, title, isBrand}) => {

    const brandColumn = (
        <Col sm={12}>
            <hr/>
        </Col>
    )

    const Title = ({children}) => {
        return isBrand ? <h3>{children}</h3> : <h4>{children}</h4>
    }

    const addActiveClass = ({isActive}) => {
        return (!isBrand && isActive) ? 'text-muted' : 'text-reset'
    }

    const textNav = (
        <Col sm={10}>
            <NavLink to={url}
                     className={(x) => `${addActiveClass(x)} text-decoration-none`}>
                <Title>{title}</Title>
            </NavLink>
        </Col>
    )

    return (
        <NavContainer>
            <Col sm={iconOnly ? 12 : 2} className="text-center ml-1">
                <NavLink to={url} className={addActiveClass}>
                    <Title><BootstrapIcon iconName={icon}/></Title>
                </NavLink>
            </Col>

            {!iconOnly && textNav}

            {isBrand && brandColumn}

        </NavContainer>
    )
}

export default NavItem