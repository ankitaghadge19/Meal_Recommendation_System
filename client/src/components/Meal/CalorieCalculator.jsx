import React, { useEffect, useState } from "react";
import {
  Box,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import ME from "../../assets/sideway.gif";
import down from "../../assets/down.png";
import axios from "axios";

function CalorieCalculator({ setTotalCalories, totalCalories }) {
  // const [totalCalories, setTotalCalories] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male"); // Default gender to 'male'
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("1"); // Default activity to '1'
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch health details from the database when the component mounts
    const fetchHealthDetails = async () => {
      try {
        const response = await axios.get("/healthDetails/:id"); // Adjust the URL with the correct user ID
        const healthData = response.data.healthData;
        if (healthData.length > 0) {
          const { age, gender, weight, height, activityLevel, totalCalories } =
            healthData[0];
          // setAge(age);
          // setGender(gender);
          // setWeight(weight);
          // setHeight(height);
          // setActivity(activityLevel);
          setTotalCalories(totalCalories);
        }
      } catch (error) {
        console.error("Error fetching health details:", error);
      }
    };

    fetchHealthDetails();
  }, [setTotalCalories]);

  const calculate = async () => {
    if (age === "" || weight === "" || height === "" || age < 1) {
      alert("Please make sure the values you entered are correct!");
    } else {
      alert(
        "Your Calorie intake and health details are updated in your profile page!"
      );
      let calculatedCalories = 0;

      // Calculate total calories based on gender and activity
      switch (gender) {
        case "Male":
          switch (activity) {
            case "1":
              calculatedCalories = Math.round(
                1.2 *
                  (66.5 +
                    13.75 * parseFloat(weight) +
                    5.003 * parseFloat(height) -
                    6.755 * parseFloat(age))
              );
              break;
            case "2":
              calculatedCalories = Math.round(
                1.375 *
                  (66.5 +
                    13.75 * parseFloat(weight) +
                    5.003 * parseFloat(height) -
                    6.755 * parseFloat(age))
              );
              break;
            case "3":
              calculatedCalories = Math.round(
                1.55 *
                  (66.5 +
                    13.75 * parseFloat(weight) +
                    5.003 * parseFloat(height) -
                    6.755 * parseFloat(age))
              );
              break;
            case "4":
              calculatedCalories = Math.round(
                1.725 *
                  (66.5 +
                    13.75 * parseFloat(weight) +
                    5.003 * parseFloat(height) -
                    6.755 * parseFloat(age))
              );
              break;
            case "5":
              calculatedCalories = Math.round(
                1.9 *
                  (66.5 +
                    13.75 * parseFloat(weight) +
                    5.003 * parseFloat(height) -
                    6.755 * parseFloat(age))
              );
              break;
            default:
              break;
          }
          break;
        case "Female":
          switch (activity) {
            case "1":
              calculatedCalories = Math.round(
                1.2 *
                  (655 +
                    9.563 * parseFloat(weight) +
                    1.85 * parseFloat(height) -
                    4.676 * parseFloat(age))
              );
              break;
            case "2":
              calculatedCalories = Math.round(
                1.375 *
                  (655 +
                    9.563 * parseFloat(weight) +
                    1.85 * parseFloat(height) -
                    4.676 * parseFloat(age))
              );
              break;
            case "3":
              calculatedCalories = Math.round(
                1.55 *
                  (655 +
                    9.563 * parseFloat(weight) +
                    1.85 * parseFloat(height) -
                    4.676 * parseFloat(age))
              );
              break;
            case "4":
              calculatedCalories = Math.round(
                1.725 *
                  (655 +
                    9.563 * parseFloat(weight) +
                    1.85 * parseFloat(height) -
                    4.676 * parseFloat(age))
              );
              break;
            case "5":
              calculatedCalories = Math.round(
                1.9 *
                  (655 +
                    9.563 * parseFloat(weight) +
                    1.85 * parseFloat(height) -
                    4.676 * parseFloat(age))
              );
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }

      // Update the totalCalories state
      setTotalCalories(calculatedCalories);

      try {
        // Make HTTP request to store data
        const response = await axios.post("/healthDetails", {
          age,
          gender,
          weight,
          height,
          activityLevel: activity,
          totalCalories: calculatedCalories, // Assign the value here
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error in storing health data:", error);
        setError("Failed to store health data");
      }

      // Log information to the console
      console.log("Age:", age);
      console.log("Gender:", gender);
      console.log("Weight:", weight);
      console.log("Height:", height);
      console.log("Activity Level:", activity);
      console.log("Total Calories", calculatedCalories);
    }
  };

  useEffect(() => {
    console.log("Inside CalorieCalulator.jsx: ", totalCalories);
  }, [totalCalories]);

  return (
    <section
      id=""
      style={{ background: "linear-gradient(to right, white, #f59e07" }}
    >
      {/* Calorie calculator */}

      <h1
        style={{
          textAlign: "center",
          paddingTop: "2rem",
          fontFamily: "fantasy",
          color: "#521818",
        }}
      >
        Calculate Your Required Calories
      </h1>
      <Box>
        <Grid container>
          <Grid item xs={3} sx={{ display: { xs: "none", md: "block" } }}>
            <img
              src={ME}
              alt="Your Gif"
              style={{ width: "100%", height: "auto", marginTop: "3rem" }}
            />
          </Grid>

          <Grid item xs={3} sx={{ display: { xs: "none", md: "block" } }}>
            <h3 style={{ textAlign: "center", marginTop: "5rem" }}>
              Your Calorie intake should be
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={down}
                alt="Your Gif"
                style={{ width: "20%", height: "auto", marginTop: "0rem" }}
              />
            </div>
            <div
              style={{
                backgroundColor: "#cfcfcf",
                padding: "8px",
                margin: "0px 4rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "1px",
                  textAlign: "center",
                }}
              >
                <p id="print">{totalCalories} kcal</p>
                <p id="error">{error}</p>
              </div>
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ padding: { xs: "1rem 1rem", md: "3rem 5rem" } }}
          >
            <Box
              sx={{
                backgroundColor: "#ffe8cf",
                padding: "1rem",
                borderRadius: "20px",
              }}
            >
              <FormControl fullWidth>
                <FormLabel></FormLabel>
                <TextField
                  id="age"
                  label="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  variant="outlined"
                  sx={{ margin: "0.5rem", backgroundColor: "#deeafe" }}
                />

                <FormControl>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ margin: "0.5rem", backgroundColor: "#deeafe" }}
                    label="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  id="Height"
                  label="Height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  variant="outlined"
                  sx={{ margin: "0.5rem", backgroundColor: "#deeafe" }}
                />
                <TextField
                  id="Weight"
                  label="Weight"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  variant="outlined"
                  sx={{ margin: "0.5rem", backgroundColor: "#deeafe" }}
                />
                <FormControl>
                  <InputLabel id="demo-simple-select-label">
                    Activity Level
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    sx={{ margin: "0.5rem", backgroundColor: "#deeafe" }}
                    label="Activity Level"
                    value={activity}
                    onChange={(e) => setActivity(e.target.value)}
                  >
                    <MenuItem value={"1"}>
                      Sedentary (little or no exercise)
                    </MenuItem>
                    <MenuItem value={"2"}>
                      Lightly active (light exercise/sports 1-3 days/week){" "}
                    </MenuItem>
                    <MenuItem value={"3"}>
                      Moderately active (moderate exercise/sports 3-5 days/week){" "}
                    </MenuItem>
                    <MenuItem value={"4"}>
                      {" "}
                      Very active (hard exercise/sports 6-7 days a week)
                    </MenuItem>
                    <MenuItem value={"5"}>
                      Extra active (very hard exercise/sports & physical job or
                      2x training){" "}
                    </MenuItem>
                  </Select>
                </FormControl>
                <Button
                  sx={{
                    margin: "0.5rem",
                    backgroundColor: "orange",
                    "&:hover": {
                      backgroundColor: "brown",
                    },
                  }}
                  variant="contained"
                  onClick={calculate}
                >
                  Calculate
                </Button>
              </FormControl>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={0}
            sx={{ marginBottom: "2rem", display: { xs: "block", md: "none" } }}
          >
            <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
              Your Calorie intake should be
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={down}
                alt="Your Gif"
                style={{ width: "20%", height: "auto", marginTop: "0rem" }}
              />
            </div>
            <div
              style={{
                backgroundColor: "#cfcfcf",
                padding: "8px",
                margin: "0px 4rem",
              }}
            >
              <div
                style={{
                  backgroundColor: "white",
                  padding: "1px",
                  textAlign: "center",
                }}
              >
                <p id="print">{totalCalories} kcal</p>
                <p id="error">{error}</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

export default CalorieCalculator;
