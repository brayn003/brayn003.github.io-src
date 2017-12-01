const items = ['home', 'about', 'projects', 'contact']
const active = 'home';

export default function MenuReducer(state = { items, active }, action) {
  let menu = { items, active };
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