export enum ActionType {
  SEND_GET_TODOS,
  RECEIVED_GET_TODOS,
  FAIL_GET_TODOS,

  SEND_STORE_TODO,
  RECEIVED_STORE_TODO,
  FAIL_STORE_TODO,

  SEND_UPDATE_TODO,
  RECEIVED_UPDATE_TODO,
  FAIL_UPDATE_TODO,

  SEND_DELETE_TODO,
  RECEIVED_DELETE_TODO,
  FAIL_DELETE_TODO,

  SET_ACTIVE_TODO,

  SET_ACTIVE_TODODETAILITEM,

  SEND_GET_TODO,
  RECEIVED_GET_TODO,
  FAIL_GET_TODO,

  SEND_GET_ITEMTODO,
  RECEIVED_GET_ITEMTODO,
  FAIL_GET_ITEMTODO,

  SEND_GET_TODODETAIL,
  RECEIVED_GET_TODODETAIL,
  FAIL_GET_TODODETAIL,

  SEND_UPDATE_DONE_TODODETAILITEM,
  RECEIVED_UPDATE_DONE_TODODETAILITEM,
  FAIL_UPDATE_DONE_TODODETAILITEM,

  SEND_UPDATE_DESC_TODODETAILITEM,
  RECEIVED_UPDATE_DESC_TODODETAILITEM,
  FAIL_UPDATE_DESC_TODODETAILITEM,

  SEND_STORE_TODODETAILITEM,
  RECEIVED_STORE_TODODETAILITEM,
  FAIL_STORE_TODODETAILITEM,
}