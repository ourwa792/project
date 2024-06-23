const { Lesson, Category } = require("../model/association");
exports.getIndex = async (req, res) => {
  try {
    const lesson = await Lesson.findAll({
      include: [
        {
          model: Category,
          as: "category",
        },
      ],
    });
    //console.log(lesson); // lesson is array
    res.render("lesson/home", {
      pageTitle: "home page",
      lesson,
        });
  } catch (error) {
    console.log(error);
  }
};
