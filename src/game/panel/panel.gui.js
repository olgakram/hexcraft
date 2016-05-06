'use strict';

export default [{
  id: 'userName',
  text: 'username',
  component: 'label',
  font: {
  size: '16px',
  color: '#000'
  },
  width: 150,
  height: 50,
  position: {
    x: 520,
    y: 10
  }
},{
  id: 'surrenderButton',
  text: 'Сдаться',
  component: 'Button',
  position: {
    x: 680,
    y: 10
  },
  width: 125,
  height: 50
},
{
  id: 'logoutButton',
  text: 'Выйти',
  component: 'Window',
  position: {
    x: 680,
    y: 10
  },
  font: {
    color: '#fff'
  },
  width: 100,
  height: 50
},
{
  id: 'userStatus',
  text: '',
  component: 'label',
  font: {
  size: '16px',
  color: '#000'
  },
  width: 250,
  height: 50,
  position: {
    x: 10,
    y: 10
  }
}];