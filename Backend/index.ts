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
        Workout.find({ ownerId: result!.userId }).then((result) => {
          res.status(200).send(result);
        });
      })
      .catch((error) => {
        res.status(500).send(`Server error: ${error}`);
      });
  } else {
    res.status(400).send("Bad request. Required userId numeric value.");
  }
});

server.post("/addOrModifyWorkout", (req, res) => {
  if (req.body.username) {
    User.findOne({ username: req.body.username })
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message: "User not found" });
        }
        Workout.init()
          .then(() => {
            console.log(result.userId, req.body.workout.id);

            Workout.find({ ownerId: result.userId, id: req.body.workout.id }).then(
              (result) => {
                console.log(result);
              }
            );

            Workout.updateOne(
              { ownerId: result.userId, id: req.body.workout.id },
              { $set: req.body.workout },
              { upsert: true }
            )
              .then(() => {
                res.status(200).json({ message: "Workout added or modified successfully" });
              })
              .catch((error) => {
                // Update errors
                res
                  .status(500)
                  .json({ message: "Internal server error", error: error.message });
                console.log(error.message);
              });
          })
          .catch((error) => {
            res.status(500).json({ message: "Internal server error", error: error.message });
            console.log(error.message);
          });
      })
      .catch((error) => {
        // Find user error
        res.status(500).json({ message: "Server error", error: error.message });
        console.log(error.message);
      });
  } else {
    res.status(400).json({ message: "Missing 'username' in request body" });
  }
});

server.post("/addWorkout", async (req: Request, res: Response) => {
  Workout.validate(req.body)
    .then(() => {
      const workout = new Workout(req.body);
      Workout.init().then(() => {
        workout.save().then((result) => {
          res.status(200).send(result);
        });
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
