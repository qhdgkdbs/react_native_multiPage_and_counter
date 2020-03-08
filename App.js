import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './src/Main'
import List from './src/list'
import SaveNum from './src/saveNum'
import Counter from './src/counter'


const navigator = createStackNavigator(
    {
        Main,
        List,
        SaveNum,
        Counter       
    },
    {
        initialRouteName : 'Main',
        defalutNavigationOption : {
            title : 'main'
        }
    }
)

export default createAppContainer(navigator)




