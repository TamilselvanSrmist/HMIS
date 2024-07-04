import {configureStore} from '@reduxjs/toolkit';
import taskSlice from './Slices/Taskslice';

export const Store = configureStore ({
  devTools:true,
  reducer:{
    tasks:taskSlice
  }

});