import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate() {
  return (
    <div className='loader'>
      <CircularProgress >Loading..</CircularProgress>
    </div>
  );
}