import * as tf from '@tensorflow/tfjs'
import DQN from "./agents/DQN";
import FlatAreaEatWorld from "./envs/FlatAreaEatWorld"
let world = new FlatAreaEatWorld({agent: DQN});
tf.disableDeprecationWarnings();
tf.setBackend("cpu").then(()=>{
    world.start();

});

//let agent = new DQN({});
