function checkAnswer() {
  const ans = document.getElementById("answer").value;
  if (ans === "2019") {
    document.getElementById("result").innerHTML =
      "🎉 Access Granted! Happy New Year 💫";
  } else {
    document.getElementById("result").innerHTML =
      "❌ Wrong. Think deeper.";
  }
}
