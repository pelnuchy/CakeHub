
export interface Recipe {
  id: string;
  recipeName: string;
  recipeSize: string;
  recipeJamfilling: string;
  ingredients: string[];
  sum_dough: number;
  sum_cream: number;
}
export const recipeData: Recipe[] = [
  {
    id: 'RCP50001',
    recipeName: 'Strawberry Sponge Cake',
    recipeSize: 'Medium',
    recipeJamfilling: 'Strawberry',
    ingredients: ['Flour', 'Sugar', 'Eggs', 'Strawberries', 'Butter', 'Baking Powder'],
    sum_dough: 200,
    sum_cream: 100,
  },
  {
    id: 'RCP50002',
    recipeName: 'Raspberry Butter Cake',
    recipeSize: 'Large',
    recipeJamfilling: 'Raspberry',
    ingredients: ['Flour', 'Sugar', 'Butter', 'Eggs', 'Raspberries', 'Baking Powder'],
    sum_dough: 300,
    sum_cream: 150,
  },
  {
    id: 'RCP50003',
    recipeName: 'Blueberry Chocolate Cake',
    recipeSize: 'Small',
    recipeJamfilling: 'Blueberry',
    ingredients: ['Flour', 'Cocoa Powder', 'Sugar', 'Eggs', 'Butter', 'Blueberries', 'Baking Powder'],
    sum_dough: 250,
    sum_cream: 120,
  },
  // Add more recipes here...
];
