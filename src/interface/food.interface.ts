export interface IFood {
  id: number;
  title: string;
  image: string;
  description: string,
  price: string;
}




export interface WinePairing {
  pairedWines: any[];
  pairingText: string;
  productMatches: any[];
}

export interface Ingredient {
  id: number;
  name: string;
  localizedName: string;
  image: string;
}

export interface Temperature {
  number: number;
  unit: string;
}

export interface Equipment {
  id: number;
  name: string;
  localizedName: string;
  image: string;
  temperature: Temperature;
}

export interface Length {
  number: number;
  unit: string;
}

export interface IStep {
  number: number;
  step: string;
  ingredients: Ingredient[];
  equipment: Equipment[];
  length: Length;
}

export interface IAnalyzedInstruction {
  name: string;
  steps: IStep[];
}

export interface IFoodDetail {
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  dairyFree?: boolean;
  veryHealthy?: boolean;
  cheap?: boolean;
  veryPopular: boolean;
  sustainable: boolean;
  lowFodmap: boolean;
  weightWatcherSmartPoints: number;
  gaps: string;
  preparationMinutes: number;
  cookingMinutes: number;
  aggregateLikes: number;
  healthScore: number;
  creditsText: string;
  sourceName: string;
  pricePerServing: number;
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  sourceUrl: string;
  image: string;
  imageType: string;
  summary: string;
  cuisines: any[];
  dishTypes: any[];
  diets: string[];
  occasions: string[];
  winePairing: WinePairing;
  instructions: string;
  analyzedInstructions: IAnalyzedInstruction[];
  originalId?: any;
}


