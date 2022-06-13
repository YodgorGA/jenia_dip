import {Route, Routes, Link,useRouteMatch,useParams} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import StreamPage from './pages/StreamPage';
import RecordingsPage from './pages/RecordingsPage';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<RecordingsPage/>}/>
        <Route path='/stream' element={<StreamPage/>}/>
        <Route path='/auth' element={<AuthPage/>}/>
      </Routes>
    </>
  );
}

export default App;
