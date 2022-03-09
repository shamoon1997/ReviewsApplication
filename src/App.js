import logo from './logo.svg';
import Review from './components/Review/Review';
import './App.css';

function App() {
  return (
    <main>
      <div className="container">
        <div className="subContainer">
          <h2>Our Reviews</h2>
          <hr></hr>
          <Review />
        </div>
      </div>
    </main>
  );
}

export default App;
