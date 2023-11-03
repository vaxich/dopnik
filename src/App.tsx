import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { OneLesson } from './1_lesson/OneLesson';
import { TwoLesson } from './2_lesson/TwoLesson';


export type PropsType = {
  userId: number
  id: number
  title: string
  completed: boolean
}

function App() {
  
  return (
    <div className="App">
      {/* <OneLesson /> */}
      <TwoLesson />
    </div>
  );
}

export default App;
