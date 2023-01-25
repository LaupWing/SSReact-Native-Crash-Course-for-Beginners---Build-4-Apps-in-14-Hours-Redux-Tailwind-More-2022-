export default (users, userLoggedInId) => {
   const newUsers = {...users}
   delete newUsers[userLoggedInId]

   const [id, user] = Object.entries(newUsers).flat()

   return {
      id,
      ...user
   }
}