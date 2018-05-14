let uuids = {};

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

class uuidmanager {
  generate() {

    // ensure guids are unique and only increase the length if a collision has been found
    let uuid = s4();
    if (uuids[uuid] && uuids[uuid] == 'used') {
      console.log('uuid duplicated, reassigning')
      uuid = s4() + s4();
    }
    uuids[uuid] = 'used';

    return uuid; //+  s4() +  s4() + s4(); //+ '-' + s4() + '-' + s4() + s4() + s4();
  }
}

let UUIDManager = new uuidmanager();
export { UUIDManager };