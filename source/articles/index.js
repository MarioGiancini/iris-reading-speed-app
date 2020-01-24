import HowToReadFasterWithoutSacrificingComprehension from './HowToReadFasterWithoutSacrificingComprehension.md';
import HowMuchCoffeeShouldYouHaveAfterNightSleep from './HowMuchCoffeeShouldYouHaveAfterNightSleep.md';

const articles = [
  HowToReadFasterWithoutSacrificingComprehension,
  HowMuchCoffeeShouldYouHaveAfterNightSleep,
];

export const getRandomArticle = () => (
  articles[Math.floor(Math.random() * articles.length)]
);
