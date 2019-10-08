import React from 'react';
import TopBar from '../components/TopBar';
import InsetDividers  from '../components/InsetDividers';
import Grid from '@material-ui/core/Grid';
import DisplayDate from '../components/DisplayDate';
 const SearchFood = props =>{

  return(
    <>

    <TopBar/>
    <DisplayDate></DisplayDate>
    <InsetDividers></InsetDividers>
    </>
    );



 }
export default SearchFood;
