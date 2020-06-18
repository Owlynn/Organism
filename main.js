// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
    return newStrand;
};

const pAequorFactory = (number, baseArray) => {
    return {
      specimenNum : number,
      dna : baseArray,
      mutate () {
        this.dna = this.dna[Math.floor(Math.random() * 15)];
        return this.dna
      }
    }
  };
 
  
    console.log(pAequorFactory(1,mockUpStrand))
    console.log(pAequorFactory(2,mockUpStrand))








