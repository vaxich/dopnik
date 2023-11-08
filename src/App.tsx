import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { OneLesson } from './1_lesson/OneLesson';
import { TwoLesson } from './2_lesson/TwoLesson';
import { ButtonBig } from './03_lesson/ButtonBig';
import { ThreeLesson } from './03_lesson/03_lesson';


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
      {/* <TwoLesson /> */}
      <ThreeLesson />
    </div>
  );
}

export default App;
