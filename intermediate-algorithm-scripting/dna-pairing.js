/* jshint esversion: 6 */
function pairElement(str) {
  const dna = str.split("");
  const pairs = {'G':'C','C':'G','A':'T','T':'A'};
  return dna.map((e) => {

    return [e,pairs[e]];
  });
}

pair("GCG");
