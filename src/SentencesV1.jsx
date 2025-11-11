export const sentences = [
  {
    info: {
      id: 1,
      type: 2,
      sentence: "I would join you if I had more time",
      reversed: true,
    },
    condition: {
      if: "if",
      subject: "I",
      verb: "have",
      tense: "past simple",
      structure: "positive",
    },
    result: {
      subject: "I",
      verb: {
        auxiliary: "would",
        main: "join",
      },
      tense: "present",
      structure: "positive",
    },
  },
  {
    info: {
      id: 2,
      type: 4,
      sentence: "If he hadn't quit his job, he could be travelling with us now",
      reversed: false,
    },
    condition: {
      if: "if",
      subject: "he",
      verb: "had",
      tense: "past perfect",
      structure: "negative",
    },
    result: {
      subject: "he",
      verb: {
        auxiliary: "could",
        main: "travel",
      },
      tense: "continuous",
      structure: "positive",
    },
  },
  {
    info: {
      id: 3,
      type: 3,
      sentence: "They wouldn't have failed the exam if they had studied harder",
      reversed: true,
    },
    condition: {
      if: "if",
      subject: "they",
      verb: "study",
      tense: "past perfect",
      structure: "positive",
    },
    result: {
      subject: "they",
      verb: {
        auxiliary: "would",
        main: "failed",
      },
      tense: "past",
      structure: "negative",
    },
  },
  {
    info: {
      id: 4,
      type: 2,
      sentence: "If I had more free time, I would join a rugby club",
      reversed: false,
    },
    condition: {
      if: "if",
      subject: "I",
      verb: "have",
      tense: "past simple",
      structure: "positive",
    },
    result: {
      subject: "I",
      verb: {
        auxiliary: "would",
        main: "learn",
      },
      tense: "continuous",
      structure: "positive",
    },
  },
  {
    info: {
      id: 5,
      type: 1,
      sentence: "She is going to miss the bus if she doesn't hurry",
      reversed: true,
    },
    condition: {
      if: "if",
      subject: "she",
      verb: "hurry",
      tense: "present simple",
      structure: "negative",
    },
    result: {
      subject: "she",
      verb: {
        auxiliary: "is",
        main: "miss",
      },
      tense: "going to",
      structure: "positive",
    },
  },
  {
    info: {
      id: 6,
      type: 0,
      sentence: "If water is spread out, it evaporates faster",
      reversed: false,
    },
    condition: {
      if: "if",
      subject: "it",
      verb: "spread",
      tense: "present simple",
      structure: "positive",
    },
    result: {
      subject: "it",
      verb: {
        auxiliary: null,
        main: "evaporate",
      },
      tense: "present simple",
      structure: "positive",
    },
  },
  {
    info: {
      id: 7,
      type: 1,
      sentence: "If you say it like that, he might not understand you",
      reversed: false,
    },
    condition: {
      if: "if",
      subject: "you",
      verb: "say",
      tense: "present simple",
      structure: "positive",
    },
    result: {
      subject: "he",
      verb: {
        auxiliary: "might",
        main: "understand",
      },
      tense: "simple",
      structure: "negative",
    },
  },
  {
    info: {
      id: 8,
      type: 1,
      sentence: "You can enter as long as you have paid",
      reversed: true,
    },
    condition: {
      if: "as long as",
      subject: "you",
      verb: "pay",
      tense: "present perfect",
      structure: "positive",
    },
    result: {
      subject: "you",
      verb: {
        auxiliary: "can",
        main: "enter",
      },
      tense: "simple",
      structure: "positive",
    },
  },
  {
    info: {
      id: 9,
      type: 1,
      sentence: "It won't snow tomorrow unless the temperature drops",
      reversed: true,
    },
    condition: {
      if: "unless",
      subject: "it",
      verb: "drop",
      tense: "present simple",
      structure: "positive",
    },
    result: {
      subject: "it",
      verb: {
        auxiliary: "won't",
        main: "snow",
      },
      tense: "future simple",
      structure: "negative",
    },
  },
  {
    info: {
      id: 10,
      type: 1,
      sentence: "He'll help you whether or not you ask him to",
      reversed: true,
    },
    condition: {
      if: "whether or not",
      subject: "you",
      verb: "ask",
      tense: "present simple",
      structure: "positive",
    },
    result: {
      subject: "he",
      verb: {
        auxiliary: "will",
        main: "help",
      },
      tense: "future simple",
      structure: "positive",
    },
  },
  {
    info: {
      id: 11,
      type: 0,
      sentence: "They normally answer when you call",
      reversed: true,
    },
    condition: {
      if: "when",
      subject: "you",
      verb: "call",
      tense: "present simple",
      structure: "positive",
    },
    result: {
      subject: "they",
      verb: {
        auxiliary: null,
        main: "answer",
      },
      tense: "present simple",
      structure: "positive",
    },
  },
  {
    info: {
      id: 12,
      type: 1,
      sentence: "I'll tell you on condition that you do me a favour",
      reversed: true,
    },
    condition: {
      if: "on condition that",
      subject: "you",
      verb: "do",
      tense: "present simple",
      structure: "positive",
    },
    result: {
      subject: "I",
      verb: {
        auxiliary: "will",
        main: "tell",
      },
      tense: "future simple",
      structure: "positive",
    },
  },
  {
    info: {
      id: 13,
      type: 1,
      sentence: "She'll give you the money only if you provide a contract",
      reversed: true,
    },
    condition: {
      if: "only if",
      subject: "you",
      verb: "provide",
      tense: "present simple",
      structure: "positive",
    },
    result: {
      subject: "she",
      verb: {
        auxiliary: "will",
        main: "give",
      },
      tense: "future simple",
      structure: "positive",
    },
  },
  {
    info: {
      id: 14,
      type: 1,
      sentence: "Even if you apologise, he isn't going to forgive you",
      reversed: false,
    },
    condition: {
      if: "even if",
      subject: "you",
      verb: "apologise",
      tense: "present simple",
      structure: "positive",
    },
    result: {
      subject: "he",
      verb: {
        auxiliary: "going to",
        main: "forgive",
      },
      tense: "going to",
      structure: "negative",
    },
  },
  {
    info: {
      id: 15,
      type: 4,
      sentence: "If he were more intelligent, he would have got the job",
      reversed: false,
    },
    condition: {
      if: "if",
      subject: "he",
      verb: "be",
      tense: "past simple",
      structure: "positive",
    },
    result: {
      subject: "he",
      verb: {
        auxiliary: "would",
        main: "get",
      },
      tense: "past",
      structure: "positive",
    },
  },
];

// const alternativeConditionals = [
//   "if",
//   "provided that",
//   "as long as",
//   "unless",
//   "on condition that",
//   "as soon as",
//   "when",
//   "whether or not",
//   "even if",
//   "only if",
// ];
