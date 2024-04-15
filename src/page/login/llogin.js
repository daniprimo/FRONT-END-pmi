import { Component } from "react";
import AuthService from '../../api/api'


class App extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);


        this.state = {
            showModeratorBoard: false,
            showAdminBoard: false,
            currentUser: undefined
        }
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser()

        if (user) {
            this.setState({
                currentUser: AuthService.getCurrentUser(),
                showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
                showAdminBoard: user.roles.includes("ROLE_ADMIN")
            })
        }
    }

    logOut() {
        AuthService.logout();
    }



}