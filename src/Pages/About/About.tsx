import React from 'react';
import Button from '../../Components/Button/Button';

const About = () => {
  return (
    <div style={{width: '300px', height: '200px', border: '1px solid blue'}}>
      About
      <br />
      <Button disabled={false} variant={'light.primary'}/>
    </div>
  );
}

export default About;
