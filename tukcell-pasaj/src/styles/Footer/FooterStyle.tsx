import Link from 'next/link';
import styled from 'styled-components';

export const Footer = styled.footer`
background-color: #27356f;
`;

export const FooterTitle = styled.h3`
margin: 0 0 1.25rem 0;
font-weight: 500;
font-size: 1rem;
line-height: 1.5rem;
color: #fff;
&:hover {
color: #ffc900
}
`;

export const FooterMenus = styled.ul`
list-style: none;
`;

export const FooterMenuItem = styled.li`
margin-bottom: .5rem;
`;

export const FooterNavLink = styled(Link)`
text-decoration: none;
color: #fff;
cursor: pointer;
font-size: 14px;
&:hover {
color: #FFC900;
}
`;

export const FooterShowMore = styled.button`
background-color: transparent;
border: none;
text-decoration: underline;
color: #fff;
`;