import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Views/Home/Home'
import About from './Views/About/About'
import Services from './Views/Service/Services'
import Testimonial from './Views/Testimonial/Testimonial'
import Contact from './Views/Contact/Contact'
import Navbar from './components/Navbar/Navbar'



export default function Routes() {
    return (
        <Router>
            <Navbar>
                <main>
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} exact />
                        <Route path="/service" component={Services} exact />
                        <Route path="/testimonial" component={Testimonial} exact />
                        <Route path="/contact" component={Contact} exact />
                    </Switch>
                </main>
            </Navbar>
        </Router>
    );
}
