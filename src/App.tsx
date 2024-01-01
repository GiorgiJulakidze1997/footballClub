import './App.css'
import * as stylex from '@stylexjs/stylex';


const styles = stylex.create({
  introduction: {
    color: 'blue'.
  },
});



function App() {

  return (
    <div>

      <h1 {...stylex.props(styles.heading)}>
        Coming soon ...
      </h1>
    </div>
  )
}

export default App
