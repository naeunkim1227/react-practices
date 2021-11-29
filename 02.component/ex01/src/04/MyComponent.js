import React, { Fragment } from "react";
import  {PropTypes}  from 'prop-types';

export default function MyComponent({props01,props02,props03,props04,props05,props06, props07,props08,props09}){
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
          
            <span>props07: { props07 ? props07 : '--- Not Setting ---'}</ span>
            <br/>
          
            <span>props08: { props08 ? props08.map((e,i) => e? <b key={i}>{'true'}</b> : <b key={i}>{'false'}</b> ) : '--- Not Setting ---'}</ span>
            <br/>

            <span>props09: 
                { props09 ? 
                    <div>
                        <h3>{props09.no}</h3>
                        <h4>{props09.name}</h4>
                        <h5>{props09.email}</h5>
                    </div> 
                
                : '--- Not Setting ---'}
            </ span>
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
   props06 : PropTypes.func,
       

    //Built-In PropTypes Validator(Combind Primitive)
    props07 : PropTypes.oneofType([PropTypes.stirng, PropTypes.number]).isRequired,
    props08 : PropTypes.arrayof(PropTypes.boolean).isRequired,
    props09 : PropTypes.shape({
        no: PropTypes.number.isRequired,
        name: PropTypes.stirng.isRequired,
        email: PropTypes.stirng.isRequired
    }).isRequired


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