import questions from "../spec/q&a.json";

// Provide a very, very, very simple api endpoint...
export default function(req, res, next) {
    res.send(questions);
}