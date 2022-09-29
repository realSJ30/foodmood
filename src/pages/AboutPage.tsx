function AboutPage() {
  return (
    <div className="flex flex-col justify-center place-items-center h-screen md:h-auto font-nunito pb-4">
      <p className="text-sm text-gray-700">About us</p>
      <img
        className="w-64 h-64 shadow-md my-20"
        src={require("../assets/food.jpg")}
        alt="FoodMood"
      />
      <p className="text-regular text-gray-700 text-center">
        <span className="font-black text-2xl cursor-pointer group hover:text-orange-400 transition-colors ease-in-out duration-300 mr-1">
          Food
          <span className="text-orange-400 group-hover:text-black transition-colors ease-in-out duration-300">
            mood
          </span>
        </span>
        is a website I made to showcase different kinds of foods and its
        recipes. As you can see I like food so I created this website to show
        how much I love food. Different varieties of food can be found here in
        the foodmood. The application uses free version of{" "}
        <a href="https://spoonacular.com" target={"_blank"}>
          <span className="font-semibold">spoonacular api</span>.
        </a>
      </p>
      <br />
      <p className="text-xs text-orange-400">Made with love by SJ Moraga</p>
      <p className="text-xs">React | Tailwind | HeadlessUI | spoonacularapi</p>
    </div>
  );
}

export default AboutPage;
