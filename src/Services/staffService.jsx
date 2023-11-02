class StaffService {
  async getUserByID(id) {
    try {
      const response = await fetch("../src/staffDummy.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const jsonData = await response.json();

      const user = jsonData.find((user) => user.id === id);
      console.log(user);

      if (user) {
        return user;
      } else {
        throw new Error("User Not Found");
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default StaffService;
