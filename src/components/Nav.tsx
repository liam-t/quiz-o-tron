import React from 'react';
import styled from 'styled-components/macro';
import { useLocation, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';


const Nav:React.FC = () => {
  const { pathname } = useLocation();
  type Link = { pathname: string, icon: IconDefinition };
  type Links = [Link, Link];
  const links: Links = [{
    pathname: '/',
    icon: faHome,
  }, {
    pathname: '/input',
    icon: faEdit,
  }];
  const activeLink = links.find((item: Link) => item.pathname !== pathname) as Link;
  return (
    <NavOuter>
      <LinkStyled to={activeLink.pathname}>
        <FontAwesomeIcon icon={activeLink.icon} />
      </LinkStyled>
    </NavOuter>
  );
};
export default Nav;


const NavOuter = styled.nav`
  position: fixed;
  top: 30px;
  left: 0;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  z-index: 9999;
`;
const LinkStyled = styled(Link)`
  display: block;
  color: black;
  padding: 5px;
`;
