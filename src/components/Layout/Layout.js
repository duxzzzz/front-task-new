import React from 'react';
import Aux from '../../hoc/Aux';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

const layout = (props) => (
    <Aux>
        <Navigation/>
        <main>
            {props.children}
        </main>
        <Footer text="This is Footer"/>
    </Aux>
)

export default layout;