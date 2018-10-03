import * as React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export class HeaderNavigationBar extends React.Component<any, any> {
	public render(): JSX.Element {
		return (
			<Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#/LandingPage">
                            Voting Voices
                        </a>    
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight={true}>
                        <NavItem eventKey={1} href="#/About">
                            About
                        </NavItem>
                        <NavItem eventKey={2} href="mailto:info@votingvoices.org">
                            Contact
                        </NavItem>
                        <NavItem eventKey={3} href="#/Donate">
                            Donate
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>	
            </Navbar>
		);
	}
}