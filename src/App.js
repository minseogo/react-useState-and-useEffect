import React from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import Board from './component/About';
import About from './component/Board';
import Entry from './component/Entry';

function App() {
  return (
    <div className='App'>
      <div>
        {/* 네비게이션 */}
        <Link to ="/about">회사소개</Link> 
        <Link to ="/board">공지사항</Link>
        {/* 사용할 시 초기화를 시킴 즉 랜딩을 함, 로고에만 사용하기 */}
        <a href="">로고</a> 
      </div>
      <Routes>
        <Route path='/' element={<Entry></Entry>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/board' element={<Board></Board>}></Route>
      </Routes>
      <aside>
        저는 퀵입니다.
      </aside>
      <footer>
        저는 하단입니다.
      </footer>

    </div>
  );
}

export default App;