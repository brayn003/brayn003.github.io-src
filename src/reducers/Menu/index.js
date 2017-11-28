const menu = {
  items: ['home', 'about', 'projects', 'contact'],
  active: 'home'
}

export default function MenuReducer(state = menu, action) {
  switch(action.type) {
    case 'MENU_ACTIVE_SET':
      menu.active = action.payload;
      break;
  }
  return menu;
}

export function setActiveMenu(active) {
  return {
    type: 'MENU_ACTIVE_SET',
    payload: active
  }
}