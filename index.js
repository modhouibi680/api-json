const express = require("express");
const path = require("path");

const getResults = (hostName) => {
  return [
    {
      id: 1,
      name: "Jeremías del Pozo",
      location: "Incheon",
      cardIntro: "You miss 100% of the shots you don’t take.",
      coverPhoto: hostName + "/images/1_cover.png",
      profilePhoto: hostName + "/images/1_profile.png",
      job: "incididunt ut labore",
      ProfileIntro:
        "quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia",
    },
    {
      id: 2,
      name: "Kendasha Wood",
      location: "Doha",
      cardIntro: "You miss 100% of the shots you don’t take.",
      coverPhoto: hostName + "/images/2_cover.png",
      profilePhoto: hostName + "/images/2_profile.png",
      job: "Lorem ipsum ",
      ProfileIntro:
        "co laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe",
    },
    {
      id: 3,
      name: "Donat Twerski",
      location: "Montevideo",
      cardIntro: "You miss 100% of the shots you don’t take.",
      coverPhoto: hostName + "/images/3_cover.png",
      profilePhoto: hostName + "/images/3_profile.png",
      job: "iusmod tempor inci",
      ProfileIntro:
        "ciquip ex ea commodo consequat.aliquip ex ea coure dolor in rep mmodo consequat. Duis aute irure dolor in reprehe",
    },
    {
      id: 4,
      name: "Sebastian Westergren",
      location: "Washington D.C.",
      cardIntro: "You miss 100% of the shots you don’t take.",
      coverPhoto: hostName + "/images/4_cover.png",
      profilePhoto: hostName + "/images/4_profile.png",
      job: "equat.aliqui",
      ProfileIntro:
        "ciquip ex ea commodo quat.  aute consequat.aliquip ex ea coure dolor in rep mmodo conse dolor in reprehe",
    },
    {
      id: 5,
      name: "Alexandre Paiva",
      location: "Brussels",
      cardIntro: "You miss 100% of the shots you don’t take.",
      coverPhoto: hostName + "/images/5_cover.png",
      profilePhoto: hostName + "/images/5_profile.png",
      job: "Duis aute irur",
      ProfileIntro:
        "aute consequat.aliquip ex ea coure dolor in rep mmodo consolor in rep mmodo conse dolor in reprehe",
    },
    {
      id: 6,
      name: "Jerry Lopez",
      location: "Cali",
      cardIntro:
        "When you enter into any new area of science, you almost always find yourself with a ...",
      coverPhoto: hostName + "/images/6_cover.png",
      profilePhoto: hostName + "/images/6_profile.png",
      job: "Ducoure dolo irur",
      ProfileIntro:
        "aliquip ex ea coure dolor in rep mmod coure dolor in rep mmodo consolor in rep mmodo conse dolor in reprehe",
    },
    {
      id: 7,
      name: "Manuel Nash",
      location: "Warsaw",
      cardIntro:
        "Have you ever finally just gave in to the temptation and read your horoscope in the newspaper on Sunday morning?",
      coverPhoto: hostName + "/images/7_cover.png",
      profilePhoto: hostName + "/images/7_profile.png",
      job: "Ducoure dolo irur",
      ProfileIntro:
        "aliquip ex ea coure dolor in rep mmod coure aliquip ex ea coure dolor in rep mmod coure dolor in rep mm dolor in reprehe",
    },
    {
      id: 8,
      name: "Angela Longoria",
      location: "Brussels",
      cardIntro: "You miss 100% of the shots you don’t take.",
      coverPhoto: hostName + "/images/8_cover.png",
      profilePhoto: hostName + "/images/8_profile.png",
      job: "Dulorem ipur",
      ProfileIntro:
        "aliquip ex ea coure dolor in rep mmod coure aliquip ex ea coure dolor in rep mmod coure dolor in rep mmquip ex ea commodo consequat. Duis aute irure",
    },
    {
      id: 9,
      name: "Ored Sjögren",
      location: "Rome",
      cardIntro: "aliquip ex ea coure dolor in rep mmod coure dolor",
      coverPhoto: hostName + "/images/9_cover.png",
      profilePhoto: hostName + "/images/9_profile.png",
      job: "Event Photographer",
      ProfileIntro:
        "Gamer. Friendly tv fanatic. Internet advocate. Alcohol trailblazer. Devoted troublemaker.",
    },
    {
      id: 10,
      name: "Birdie Hoffman",
      location: "Budapest",
      cardIntro: "liquip ex ea coure dolor in rep mmo",
      coverPhoto: hostName + "/images/10_cover.png",
      profilePhoto: hostName + "/images/10_profile.png",
      job: "Event Photographer",
      ProfileIntro:
        "te velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt ",
    },
  ];
};

const app = express();

app.use("/images", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Home Page");
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});

app.get("/search-result", (req, res) => {
  const results = getResults(req.hostname);
  res.json(results);
});

const findProfile = (results, userID) => results.find((p) => p.id === userID);

app.get("/profile/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const results = getResults(req.hostname);
  const profile = findProfile(results, id);
  res.json(profile);
});

module.exports = app;
