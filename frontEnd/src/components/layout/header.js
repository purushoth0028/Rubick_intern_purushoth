import React from 'react';
import './header.css';
import{ Button } from 'antd';

 function header() {
  return (
    <header className='header'> Rubick.ai
    <Button type='primary' className='btnh'>Admin</Button>
    </header>
  )
}
export default header;