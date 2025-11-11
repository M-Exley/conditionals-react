// // function splitWithPhrases(str, phrases) {
// // Sort phrases by length (longest first) so we don't break "take care of" before "take care"
// const sorted = [...alternativeConditionals].sort((a, b) => b.length - a.length);
// console.log(sorted); // same as escaped

// // Escape regex special characters in phrases
// const escaped = sorted.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
// console.log(escaped); // same as sorted

// // Build regex: phrases OR words
// const pattern = new RegExp(`\\b(${escaped.join("|")})\\b|\\b\\w+\\b`, "gi");
// console.log(pattern);

// // Match all occurrences
// return currentSentence.sentence.match(pattern) || [];
// // }

// const handleHint = (sentence) => {
//     if (!sentence) return;

//     // 1️⃣  Use all your conditionals as “phrases to keep”
//     const phrases = [...alternativeConditionals];

//     // 2️⃣  Sort longest-first to avoid overlap
//     const sorted = phrases.sort((a, b) => b.length - a.length);

//     // 3️⃣  Escape regex special characters
//     const escaped = sorted.map((p) =>
//       p.replace(/[.'*+?^${}()|[\]\\]/g, "\\$&")
//     );

//     // 4️⃣  Build a case-insensitive regex to match phrases or words
//     const pattern = new RegExp(`\\b(${escaped.join("|")})\\b|\\b\\w+\\b`, "gi");

//     // 5️⃣  Match all pieces in order
//     const matches = sentence.match(pattern) || [];

//     console.log("🔹 Matches:", matches);
//     return matches;
//   };

//   // const handleHint = (sentence) => {
//   //   const findInArray = alternativeConditionals.filter(
//   //     (word) => word === currentSentence.condition
//   //   ); // works only for the object key 'condition'
//   //   console.log(findInArray); // ['if] ['unless'] ['as long as']

//   //   // function splitWithPhrases(str, phrases) {
//   //   // Sort phrases by length (longest first) so we don't break "take care of" before "take care"
//   //   const sorted = [...alternativeConditionals].sort(
//   //     (a, b) => b.length - a.length
//   //   );
//   //   console.log(sorted); // same as escaped

//   //   // Escape regex special characters in phrases
//   //   const escaped = sorted.map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
//   //   console.log(escaped); // same as sorted

//   //   // Build regex: phrases OR words
//   //   const pattern = new RegExp(`\\b(${escaped.join("|")})\\b|\\b\\w+\\b`, "gi");
//   //   console.log(pattern);

//   //   // Match all occurrences
//   //   console.log(sentence.match(pattern) || []);
//   //   return sentence.match(pattern) || [];
//   //   // }
//   // };
