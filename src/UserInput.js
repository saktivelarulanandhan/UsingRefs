import React, { useEffect, Fragment, useRef } from 'react';
import PropTypes from 'prop-types';

import HOCReact from './hoc';

export const UserInput = (props) => {
  const InputElement = useRef();

  useEffect(() => {
    //InputElement.current.focus();
    return () => {
      console.log("React hook that works as componentDidUnMount method in UserInput.js");
    }

  });

  

  return (
    <HOCReact className="textColor">
      <input type="text" name="Type" ref={InputElement} placeholder="Type Something" onChange={props.onuserTyped.bind(this)} />
      <br /> <br /> <span> he typed this many times {typeof props.counter}
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span> <br />
      <span>
        This is multiple text for HOC concept
            </span>
    </HOCReact>
  );
}
// Have change counter to string to prove the propTypes working :)
UserInput.propTypes = {
  onuserTyped: PropTypes.func,
  counter: PropTypes.number
}