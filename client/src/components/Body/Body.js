import { Route, Switch } from 'react-router-dom';

import Register from '../Authentication/Register';
import Login from '../Authentication/Login';
import Main from './Main';
import FoodList from './FoodMenu/FoodList';

import './Body.css'

const Body = () => {
    return (
        <div className='body-wrapper'>
            < Switch >
                <Route path="/" exact component={Main} />
                <Route path="/food-list" exact component={FoodList} />
                <Route path="/users/login" exact component={Login} />
                <Route path="/users/register" exact component={Register} />
            </Switch >
        </div>
    )
}

export default Body