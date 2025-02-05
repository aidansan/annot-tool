import React from "react";

export const NOTES = [];
 
export const str_word_diff_swap = (orig_str, new_str) => {
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

  export const str_word_diff = (orig_str, new_str) => {
    const re = /\s+/;
    const orig_words = orig_str.split(re);
    const new_words = new_str.split(re);
    
    // Find matching prefix length
    let prefix_len = 0;
    while (prefix_len < orig_words.length && 
           prefix_len < new_words.length && 
           orig_words[prefix_len] === new_words[prefix_len]) {
        prefix_len++;
    }
    
    // Find matching suffix length
    let suffix_len = 0;
    while (suffix_len < orig_words.length - prefix_len && 
           suffix_len < new_words.length - prefix_len && 
           orig_words[orig_words.length - 1 - suffix_len] === new_words[new_words.length - 1 - suffix_len]) {
        suffix_len++;
    }
    
    const diff = new_words.map((word, idx) => {
        if (idx < prefix_len || idx >= new_words.length - suffix_len) {
            // Word is part of matching prefix or suffix
            return <span key={idx}>{word + " "}</span>;
        } else {
            // Word is part of the insertion/change
            return <span key={idx}><mark>{word}</mark>{" "}</span>;
        }
    });
    
    return diff;
}