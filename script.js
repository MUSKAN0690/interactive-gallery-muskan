const data = [
  ["asian bird", "Asia boasts a rich diversity of bird species, ranging from vibrant tropical species to majestic raptors and elusive forest dwellers. In the lush rainforests of Southeast Asia, colorful birds like the resplendent Quetzal and the striking Scarlet Macaw captivate with their brilliant plumage and melodious calls. The Himalayan region is home to iconic species such as the majestic Lammergeier, with its impressive wingspan, and the elusive Snow Leopard, known for its stealth and agility.."],
    ["deer", "Deer are graceful, herbivorous mammals found in various habitats across Asia, including forests, grasslands, and mountains. They are known for their slender bodies, elegant movements, and branching antlers (in males of most species), which they use for defense, dominance, and mating displays."],
    ["Eagle", "Eagles are majestic birds of prey renowned for their keen eyesight, powerful talons, and impressive aerial abilities. Found across Asia in diverse habitats ranging from forests and mountains to plains and coastlines, eagles are apex predators that play vital roles in maintaining ecosystem balance."],
    ["polar bear", "The polar bear, or Ursus maritimus, is a magnificent apex predator native to the Arctic region, including parts of Asia such as Siberia. Known for its distinctive white fur, massive size, and superb adaptation to its icy environment, the polar bear is a symbol of the Arctic wilderness."],
    ["horse", "The horse, Equus ferus caballus, is a magnificent and versatile animal that has played a crucial role in the history and development of civilizations across Asia and the world. Domesticated thousands of years ago, horses have been integral to transportation, agriculture, warfare, and leisure activities."],
    ["monkey", "Monkeys are fascinating and highly adaptable primates found throughout Asia in a variety of habitats, including forests, mountains, and urban areas. With their dexterous hands, expressive faces, and playful antics, monkeys capture the imagination of people around the world."],
    ["owl", "Owls are fascinating nocturnal birds of prey known for their silent flight, keen vision, and haunting calls. Found throughout Asia in a variety of habitats including forests, grasslands, and urban areas, owls are revered for their mysterious and enigmatic nature."],
    ["panda", "The panda, specifically the giant panda (Ailuropoda melanoleuca), is one of the most iconic and beloved animals native to Asia, specifically found in China. Renowned for its distinctive black and white coat and endearing appearance, the giant panda holds a special place in the hearts of people worldwide."],
    ["parrot", "Parrots are colorful and intelligent birds found throughout Asia and other parts of the world. Renowned for their vibrant plumage, ability to mimic sounds, and playful personalities, parrots captivate the hearts of people worldwide."],
    ["dogs", "Dogs are one of humanitys oldest and most beloved animal companions, found in homes and communities across Asia and around the world. As loyal, affectionate, and versatile animals, dogs hold a special place in the hearts of people from diverse cultures and backgrounds."],
    ["racoon", "Raccoons are highly adaptable and intelligent mammals native to North America, but they have also been introduced to parts of Asia, particularly Japan. Known for their distinctive black mask markings around their eyes and their ringed tails, raccoons are often recognized as urban scavengers and opportunistic omnivores."],
    ["wolf", "Wolves are majestic and highly adaptable carnivores that have historically roamed across vast territories, including parts of Asia such as Siberia, Mongolia, and the Indian subcontinent. Revered for their intelligence, social structures, and hunting prowess, wolves play a crucial role in maintaining ecosystem health and balance."]
  ];
  
  const gallery = document.getElementById('g');
  let listItems = [];
  
  for (const item of data) {
    listItems.push(`<div> <img class="gallery" src="/img/${item[0]}.jpg" alt="${item[0]}"></img> <p style="display:none; font-size:100px">${item[1]}</p> </div>`);
  }
  
  gallery.insertAdjacentHTML("beforeend", listItems.join(' '));
  
  gallery.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains("big")) {
      target.className = "gallery";
      target.parentElement.children[1].style = "display:none; font-size:100px";
    } else {
      target.className += " big";
      target.parentElement.children[1].style = "display:block; font-size:100px";
    }
  });