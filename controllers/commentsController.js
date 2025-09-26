import Comment from "../models/CommentsModel.js";
import Project from "../models/ProjectModel.js";

export const addComment = async (req, res) => {
  const user_id = req.user && req.user.id;
  try {
    const project = await Comment.create({ ...req.body, user_id });
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeComment = async (req, res) => {
  try {
    const comment = await Comment.findByPk(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    await comment.destroy();
    res.json({ message: "Comment deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
