
function superbowlWin(record) {
  const winningRecord = record.find((record) => record.result === "W");
  return winningRecord ? winningRecord.year : undefined;
}

