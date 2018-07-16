import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "./Header.css";

const styles = {
    root: {
        flexGrow: 1
    },
    flex: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

const header = () => {
    return (
        <div id="header">
            <header>
                <AppBar position="sticky">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Grimoire
                        </Typography>
                    </Toolbar>
                </AppBar>
            </header>
        </div>
    );
};

export default withStyles(styles)(header);
