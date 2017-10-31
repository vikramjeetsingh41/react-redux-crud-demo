export function createUser(user) {
  return {type: "CREATE_USER", user};
}
export function updateUser(user) {
  return {type: "UPDATE_USER", user};
}
export function deleteUser(userId) {
  return {type: "DELETE_USER", userId};
}