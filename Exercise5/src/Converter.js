import axios from "axios";

export const Converter = async (latitude, longitude, setAddress) => {
  try {
    const response = await axios.get(
      "https://api.opencagedata.com/geocode/v1/json",
      {
        params: {
          q: `${latitude},${longitude}`,
          key: "3e0aa6ff663e4ae196cfe8071e5f3388", // Replace with your OpenCage API key
        },
      }
    );

    const { results } = response.data;
    if (results.length > 0) {
      const { formatted } = results[0];
      setAddress(formatted);
    } else {
      setAddress("No results found");
    }
  } catch (error) {
    console.error("Error:", error);
    setAddress("An error occurred");
  }
};
