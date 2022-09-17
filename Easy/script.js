var name1 = "Yareline";
var name2 = "Alexis";

if (name1.length > name2.length) {
  console.log(
    name1 +
      " is longer than " +
      name2 +
      " by " +
      (name1.length - name2.length) +
      " letters."
  );
} else {
  console.log(
    name2 +
      " is longer than " +
      name1 +
      " by " +
      (name2.length - name1.length) +
      " letters."
  );
}
