import React, { Fragment } from "react";
import  {PropTypes}  from 'prop-types';

export default function MyComponent({props01,props02,props03,props04,props05,props06}){
    return(
        <Fragment>
            <h2>Property Validation</h2>
            
            <span>props01: { props01 ? props01 : '--- Not Setting ---'}</ span>
            <br/>
            
            <span>props02: { props02 ? props02 : '--- Not Setting ---'}</ span>
            <br/>
          
            <span>props03: { props03 ? `${props03}` : '--- Not Setting ---'} </ span>
            <br/>

            
            <span>props04: { props04 ? props04.no : '--- Not Setting ---'}</ span>
            <br/>

            <span>props05: { props05 ? props05.map((e,i) => <b key={i}>{e}</b>) : '--- Not Setting ---'}</ span>
            <br/>

            <span>props06: { props06 ? props06 : '--- Not Setting ---'}</ span>
            <br/>
          
   
            
        </Fragment>
    )
}

MyComponent.propTypes = {

    //Built-In PropTypes Validator(primoitive)
   props01 : PropTypes.stirng,
   props02 : PropTypes.number.isRequired,
   props03 : PropTypes.boolean,
   props04 : PropTypes.object,
   props05 : PropTypes.array,
   props06 : PropTypes.func
       
   }


//default value
MyComponent.defaultProps = {
    props01 : '기본값',
    props02 : 10,
    props03 : false,
    props04 : [],
    props05 : [],
    props06 : () => {} //dummy 함수
}