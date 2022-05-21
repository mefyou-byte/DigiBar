<script>
  const drinks = [
    {
      id: 1,
      name: 'A beer',
      description: "Simple, thirst quenching, traditional, manly.",
      img: 'pintje.jpg',
      ingredients: ['water', 'hop', '???']
    },
    {
      id: 2,
      name: 'Duvel',
      description: "'Pff regular beer is for the weak. I only drink heavy beers, like réal men.' - The typical loser who can't handle their liquor.",
      img: 'duvel.jpg',
      ingredients: ['water', 'strong hop']
    },
    {
      id: 3,
      name: 'Tea',
      description: "Flavoured warm water, yum! Default: Rooibos! For other options (honeybush, earl grey, something mango): come see me.",
      img: 'tea.jpeg',
      ingredients: ['water', 'herbs']
    },
    {
      id: 4,
      name: 'Coffee',
      description: "'Extremely crap but hey, it has caffeine!",
      img: 'coffee.jpeg',
      ingredients: ['water', 'coffee beans', 'milk (optional)']
    },
    {
      id: 5,
      name: 'White wine',
      description: "Atleast when you spill this, it doesn't leave a stain.",
      img: 'white-wine.jpg',
      ingredients: ['grapes']
    },
    {
      id: 6,
      name: 'Red wine',
      description: "Like white wine, but more advanced.",
      img: 'red-wine.jpeg',
      ingredients: ['grapes', 'grape peels']
    },
    {
      id: 7,
      name: 'Cava',
      description: "Bubbels! No Lisa, ffs, it's not 'real' champagne. Deal with it.",
      img: 'cava.png',
      ingredients: ['also water and grapes I guess?', 'gas somehow']
    },
    {
      id: 8,
      name: 'Mimosa',
      description: "The socially accepted beverage at 10am.",
      img: 'mimosa.jpg',
      ingredients: ['Cava', 'Sinaasappelsap']
    },
    {
      id: 9,
      name: 'Wodka Orange',
      description: "If you need some vitamine C.",
      img: 'screwdriver.jpg',
      ingredients: ['Wodka', 'OJ']
    },
    {
      id: 10,
      name: 'Cuba Libre',
      description: "A classic and you don't even need to taste the alcohol.",
      img: 'cuba-libre.jpg',
      ingredients: ['Brown rum', 'Coke']
    },
    {
      id: 11,
      name: 'Gin Tonic',
      description: "Aah, the hype of 2014. But no worries that you still drink it, it doesn't make you unfashionable. At all.",
      img: 'gin-tonic.jpg',
      ingredients: ['Gin', 'Tonic']
    },
    {
      id: 12,
      name: 'Mojito',
      description: "",
      img: 'mojito.jpg',
      ingredients: ['White rum', 'Mint', 'Sugar', 'Lime', 'Soda']
    },
    {
      id: 13,
      name: 'Caprioska',
      description: "Not to be confused with a Caipirinha.",
      img: 'caprioska.jpg',
      ingredients: ['Wodka', 'Lime', 'Sugar']
    },
    {
      id: 14,
      name: 'Caipirinha',
      description: "Not to be confused with aCaprioska.",
      img: 'caipirinha.jpeg',
      ingredients: ['White rum', 'Lime', 'Sugar']
    },
    {
      id: 15,
      name: 'Margarita',
      description: "Not the pizza.",
      img: 'margarita.jpg',
      ingredients: ['Tequila', 'Triple sec', 'Lime']
    },
    {
      id: 16,
      name: 'Long Island Iced Tea',
      description: "A personal favorite. For those who aren't planning to walk nor see straight. Consists of 40% alcohol and 60% hangover.",
      img: 'long-island-ice-tea.jpeg',
      ingredients: ['Wodka', 'Gin', 'Rum', 'Tequila', 'Triple Sec', 'Lemon', 'Coke']
    }
  ];
  export default {
    findAll() {
      return drinks;
    },
    findById(id) {
      return drinks.filter(drink => drink.id === id)[0];
    }
  };
</script>
