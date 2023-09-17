import express, { Express, Request, Response, json } from "express";
import cors from "cors";
import mongoose from "mongoose";
import Workout from "./models/Workout";
import User from "./models/User";

const server: Express = express();
server.use(json());
server.use(cors());
const uri =
  "mongodb+srv://GympadOperator:2MCNESOL@cluster0.e0hp7vj.mongodb.net/Gympad?retryWrites=true&w=majority";

server.post("/getWorkoutsForUser", (req, res) => {
  if (req.body.username) {
    User.findOne({ username: req.body.username })
      .then((result) => {
        Workout.find({ ownerId: result!.userId })
          .then((result) => {
            res.status(200).send(result);
          })
          .catch((error) => {
            res.status(500).send(error);
          });
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  } else {
    res.status(400).send("Bad request. Required userId numeric value.");
  }
});

server.get("/testGet", async (req: Request, res: Response) => {
  const workout = new Workout({
    id: 3,
    type: "Power",
    date: "2023-09-11T08:00:00Z",
    exercises: [
      {
        workoutId: 1,
        id: 21,
        name: "Bench Press",
        reps: 8,
        series: 4,
        weight: 185,
        bar: 45,
      },
      {
        workoutId: 1,
        id: 22,
        name: "Deadlift",
        reps: 5,
        series: 5,
        weight: 225,
        bar: 45,
      },
      {
        workoutId: 1,
        id: 23,
        name: "Squat",
        reps: 10,
        series: 3,
        weight: 200,
        bar: 45,
      },
    ],
  });

  Workout.init()
    .then(() => {
      workout
        .save()
        .then((result) => {
          res.status(200).send(result);
        })
        .catch((error) => {
          res.status(500).send(`Ewwow UwU: ${error}`);
        });
    })
    .catch((error) => {
      console.log(`Handle duplicate error: ${error}`);
    });
});

server.post("/addWorkout", async (req: Request, res: Response) => {
  Workout.validate(req.body)
    .then(() => {
      const workout = new Workout(req.body);
      Workout.init()
        .then(() => {
          workout
            .save()
            .then((result) => {
              res.status(200).send(result);
            })
            .catch((error) => {
              res.status(500).send(error);
            });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

server.post("/addUser", async (req: Request, res: Response) => {
  User.validate(req.body)
    .then(() => {
      const user = new User(req.body);
      User.init()
        .then(() => {
          user
            .save()
            .then((result) => {
              res.status(200).send(result);
            })
            .catch((error) => {
              res.status(500).send(error);
            });
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

server.get("/gaw", async (req, res) => {
  Workout.find({ type: "Strength" })
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

mongoose
  .connect(uri)
  .then((result) => {
    server.listen(6969, () => {
      console.log("Server HTTP 6969");
    });
  })
  .catch((error) => console.log(error));
