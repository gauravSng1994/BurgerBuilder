###1) PureComponent
`PureComponent` class is just like a normal `Component` class. It just allows you not to
 implement the manual comparision of all the props and handler functions during `shouldComponentUpdate`
 life cycle in a _class-full_ component. 

###2) React.memo()

React.memo() is a higher order component that allows us to implement the `shouldComponentUpdate()` life cycle hook in a functional component.

It just requires to enclose the functional component in this hoc.

Once you do so, you no longer require to compare the states and props for re-rendering.

###3) Radium :
 
 It is third party module that can be used for adding pseudo-elements and media queries in our normal javascript inline styles.
'radium' module provides us a higher order component that can be used to wrap the component on which we want to apply inline styling. 
 
**Steps :**

    a) install the dependency with the command 'npm i --save radium'
    b) import it in the file where it has to be used.
        import Radium, {StyleRoot} from 'radium'
    c) wrap the component with 'Radium()' hoc.
    d) Use <StyleRoot> as the root element in App.js

Now you are ready to use all types of pseudo-elements and media queries in javascript style objects used for inline styling in react.

**eg :** 

 `styles = {
    
    color:'white',
    
    backgroundColor:'red',
    
    ':hover':{
        color:'#aaa',
        backgroundColor: 'salmon'
    }
    
    '@media (min-width: 500px)': {
        width: '450px'
    }
 }`
 
Now the `':hover'` pseudo-element and `'@media (min-width: 500px)'` media query becomes the valid inline style property for reactJs.

For further query, visit the official documentation at https://www.npmjs.com/package/radium.