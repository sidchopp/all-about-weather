import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

//CSS
import '../../App.css'

export default function CircularIndeterminate() {
  return (
    <div className='App'>
      <CircularProgress >Loading..</CircularProgress>
    </div>
  );
}