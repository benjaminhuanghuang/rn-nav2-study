/*
hold our navigation functions. We’ll have two main functions: goToAuth() & goHome().
*/
import { Navigation } from 'react-native-navigation'

//sets our root route stack to a bottomTabs
export const goToAuth = () => Navigation.setRoot({
  root: {
    bottomTabs: {
      id: 'BottomTabsId',
      children: [
        {
          component: {
            name: 'SignIn',
            options: {
              bottomTab: {
                fontSize: 12,
                text: 'Sign In',
                icon: require('../assets/signin.png')
              }
            }
          },
        },
        {
          component: {
            name: 'SignUp',
            options: {
              bottomTab: {
                text: 'Sign Up',
                fontSize: 12,
                icon: require('../assets/signup.png')
              }
            }
          },
        },
      ],
    }
  }
});
//sets the route stack to a stack navigation
export const goHome = () => Navigation.setRoot({
  root: {
    stack: {
      id: 'App',
      children: [
        {
          component: {
            name: 'Home',
          }
        }
      ],
    }
  }
})