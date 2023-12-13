const state = {
  groupCard: ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"],
  merge: [],
  show: 0,
  match: [],
  firsV: "",
  table: document.getElementById("table"),
  ask: async () => {
    console.log("fsdf");
    state.merge = state.groupCard.concat(state.groupCard);
    state.merge = state.groupCard.concat(state.merge);
    state.merge = state.groupCard.concat(state.merge);
    // state.merge = state.shuffle(state.merge);
    state.handleCard();
  },
  shuffle: array => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  },

  handleCard: async () => {
    let inner = "";
    state.merge.forEach((card, i) => {
      inner += `
    <div class="cardb" >
       <div class="card_content" id="card_content-${i}">${card}</div>
    </div>|`;
    });
    state.table.innerHTML = await inner;
  },
};

window.onload = () => state.ask();
