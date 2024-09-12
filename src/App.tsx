import Router from './router/Router';
import styles from './App.module.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className={styles.globalContainer}>
      <Router />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
}

export default App;
