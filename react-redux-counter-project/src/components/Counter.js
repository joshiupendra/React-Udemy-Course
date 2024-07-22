import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store/counter-slice';
import classes from './Counter.module.css';

// Redux with Functional Components
const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    //dispatch({ type: "INCREMENT" });
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    //dispatch({ type: "INCREASE", amount: 5 });
    dispatch(counterActions.increase(5));
  };

  const decrementHandler = () => {
    //dispatch({ type: "DECREMENT" });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    //dispatch({ type: "TOGGLE" });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// Redux with Class-based Components
/* class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}>{this.props.counter}</div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

const mapStatetoProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" })
  }
};

export default connect(mapStatetoProps, mapDispatchToProps)(Counter); */

export default Counter;
