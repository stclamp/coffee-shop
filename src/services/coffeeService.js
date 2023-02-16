const useCoffeeService = () => {
  const getAllCoffee = async () => {
    try {
      const url = "http://localhost:3001/coffee";
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}. Status: ${response.status}.`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { getAllCoffee };
};

export default useCoffeeService;
