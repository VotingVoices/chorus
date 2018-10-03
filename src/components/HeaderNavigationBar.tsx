import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import vvlogo from './vvlogo.png'

export class HeaderNavigationBar extends React.Component<any, any> {
	public render(): JSX.Element {
		return (
			<Navbar className="vv-navbar">
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#/LandingPage">
                            <img src={vvlogo} />
                        </a>    
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight={true}>
                        <NavItem eventKey={2} href="mailto:info@votingvoices.org">
                            Contact
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>	
            </Navbar>
		);
	}
}