const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/comments/:id', async (req, res) => {
//   try {
//     const commentData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name', 'id'],
//         },
//       ],
//     });

//     const comment = commentData.get({ plain: true });
//     // console.log('comment :>> ', comment);

//     // res.render('post', {
//     //   ...post,
//     //   logged_in: req.session.logged_in,
//     //   my_post: myPost,
//     // });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await Comment.create({
      content: req.body.content,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const commentData = await Comment.destroy({
//       where: {
//         id: req.params.id,
//         post_id: req.session.post_id,
//       },
//     });

//     if (!commentData) {
//       res.status(404).json({ message: 'No comment found with this id!' });
//       return;
//     }

//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
