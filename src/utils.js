import React from "react";

export const COLNAMES = ["gen_1", "gen_2", "gen_3"];

export const str_word_diff = (orig_str, new_str) => {
    const re = /\s+/;
    const orig_words = orig_str.split(re);
    const new_words = new_str.split(re);
  
    const diff = new_words.map((word, idx) => {
      if (word === orig_words[idx]) {
        return <span>{word + " "}</span>;
      } else {
        return <><mark>{word}</mark><span>{" "}</span></>;
      }
    });
    return diff
  
    //return diff.join(" ");
  }